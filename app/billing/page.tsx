import TextInput from "@/components/elements/html/TextInput";
import ToggleList from "@/components/elements/html/ToggleList";
import CptInvoice from "@/components/billing/CptInvoice";

export default async function BillingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const useLastInvoice = params.useLastInvoice;
  
  return (
    <>
    <div className="billing-wrapper">
      <section>
        <div className="sct-content">
          <div className="sct-header">
            <h4>Website Setup Invoice</h4>
            <p>To make this website live, you'll need to select a domain name, choose the professional emails you'd like to associate with your domain, and provide your billing information. Please complete the following fields to finalize the setup of your website.</p>
          </div>
          <div className="text">
            <CptInvoice hasDomainEmailSelector={true}/>
            <div>
              <p className="v2 mb">Please choose a domain name:</p>
              <p className="v2"><b>Available Domain Names Include</b></p>
              <ul className="mb bullets flex">
                <li><p className="v2">whimsyhomedecor.com</p></li>
                <li><p className="v2">whimsydecorstl.com</p></li>
                <li><p className="v2">whimsyhomes.com</p></li>
                <li><p className="v2">whimsydecorations.com</p></li>
                <li><p className="v2">whimsydecors.com</p></li>
                <li><p className="v2">mywhimsydecor.com</p></li>
                <li><p className="v2">whimdecor.com</p></li>
                <li><p className="v2">whimdec.com</p></li>
              </ul>
            </div>
            <TextInput id="iptBillingDomainName" placeholder="Preferred Domain" loadText={useLastInvoice ? `}` : ""}/>
            <ToggleList title="Contact Info" textInputs={[
              {placeHolder: "First Name", id: "iptBillingFName", loadText: `${useLastInvoice ? `` : ""}`},
              {placeHolder: "Last Name", id: "iptBillingLName", loadText: `${useLastInvoice ? `` : ""}`},
              {placeHolder: "Primary Email Address", id: "iptBillingEmail", loadText: `${useLastInvoice ? `` : ""}`},
              {placeHolder: "Phone Number", id: "iptBillingPhone", loadText: `${useLastInvoice ? `` : ""}`},
            ]} />
            <ToggleList title="Billing Address" textInputs={[
              {placeHolder: "Street Address", id: "iptBillingAddress", loadText: `${useLastInvoice ? `` : ""}`},
              {placeHolder: "City", id: "iptBillingCity", loadText: `${useLastInvoice ? `` : ""}`},
              {placeHolder: "State", id: "iptBillingState", loadText: `${useLastInvoice ? `` : ""}`},
              {placeHolder: "Zipcode", id: "iptBillingZipcode", loadText: `${useLastInvoice ? `` : ""}`},
            ]} />
            {/* <SubmitInvoiceButton className="standard" SubmitInvoice={CreateInvoice}/> */}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
