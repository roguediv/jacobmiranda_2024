
export default async function BillingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
})  {
  const params = await searchParams;

  
  return (
    <>
    <div className="billing-wrapper">
      <section>
        <div className="sct-content">
          <div className="sct-header">
            <h4>Your Payment was Successful!</h4><br />
            <p>Thank you for your payment! We will now be able to renue your domain name and continue the hosting of your website. As always, feel free to reach out if you require any assistance.</p>
          </div>
          <div className="text">
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
