'use client'
import { useEffect } from "react";
import ObserveElement from "../../$functions/ObserveElement";
import CardGreenInfo from "../../elements/cards/CardGreenInfo";
import SvgCyberCircles from "../../svg/SvgCyberCircles";
import SvgCyberCirclesVertical from "../../svg/SvgCyberCirclesVertical";
import SvgCyberWall from "../../svg/SvgCyberWall";
import SvgGreenBarsBorder from "../../svg/SvgGreenBarsBorder";

type props = {
  className?: string;
}

const SctHire : React.FC<props> = ({className = ''}) => {
  useEffect(() => {
    const sctElement = document.querySelector('#home-sct-1');
    const observer1 = ObserveElement("#home-sct-1 .trigger1", (e) => {
      if (sctElement) {
        sctElement.classList.add("animate1");
      }
    }, () => {
      if (sctElement) {
        //sctElement.classList.add("animate");
      }
    });
    const observer2 = ObserveElement("#home-sct-1 .trigger2", (e) => {
      if (sctElement) {
        sctElement.classList.add("animate2");
      }
    }, () => {
      if (sctElement) {
        //sctElement.classList.add("animate");
      }
    });

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);
  return (
    <section id="home-sct-1" className={`SctHire theme-light ${className}`}>
      <div className="sct-content">
        <div className="r1">
          <div className="p1">
            <div className="sct-header">
              <h1 className="v2">Set Me<br/>Apart</h1>
              <h1 className="v3">Set Me<br/><span>Apart</span></h1>
              <SvgCyberCircles/>
            </div>
            <SvgGreenBarsBorder/>
          </div>
          <div className="p2">
            <p>With over 5 years of developer experience, I offer a competitive mindset. I dedicate substantial time to researching the latest technologies, constantly enhancing my skills. My devotion for programming goes beyond work, it’s a source of joy. This enthusiasm fuels projects in my free time, and I am eager to apply this passion on new ventures.</p>
            <SvgGreenBarsBorder />
            <SvgCyberCirclesVertical/>
            <SvgCyberWall />
          </div>
        </div>
        <div className="r2 trigger1">
          <CardGreenInfo type={1} title="Working in a team" text="Collaborating on large projects has sharpened my GitHub source control skills and documentation practices, making me a valuable addition to any development team."/>
          <CardGreenInfo type={2} title="Problem Solver" text="I’ve been exposed to many modern technologies, so when problems arise, I’m quickly able to find what’s wrong and fix it, even in large and complicated systems."/>
          <CardGreenInfo type={3} title="Developer Skill Set" text="From databases to mobile apps, websites, and marketing strategies, I’m well versed. With expertise in programming logic, I can streamline processes to enhance the efficiency and success of your projects."/>
          <div className="trigger trigger2"></div>
        </div>
      </div>
    </section>
  )
}

export default SctHire