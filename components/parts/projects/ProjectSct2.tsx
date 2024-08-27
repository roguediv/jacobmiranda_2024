import Image from "next/image"
import React from "react";
type props = {
  className?: string;
  title?: string | undefined;
  header: string | undefined;
  desc: string | undefined;
  card1: {header: string; desc: string;} | undefined;
  card2: {header: string; desc: string;} | undefined;
}

const ProjectSct2 : React.FC<props> = ({className = '', title="", header, desc, card1, card2}) => {
  return (
  <section id="project-sct-2">
    <div className="flare"></div>
    <div className="sct-content">
      <div className="col-2">
        <div className="c1">
          <Image 
            src={`/images/projects/${title}/sct-2-left.png`}
            width={500}
            height={500}
            alt="left image"/>
          <Image 
            src={`/images/projects/${title}/sct-2-right.png`}
            width={500}
            height={500}
            alt="left image"/>
          <Image 
            src={`/images/projects/${title}/sct-2-mid.png`}
            width={500}
            height={500}
            alt="left image"/>
        </div>
        <div className="c2">
          <h2>{header}</h2>
          <p>{desc}</p>
          <div className="card-holder">
            <div>
              <h6>{card1?.header}</h6>
              <div className="line"></div>
              <h4>{card1?.desc.split("<br>").map((part, i) => {
                if (i === 0) {
                  return <React.Fragment key={i}>{part}</React.Fragment>;
                } else {
                  return (
                    <React.Fragment key={i}>
                      <br />
                      <>{part}</>
                    </React.Fragment>
                  );
                }
              })}</h4>
            </div>
            <div>
              <h6>{card2?.header}</h6>
              <div className="line"></div>
              <h4>{card2?.desc.split("<br>").map((part, i) => {
                if (i === 0) {
                  return <React.Fragment key={i}>{part}</React.Fragment>;
                } else {
                  return (
                    <React.Fragment key={i}>
                      <br />
                      <>{part}</>
                    </React.Fragment>
                  );
                }
              })}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProjectSct2