'use client'
import {disableScroll} from "@/scripts/popups/popupHandler"

type props = {
  className?: string;
  form: string;
  text?: string;
  createAccessLog?: (log: string, ip: string) => Promise<void>;
}

const BtnForm : React.FC<props> = ({className = '', form, text="Join Mailing List", createAccessLog}) => {
  return (
    <button className={`BtnForm ${className}`} onClick={async () => {
      // Tell server that the CTA button has been clicked
      // fetch('https://api.ipify.org').then((res) => res.text())
      //   .then(ip => {
      //     createAccessLog("CTA Clicked", ip);
      //   }).catch(err => createAccessLog("CTA Clicked", "API error: " + err));

      // Open the  form
      var contactFormElement = document.getElementById(form);
      if (contactFormElement) {
        disableScroll()
        contactFormElement.classList.remove("init");
        contactFormElement.classList.add("show");
      }
    }}>
      {text}
    </button>
  )
}

export default BtnForm