import CptInvoice from "@/components/parts/billing/CptInvoice";
import StripePayment from "@/components/parts/billing/StripePayment";
import { Invoice } from "@/scripts/data/BillingInterface";

export default async function SettingsPage(props: {params: Promise<{id: string}>}) {
  const params = await props.params;

  let invoice : Partial<Invoice> = {total: 100, monthly: 2500, email: "musicthemighty23@gmail.com"};
  
  return (
    <>
    <div className="billing-wrapper">
      <section>
        <div className="sct-content">
          <div className="sct-header">
            <h2>Billing Invoice</h2>
            <p>Complete your payment for JamDealer.com</p>
          </div>
          <div className="text">
            <CptInvoice invoice={invoice} />
            <StripePayment invoice={invoice!} />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
