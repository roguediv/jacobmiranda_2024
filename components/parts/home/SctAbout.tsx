'use client'
import { DiPhotoshop } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import Image from "next/image";
import SvgAboutBox from "../../svg/SvgAboutBox";
import SvgDiamond from "../../svg/SvgDiamond";
import { useEffect, useState } from "react";
import ObserveElement from "@/components/$functions/ObserveElement";

type props = {
  className?: string;
}

const SctAbout : React.FC<props> = ({className = ''}) => {
  const [isButtonToggled, setIsButtonToggled] = useState(false);
  useEffect(() => {
    const sctElement = document.querySelector('#home-sct-2');
    const observer1 = ObserveElement("#home-sct-2 .trigger1", (e) => {
      if (sctElement) {
        sctElement.classList.add("animate1");
      }
    }, () => {});
    const observer2 = ObserveElement("#home-sct-2 .trigger2", (e) => {
      if (sctElement) {
        sctElement.classList.add("animate2");
      }
    }, () => {});
    const observer3 = ObserveElement("#home-sct-2 .trigger3", (e) => {
      if (sctElement) {
        sctElement.classList.add("animate3");
      }
    }, () => {});
    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
    }
  }, [])
  return (
  <section id="home-sct-2" className="theme-darkgreen SctAbout">
    <div className="flare flare1"></div>
    <div className="section-top"></div>
    <div className="sct-content">
      <div className="sct-header">
        <h6>About Me</h6>
        <h2 className="trigger1">A Passionate Creative <br/> Crafting <span>Compelling</span> Applications</h2>
        <svg className="highlight" width="239" height="107" viewBox="0 0 239 107" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse opacity="0.3" cx="119.5" cy="53.5" rx="119.5" ry="53.5" fill="url(#paint0_radial_296_2242)"/><defs><radialGradient id="paint0_radial_296_2242" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(119.698 52.5273) rotate(89.6146) scale(44.9737 100.454)"><stop stop-color="#60F49C" stop-opacity="0.28"/><stop offset="1" stop-color="#50DEA2" stop-opacity="0"/></radialGradient></defs></svg>
      </div>
      <div className={'about'}>
        <div className="background">
          <SvgAboutBox />
        </div>
        <div className="character">
          <svg className="backdrop" width="596" height="784" viewBox="0 0 596 784" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="298" cy="392" rx="298" ry="392" fill="url(#paint0_radial_296_2241)"/><defs><radialGradient id="paint0_radial_296_2241" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(298.493 384.873) rotate(90.0707) scale(399.128 303.419)"><stop stop-color="#60F49C" stop-opacity="0.23"/><stop offset="1" stop-color="#50DEA2" stop-opacity="0"/></radialGradient></defs></svg>
          <Image src="/images/assets/character.png" width={600} height={1000} alt="Jacob's Virtual Character" />
        </div>
        <div className="left">
          <div className="header">
            <div className="top">
              <div className="icon">
                <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.7381 4H10.7143L2.97619 11.7381H0V9.35714H2.38095L7.7381 4Z" fill="white"/><path d="M10.9767 7.73828H8.00056L15.7387 0.000185966H18.7148V2.38114H16.3339L10.9767 7.73828Z" fill="white"/><path d="M15.7381 4H18.7143L10.9762 11.7381H8V9.35714H10.381L15.7381 4Z" fill="white"/><path d="M17.9767 8.73828H15.0006L22.7387 1.00019H25.7148V3.38114H23.3339L17.9767 8.73828Z" fill="white"/></svg>
              </div>
              <h6>About</h6>
            </div>
            <h1 className="v2">Jacob</h1>
          </div>
          <div className="profile">
            <svg viewBox="0 0 310 81" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_0_1" maskUnits="userSpaceOnUse" x="0" y="0"><path d="M308.972 1H1V80.2905H271.5L308.972 1Z" fill="#D9D9D9" stroke="#83AB95" stroke-width="0.821663"/></mask><g mask="url(#mask0_0_1)"><path fill-rule="evenodd" clip-rule="evenodd" d="M258.149 83.2903H1.25391H-1.74609V80.2903V0.999856V-2.00014H1.25391H293.878L295.645 -5.69141L303.358 -2.00014H309.158H314.066L311.957 2.11547L323.608 7.69112L281.971 94.6911L258.149 83.2903ZM291.007 3.99986H4.25391V77.2903H255.931L291.007 3.99986Z" fill="#60F49C"/></g></svg>
            <div className="inner">
              <div className="img-container">
                <Image src="/images/assets/character.png" width={300} height={500} alt="Jacob's Virtual Character" />
              </div>
              <h5 className="trigger2">Website <br/>Developer</h5>
            </div>
          </div>
          <div className="skills">
            <div className="title">
              <h5>Technical Skills</h5>
            </div>
            <ul>
              <li>
                <SvgDiamond />
                <p>Coding</p>
              </li>
              <li>
                <SvgDiamond />
                <p>Design</p>
              </li>
              <li>
                <SvgDiamond />
                <p>Media</p>
              </li>
            </ul>
          </div>
          <div className="switcher">
            <button className={isButtonToggled? 'toggled' : ''} onClick={() => {
              setIsButtonToggled(!isButtonToggled);
            }}>
              <span>Overview</span>
              <span>Traits</span>
            </button>
          </div>
          <div className="mobileToggleItems right">
            <div className={`top-text ${isButtonToggled? '' : 'show'}`}>
              <div className="background">
                <svg preserveAspectRatio="none" width="306" height="233" viewBox="0 0 306 233" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M1.22656 191.579V221.569L246.5 221.569L270.152 191.579H284.531L305.072 158V8.64844L297.5 1.00003H166.213L156.764 12.5033H11.4993L11.4973 180.075L1.22656 191.579Z" fill="url(#paint0_linear_0_1)" stroke="#60F49C" stroke-width="0.821663"/><path d="M1 232.148V221.648H167L155.5 232.148H1Z" fill="#60F49C"/><path d="M165.5 10.6484L171 4.64844H295L301 10.6484V84.1484L295 89.1484V135.648L290.5 139.648V10.6484H165.5Z" fill="#60F49C" stroke="#60F49C"/><defs><linearGradient id="paint0_linear_0_1" x1="153.614" y1="469.145" x2="380.33" y2="98.6462" gradientUnits="userSpaceOnUse"><stop stop-color="#40C997"/><stop offset="1" stop-color="#116661"/></linearGradient></defs></svg>
              </div>
              <p >Jacob Miranda is a versatile computer engineer, blending roles in website development with finesse. Armed with the latest frameworks and technologies, he navigates both front and back-end development with finesse, crafting attractive and modern websites.</p>
            </div>
            <div className={`traits ${isButtonToggled? 'show' : ''}`}>
              <div className="background">
                <svg preserveAspectRatio="none" width="309" height="142" viewBox="0 0 309 142" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M12 125V1H308V141H30.5L12 125Z" fill="url(#paint0_linear_0_1)" stroke="#60F49C"/><path d="M12 125V1H308V141H30.5L12 125Z" stroke="#60F49C"/><path d="M1 1.5V120L24.5 140.5" stroke="#60F49C"/><path d="M9 114.5L1 108V120L9 127V114.5Z" fill="#60F49C" stroke="#60F49C"/><path d="M8 106L3 102V107L8 111V106Z" fill="#60F49C" stroke="#60F49C"/><path d="M8 98L3 94V99L8 103V98Z" fill="#60F49C" stroke="#60F49C"/><path d="M8 90L3 86V91L8 95V90Z" fill="#60F49C" stroke="#60F49C"/><defs><linearGradient id="paint0_linear_0_1" x1="160.453" y1="-156.142" x2="271.644" y2="122.747" gradientUnits="userSpaceOnUse"><stop stop-color="#40C997"/><stop offset="1" stop-color="#116661"/></linearGradient></defs></svg>
              </div>
              <div className="content">
                <div className="title">
                  <h5>Traits</h5>
                  <div>
                    <p className="label">Primary = </p>
                    <div className="color white"></div>
                  </div>
                  <div>
                    <p className="label">Complimentary = </p>
                    <div className="color green"></div>
                  </div>
                </div>
                <div className="traitItems">
                  <p className="label white fill">ambitious</p>
                  <p className="label white">creative</p>
                  <p className="label white">organized</p>
                  <p className="label white">adaptable</p>
                  <p className="label white">patient</p>
                  <p className="label white fill">detailed</p>
                  <p className="label white fill">analytical</p>
                  <p className="label white">collaborative</p>
                  <p className="label white fill">articulate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="title">
              <h5>Proficiencies</h5>
            </div>
            <div className="icons">
              <div>
                <FaReact />
              </div>
              <div>
                <TbBrandNextjs />
              </div>
              <div>
                <SiMysql />
              </div>
              <div>
                <SiTailwindcss />
              </div>
              <div>
                <TbBrandTypescript />
              </div>
              <div>
                <IoLogoFigma />
              </div>
              <div>
                <DiPhotoshop />
              </div>

            </div>
          </div>
        </div>
        <div className="right">
          <div className="top-text">
            <div className="background">
              <svg width="306" height="233" viewBox="0 0 306 233" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M1.22656 191.579V221.569L246.5 221.569L270.152 191.579H284.531L305.072 158V8.64844L297.5 1.00003H166.213L156.764 12.5033H11.4993L11.4973 180.075L1.22656 191.579Z" fill="url(#paint0_linear_0_1)" stroke="#60F49C" stroke-width="0.821663"/><path d="M1 232.148V221.648H167L155.5 232.148H1Z" fill="#60F49C"/><path d="M165.5 10.6484L171 4.64844H295L301 10.6484V84.1484L295 89.1484V135.648L290.5 139.648V10.6484H165.5Z" fill="#60F49C" stroke="#60F49C"/><defs><linearGradient id="paint0_linear_0_1" x1="153.614" y1="469.145" x2="380.33" y2="98.6462" gradientUnits="userSpaceOnUse"><stop stop-color="#40C997"/><stop offset="1" stop-color="#116661"/></linearGradient></defs></svg>
            </div>
            <p >Jacob Miranda is a versatile computer engineer, blending roles in website development with finesse. Armed with the latest frameworks and technologies, he navigates both front and back-end development with finesse, crafting attractive and modern websites.</p>
          </div>
          <div className="traits">
            <div className="background">
              <svg width="309" height="142" viewBox="0 0 309 142" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M12 125V1H308V141H30.5L12 125Z" fill="url(#paint0_linear_0_1)" stroke="#60F49C"/><path d="M12 125V1H308V141H30.5L12 125Z" stroke="#60F49C"/><path d="M1 1.5V120L24.5 140.5" stroke="#60F49C"/><path d="M9 114.5L1 108V120L9 127V114.5Z" fill="#60F49C" stroke="#60F49C"/><path d="M8 106L3 102V107L8 111V106Z" fill="#60F49C" stroke="#60F49C"/><path d="M8 98L3 94V99L8 103V98Z" fill="#60F49C" stroke="#60F49C"/><path d="M8 90L3 86V91L8 95V90Z" fill="#60F49C" stroke="#60F49C"/><defs><linearGradient id="paint0_linear_0_1" x1="160.453" y1="-156.142" x2="271.644" y2="122.747" gradientUnits="userSpaceOnUse"><stop stop-color="#40C997"/><stop offset="1" stop-color="#116661"/></linearGradient></defs></svg>
            </div>
            <div className="content">
              <div className="title">
                <h5>Traits</h5>
                <p className="label">Primary = </p>
                <div className="color white"></div>
                <p className="label">Complimentary = </p>
                <div className="color green"></div>
              </div>
              <div className="traitItems">
                <p className="label white fill">ambitious</p>
                <p className="label white">creative</p>
                <p className="label white">organized</p>
                <p className="label white">adaptable</p>
                <p className="label white">patient</p>
                <p className="label white fill">detailed</p>
                <p className="label white fill">analytical</p>
                <p className="label white">collaborative</p>
                <p className="label white fill">articulate</p>
              </div>
            </div>
          </div>
          <div className="switcher">
            <button className={isButtonToggled? 'toggled' : ''} onClick={() => {
              setIsButtonToggled(!isButtonToggled);
            }}>
              <span>Overview</span>
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
      <div className="action trigger3">
        <div className="col-2">
          <div className="grid r1">
            <h6>Let's get started</h6>
            <h4>Contact me now so we can start working together!</h4>
            <div className="col-2">
              <button className="fuchsia">Contact Me</button>
              <button>Resume</button>
            </div>
          </div>
          <p>Jacob channels his passion into designing everything from websites to video games, solving complex problems with creativity.</p>
        </div>
        <div className="flare flare2"></div>
      </div>
    </div>
  </section>
  )
}

export default SctAbout