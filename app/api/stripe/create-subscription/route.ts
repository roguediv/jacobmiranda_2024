import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export async function POST(request: NextRequest) {
  try {
    const { invoice, paymentMethodID } = await request.json();
    //const invoice = await db.invoice.findUnique({ where: { invoiceID } });
    if (!invoice) throw Error("Invoice not found");

    const email = invoice.email;
    let customer = await stripe.customers.list({ email, limit: 1 });

    if (customer.data.length === 0) {
      // No customer found, create a new one
      customer = await stripe.customers.create({ email });
      console.log("Created new customer:", customer);
    } else {
      // Use the existing customer
      customer = customer.data[0];
    }

    if (!customer.id) {
      throw new Error("Failed to create or find a customer");
    }

    // Step 1: Attach the payment method to the customer (if not already attached)
    const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodID);

    // If the payment method isn't attached to the customer yet, attach it
    if (paymentMethod.customer !== customer.id) {
      await stripe.paymentMethods.attach(paymentMethodID, {
        customer: customer.id,
      });
    }

    // Step 2: Update the customer's default payment method
    await stripe.customers.update(customer.id, {
      invoice_settings: {
        default_payment_method: paymentMethodID,
      },
    });

    let initialPaymentIntent = null;
    if (invoice.total && invoice.total != 0 && invoice.total != '') {
      initialPaymentIntent = await stripe.paymentIntents.create({
        amount: invoice.total,  // The one-time setup fee
        currency: 'usd',
        customer: customer.id,
        payment_method: paymentMethodID, // Use the payment method provided by the user
        off_session: true, // Payment is made off-session, i.e., without further user interaction
        confirm: true, // Automatically confirm the payment
        description: (invoice.totalTitle ? invoice.totalTitle : 'Website Domain and Server Setup Fee'),
      });
    }

    if (invoice.monthly && invoice.monthly != 0 && invoice.monthly != '') {
      const price = await stripe.prices.create({
        unit_amount: invoice.monthly,
        currency: 'usd',
        recurring: { interval: 'month' },
        product_data: {
          name: (invoice.monthlyTitle ? invoice.monthlyTitle : "Hosting Fee"),
        },
      });
  
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: price.id }],
        default_payment_method: paymentMethodID,
        expand: ['latest_invoice.payment_intent'], // Expand the payment intent for the initial payment
      });

      return NextResponse.json({ clientSecret: initialPaymentIntent ? initialPaymentIntent.client_secret : '', subscriptionId: subscription.id, });
    }

    return NextResponse.json({ clientSecret: initialPaymentIntent ? initialPaymentIntent.client_secret : '', });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
