'use client'
import {enableScroll, slide, isStringLengthValid, isValidEmail, isValidPhoneNumber, alertErrorMessage} from "@/scripts/popups/popupHandler"
import Image from "next/image"
import { useRef, useEffect, useState } from "react";
import { MdClose } from 'react-icons/md'
import AutoTextarea from "../../elements/AutoTextArea";
import { GlobalEmailAnchor, GlobalPhoneAnchor } from "@/components/$main/$global";
import Socials from "@/components/$main/Socials";

type props = {
  className?: string;
}

const ContactForm : React.FC<props> = ({className = ''}) => {
  const form = useRef<HTMLDivElement>(null)
  let isSubmitted = false; // Prevent a bot from submitting over and over again

  /// Form Functions
  function closeForm() {
    if (form) {
      enableScroll()
      form.current?.classList.remove("show");
      setTimeout(() => {
        form.current?.classList.remove("submitted");
      }, 1000)
    }
  }
  function radioClick(button: HTMLElement) {
    
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
      tags += `${button.textContent}|,`
    } else {
      tags = tags.replaceAll(`${button.textContent}|,`, '')
    }
  }

  /// Form 1 Inputs
  const form1Inputs = useRef<HTMLInputElement[]>([])
  const addToForm1Inputs = (el: HTMLInputElement) => {
    if (el && !form1Inputs.current.includes(el)) {
      form1Inputs.current.push(el)
    }
  }
  const form1Textarea1 = useRef<HTMLTextAreaElement | null>(null)

  let tags = ''

  const sendContactRequestEmail = async (contactRequestData = {}) => {
    const response = await fetch('/api/sendContactRequest', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactRequestData)
    })
  }

  return (
    <div id="ContactForm" ref={form} className={`ContactForm Popup theme-secondary init ${className}`}>
      <div className="backdrop"></div>
      <div className="wrapper">
        <div className="back">
          <button className="custom" onClick={closeForm}>
            <MdClose />
          </button>
        </div>
        <div className="top">
          <div className="background">
            <svg width="75" height="696" viewBox="0 0 75 696" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_844_26197" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="696"><rect width="75" height="696" fill="#D9D9D9"/></mask><g mask="url(#mask0_844_26197)"><g filter="url(#filter0_d_844_26197)"><path d="M-412.422 -1H23.5781L40.5781 14V105.5L23.5781 122.5V328.5L66.0781 356V485.5L40.5781 502V529.25V679L23.5781 696H-412.422V-1Z" fill="#0F3044"/></g><g filter="url(#filter1_d_844_26197)"><path d="M-412.422 0H23.5781L40.5781 14V105.5L23.5781 122.5V328.5L66.0781 356V485.5L40.5781 502V529.25V679L23.5781 696H-412.422V0Z" fill="#010708" fill-opacity="0.21" shape-rendering="crispEdges"/><path d="M-412.422 0H23.5781L40.5781 14V105.5L23.5781 122.5V328.5L66.0781 356V485.5L40.5781 502V529.25V679L23.5781 696H-412.422V0Z" stroke="#98D0E7" stroke-opacity="0.55" stroke-width="2" shape-rendering="crispEdges"/></g><mask id="mask1_844_26197" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="-413" y="-1" width="480" height="697"><path d="M-412.422 -1H23.5781L40.5781 14V105.5L23.5781 122.5V328.5L66.0781 356V485.5L40.5781 502V529.25V679L23.5781 696H-412.422L-412.422 -1Z" fill="#0F3044"/></mask><g mask="url(#mask1_844_26197)"><g filter="url(#filter2_f_844_26197)"><circle cx="-362.422" cy="488" r="351" fill="url(#paint0_radial_844_26197)" fill-opacity="0.6"/></g><g opacity="0.05"><rect width="6.47041" height="28.0384" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 76.1367 582.154)" fill="#DDFFEA"/></g></g></g><defs><filter id="filter0_d_844_26197" x="-416.422" y="-1" width="486.5" height="705" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_844_26197"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_844_26197" result="shape"/></filter><filter id="filter1_d_844_26197" x="-421.022" y="-4.6" width="495.7" height="713.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.00845029 0 0 0 0 0.192243 0 0 0 0 0.273112 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_844_26197"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_844_26197" result="shape"/></filter><filter id="filter2_f_844_26197" x="-828.522" y="21.9" width="932.2" height="932.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="57.55" result="effect1_foregroundBlur_844_26197"/></filter><radialGradient id="paint0_radial_844_26197" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-362.422 488) rotate(90) scale(351)"><stop stop-color="#60F49C" stop-opacity="0.49"/><stop offset="1" stop-color="#122B33" stop-opacity="0"/></radialGradient></defs></svg>
            <svg width="697" height="76" viewBox="0 0 697 76" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_916_7183" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="697" height="76"><rect x="696.5" y="0.5" width="75" height="696" transform="rotate(90 696.5 0.5)" fill="#D9D9D9"/></mask><g mask="url(#mask0_916_7183)"><g filter="url(#filter0_d_916_7183)"><path d="M697.5 -411.922V24.0781L682.5 41.0781H591L574 24.0781H368L340.5 66.5781H211L194.5 41.0781H167.25H17.5L0.5 24.0781V-411.922H697.5Z" fill="#0F3044"/></g><g filter="url(#filter1_d_916_7183)"><path d="M696.5 -411.922V24.0781L682.5 41.0781H591L574 24.0781H368L340.5 66.5781H211L194.5 41.0781H167.25H17.5L0.5 24.0781V-411.922H696.5Z" fill="#010708" fill-opacity="0.21" shape-rendering="crispEdges"/><path d="M696.5 -411.922V24.0781L682.5 41.0781H591L574 24.0781H368L340.5 66.5781H211L194.5 41.0781H167.25H17.5L0.5 24.0781V-411.922H696.5Z" stroke="#98D0E7" stroke-opacity="0.55" stroke-width="2" shape-rendering="crispEdges"/></g><mask id="mask1_916_7183" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="-412" width="698" height="479"><path d="M697.5 -411.922V24.0781L682.5 41.0781H591L574 24.0781H368L340.5 66.5781H211L194.5 41.0781H167.25H17.5L0.5 24.0781V-411.922L697.5 -411.922Z" fill="#0F3044"/></mask><g mask="url(#mask1_916_7183)"><g filter="url(#filter2_f_916_7183)"><circle cx="208.5" cy="-361.922" r="351" transform="rotate(90 208.5 -361.922)" fill="url(#paint0_radial_916_7183)" fill-opacity="0.6"/></g><g opacity="0.05"><rect width="6.47041" height="28.0384" transform="matrix(1 -4.37114e-08 -4.37114e-08 -1 114.348 76.6367)" fill="#DDFFEA"/></g></g></g><defs><filter id="filter0_d_916_7183" x="-3.5" y="-411.922" width="705" height="486.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_916_7183"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_916_7183" result="shape"/></filter><filter id="filter1_d_916_7183" x="-8.1" y="-416.522" width="713.2" height="495.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.00845029 0 0 0 0 0.192243 0 0 0 0 0.273112 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_916_7183"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_916_7183" result="shape"/></filter><filter id="filter2_f_916_7183" x="-257.6" y="-828.022" width="932.2" height="932.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="57.55" result="effect1_foregroundBlur_916_7183"/></filter><radialGradient id="paint0_radial_916_7183" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(208.5 -361.922) rotate(90) scale(351)"><stop stop-color="#60F49C" stop-opacity="0.49"/><stop offset="1" stop-color="#122B33" stop-opacity="0"/></radialGradient></defs></svg>
            <svg width="377" height="696" viewBox="0 0 377 696" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_844_26309" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="377" height="696"><rect width="377" height="696" fill="#D9D9D9"/></mask><g mask="url(#mask0_844_26309)"><mask id="mask1_844_26309" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="10" y="-1" width="480" height="697"><path d="M10.5781 -1H446.578L463.578 14V105.5L446.578 122.5V328.5L489.078 356V485.5L463.578 502V529.25V679L446.578 696H10.5781L10.5781 -1Z" fill="#0F3044"/></mask><g mask="url(#mask1_844_26309)"><g opacity="0.05"><path d="M-100.453 833.424V945.578L51.6015 1098.71L148.658 1003.81V609.117L118.462 575.686H97.9727V982.244L51.6015 1028.61L-48.6899 926.167V860.384L-79.9635 833.424H-100.453Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M-44.3761 791.367H-55.1602V597.255L102.286 445.2V307.165H296.399V323.341L265.125 356.772H161.599V453.828L-18.4945 631.764V764.407L-44.3761 791.367Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M45.1226 155.11L-36.8359 72.0734L27.8681 7.36937V-41.1587L35.417 -51.9427H58.0634L66.6906 -41.1587V21.3886L16.0057 72.0734L45.1226 101.19L126.003 23.5454V-94.0004H145.414L162.668 -69.1971V38.643L45.1226 155.11Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M62.3867 665.193V740.681L141.11 663.036V609.116H120.62L62.3867 665.193Z" fill="#DDFFEA"/><path d="M205.811 840.972L228.458 863.618H257.574L300.711 819.404L205.811 724.504L206.89 488.335L151.891 537.941V673.82L134.637 691.074V727.74L226.301 819.404L205.811 840.972Z" fill="#DDFFEA"/><path d="M109.841 522.843H89.3518V491.569H97.979V378.337H88.2734V255.399L115.233 229.518L88.2734 202.558V187.46H141.115V491.569L109.841 522.843Z" fill="#DDFFEA"/><path d="M172.384 416.082H155.129L152.972 176.677L141.11 187.461V171.285H88.2682V240.303L53.7594 274.811L17.0938 238.146L135.718 119.522H243.558L236.009 130.306H206.892L198.265 138.933V146.482L273.753 220.891V252.165L252.185 274.811L217.676 239.224V171.285H204.736V384.808L172.384 416.082Z" fill="#DDFFEA"/><path d="M151.895 479.708V498.041L205.815 444.121V425.788L151.895 479.708Z" fill="#DDFFEA"/><path d="M205.812 395.592V413.925L259.733 360.005V352.456H247.87L205.812 395.592Z" fill="#DDFFEA"/><path d="M151.895 507.745V526.078L205.815 472.158V453.825L151.895 507.745Z" fill="#DDFFEA"/><rect width="8.62721" height="28.0384" transform="matrix(1 0 0 -1 130.316 105.501)" fill="#DDFFEA"/><rect width="6.47041" height="28.0384" transform="matrix(1 0 0 -1 343.848 718.033)" fill="#DDFFEA"/><path d="M307.176 471.081L291 487.257V482.517L307.176 466.767V471.081Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 460.299L291 476.475V471.735L307.176 455.985V460.299Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 449.513L291 465.689V460.95L307.176 445.2V449.513Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 438.731L291 454.907V450.168L307.176 434.418V438.731Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 427.946L291 444.122V439.382L307.176 423.632V427.946Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 417.162L291 433.338V428.598L307.176 412.848V417.162Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 406.38L291 422.556V417.816L307.176 402.066V406.38Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 395.594L291 411.771V407.031L307.176 391.281V395.594Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 384.811L291 400.987V396.248L307.176 380.498V384.811Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 374.027L291 390.203V385.464L307.176 369.714V374.027Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 363.242L291 379.418V374.678L307.176 358.928V363.242Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 352.458L291 368.634V363.894L307.176 348.144V352.458Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 341.675L291 357.851V353.111L307.176 337.361V341.675Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 330.89L291 347.066V342.327L307.176 326.577V330.89Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 320.105L291 336.281V331.542L307.176 315.792V320.105Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 309.321L291 325.497V320.757L307.176 305.007V309.321Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M307.176 298.539L291 314.715V309.975L307.176 294.225V298.539Z" fill="#DDFFEA" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M232.762 650.098V631.765" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M319.03 517.453L216.582 619.901V544.413L259.718 503.434H306.089L319.03 517.453Z" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M24.6211 352.458V610.196H55.8947L76.3844 587.55V300.695L24.6211 352.458Z" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M274.824 804.309L307.176 836.661L326.587 817.25V529.317L274.824 581.08V804.309Z" stroke="#DDFFEA" stroke-width="1.72516"/><rect width="8.62721" height="8.62721" transform="matrix(1 0 0 -1 227.375 314.715)" fill="#DDFFEA"/><rect width="8.62721" height="8.62721" transform="matrix(1 0 0 -1 292.074 254.323)" fill="#DDFFEA"/><rect x="0.862582" y="-0.862582" width="13.3725" height="17.6861" transform="matrix(1 0 0 -1 214.434 649.45)" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M265.109 169.131V150.798" stroke="#DDFFEA" stroke-width="1.72516"/><rect x="0.862582" y="-0.862582" width="13.3725" height="17.6861" transform="matrix(1 0 0 -1 246.781 168.483)" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M36.8081 873.324H21.4023V672.742L58.068 639.311H75.3224V843.129L36.8081 873.324Z" stroke="#DDFFEA" stroke-width="1.72516"/><path d="M-49.7773 361.084V509.903H-21.7389L-5.56289 496.963V388.044L164.825 219.813V118.444L141.1 95.7972H115.218V197.167L-49.7773 361.084Z" stroke="#DDFFEA" stroke-width="1.72516"/></g></g></g></svg>
            <div></div>
          </div>
          <div className="content">
            <div className="p1">
              <h2>Let's Talk & <br /><span>Innovate</span></h2>
              <Socials isSvg={true}/>
            </div>
            <div className="p2">
              <div className="side">
                <Image src={`/images/assets/cybercheck.png`} width={1000} height={1000} alt="Check Icon" />
              </div>
              <h2>Message <span>Sent</span></h2>
              <p className="v2">Thank you for reaching out! I will get back to you shortly—excited to learn about your company and how I can help.</p>
              <button className="green" onClick={closeForm}>Close</button>
            </div>
          </div>
        </div>
        <div className="bot">
          <div className="slide-in">
            <p className="v2">Ask me anything or just say hi—excited to chat and share more about how I would be a great fit for your company.</p>
            <div className="one text-input ipt login-email">
              <div className="form__group field">
                <input ref={addToForm1Inputs} name="name" type="text" className="form__field" maxLength={255} placeholder="a" />
                <label className="form__label">Name</label>
              </div>
              <div className="error"></div>
            </div>
            <div className="one text-input ipt login-email">
              <div className="form__group field">
                <input ref={addToForm1Inputs} name="email" type="text" className="form__field" maxLength={255} placeholder="a" />
                <label className="form__label">Email</label>
              </div>
              <div className="error"></div>
            </div>
            <div className="one text-input ipt login-email">
              <div className="form__group field">
                <input ref={addToForm1Inputs} name="phone" type="text" className="form__field" maxLength={255} placeholder="a" />
                <label className="form__label">Phone (optional)</label>
              </div>
              <div className="error"></div>
            </div>
            <div className="radio">
              <p className="v2">I'm interested in...</p>
              <div className="radioButtons">
                <button onClick={(e) => radioClick(e.currentTarget)}>Front-End Dev</button>
                <button onClick={(e) => radioClick(e.currentTarget)}>Back-End Dev</button>
                <button onClick={(e) => radioClick(e.currentTarget)}>Full-Stack Dev</button>
                <button onClick={(e) => radioClick(e.currentTarget)}>Mobile Dev</button>
                <button onClick={(e) => radioClick(e.currentTarget)}>DevOps</button>
                <button onClick={(e) => radioClick(e.currentTarget)}>Data Engineering</button>
                <button onClick={(e) => radioClick(e.currentTarget)}>QA</button>
              </div>
            </div>
            <AutoTextarea ref={form1Textarea1} placeholder="Message" />
            <button onClick={() => {
              const name = form1Inputs.current.find((input) => input.name === 'name');
              const email = form1Inputs.current.find((input) => input.name === 'email');
              const phone = form1Inputs.current.find((input) => input.name === 'phone');
              const message = form1Textarea1.current;

              
              tags = tags.trim().slice(0, -2)

              let errors = document.querySelectorAll('.error');
              let inputs = document.querySelectorAll('input');
              errors.forEach(element => {
                element.textContent = '';
              });
              inputs.forEach(elm => {
                elm.classList.remove('inputError');
              })

              if (!name || !isStringLengthValid(name.value)) {
                alertErrorMessage("Name Invalid", "First name must have between 2 and 300 characters.", name);
                return;
              }
              if (!email || !isValidEmail(email.value)) {
                alertErrorMessage("Not a Proper Email", "Please make sure that your email is correct.", email);
                return;
              }
              sendContactRequestEmail({
                name: name.value,
                email: email.value, 
                phone: phone ? phone.value : "",
                tags: tags,
                message: message ? message.value : "",
              })
              form.current?.classList.add('submitted')
            }}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm