import CptInvoice from "@/components/parts/billing/CptInvoice";
import StripePayment from "@/components/parts/billing/StripePayment";
import { Invoice } from "@/scripts/data/BillingInterface";

export default async function SettingsPage(props: {params: Promise<{id: string}>}) {
  const params = await props.params;

  let invoice : Partial<Invoice> = {totalTitle: "Initial Payment", total: 90000, monthlyTitle: "Website Hosting", monthly: 3500, email: "mail@gmail.com", name: "Name"};
  if (params.id == "choicesmediaandmarketing%40gmail.com") {
    invoice = {totalTitle: "Initial Payment", total: 25000, monthlyTitle: "Website Hosting", monthly: 0, email: "choicesmediaandmarketing@gmail.com", name: "Bryden"}
  }
  return (
    <>
    <div className="billing-wrapper">
      <section>
        <div className="sct-content">
          <div className="sct-header">
            <h2>Billing Invoice</h2>
            <p>Complete your payment for web services</p>
          </div>
          <div className="text">
            <CptInvoice invoice={invoice!} />
            <StripePayment invoice={invoice!} />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
