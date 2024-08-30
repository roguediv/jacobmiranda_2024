'use client'
import Image from 'next/image'
import ObserveElement from '../$functions/ObserveElement'
import { useRef, useEffect, useState } from "react"
import Link from 'next/link'
import NavLinks from './NavLinks'
import SvgLogo from '../svg/SvgLogo'
import Socials from './Socials'
import BtnForm from '../popups/BtnForm'

type props = {
  className?: string;
}

const Nav: React.FC<props> = ({className = ''}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const navElement = document.querySelector('nav');
    const observer1 = ObserveElement(".nav-trigger", (e) => {
      if (navElement) {
        navElement.classList.remove("scrolled");
      }
    }, () => {
      if (navElement) {
        navElement.classList.add("scrolled");
      }
    });
    const handleAnchorClick = (event: Event) => {
      const clickedAnchor = event.target as HTMLAnchorElement;
      // Remove the "show" class from navElement or modify as needed
      navElement?.classList.add("phone-fade-out");
      setTimeout(() => {
        navElement?.classList.remove("activePhone", "phone-fade-out");
      }, 250)
    };

    const anchorElements = navElement?.querySelectorAll("a");

    if (anchorElements) {
      anchorElements.forEach((anchor) => {
        anchor.addEventListener("click", handleAnchorClick);
      });
    }

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 750);
    
    return () => {
      observer1.disconnect();
      const anchorElements = navElement?.querySelectorAll("a");
      clearTimeout(timer);

      if (anchorElements) {
        anchorElements.forEach((anchor) => {
          anchor.removeEventListener("click", handleAnchorClick);
        });
      }
    };
  }, []);

  function handleNavToggle() {
    const navElement = document.querySelector('nav');
    const burger = document.querySelector('nav .hamburger');
    if (navElement?.classList.contains("activePhone")) {
      navElement?.classList.add("phone-fade-out");
      setTimeout(() => {
        navElement?.classList.remove("activePhone", "phone-fade-out");
      }, 250)
    } else {
      navElement?.classList.add("activePhone");
    }
  }
  
  return (
    <nav className={`${className} ${isLoaded ? 'animate' : ''}`}>
      <div className={`wrapper`}>
        <div className="scroller-contain">
          <div className="nav-content">

            <Socials/>
            <div className="logo">
              <SvgLogo />
            </div>
            <div className="nav-wrapper">
              <NavLinks />
              <BtnForm className='green' form='ContactForm' text='Contact Me' />
              <Socials/>
            </div>
            <div className="phone">
              <div className="hamburger" onClick={handleNavToggle}>
                <label>
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="nav-trigger"></div>
    </nav>
  )
}

export default Nav
