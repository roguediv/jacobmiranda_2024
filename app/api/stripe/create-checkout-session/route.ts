import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const {invoice} = await request.json();
    if (!invoice) throw Error("Invoice not found");

    const price = await stripe.prices.create({
      unit_amount: invoice.monthly,
      currency: 'usd',
      recurring: {
        interval: 'month', 
      },
      product_data: {
        name: `Web Hosting Fee for Invoice: ${invoice.invoiceID}`,
      },
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{price: price.id, quantity: 1}],
      mode: "subscription",
      success_url: `/dashboard/billing/success/${invoice.invoiceID}`,
      cancel_url: `/dashboard/billing?useLastInvoice=${invoice.invoiceID}`
    })

    let email = invoice.email;
    let customer = await stripe.customers.list({email, limit: 1});
    if (customer.data.length != 1) {
      customer = await stripe.customers.create({
        email,
      });
    }

    return NextResponse.json({sessionID: session.id})
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      {error: `Internal Server Error: ${error}`},
      {status: 500}
    )
  }

}