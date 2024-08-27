'use client'
import {disableScroll} from "@/scripts/popups/popupHandler"

type props = {
  className?: string;
  text?: string;
  createAccessLog: (log: string, ip: string) => Promise<void>;
}

const BtnContactForm : React.FC<props> = ({className = '', text="Contact Me", createAccessLog}) => {
  return (
    <button className={`BtnContactForm ${className}`} onClick={() => {
      // Tell server that the CTA button has been clicked
      fetch('https://api.ipify.org').then((res) => res.text())
        .then(ip => {
          createAccessLog("CTA Clicked", ip);
        }).catch(err => createAccessLog("CTA Clicked", "API error: " + err));

      // Open the contact form
      var contactFormElement = document.getElementById("ContactForm");
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

export default BtnContactForm