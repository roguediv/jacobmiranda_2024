import Image from "next/image"
import React from "react";
type props = {
  className?: string;
  title?: string;
  header1: string | undefined;
  desc1: string | undefined;
  header2: string | undefined;
  desc2: string | undefined; 
}

const ProjectSct3 : React.FC<props> = ({className = '', title="", header1, desc1, header2, desc2}) => {
  return (
  <section id="project-sct-3">
    <div className="sct-content">
      <div>
        <h4>{header1}</h4>
        <p>{desc1?.split("<br>").map((part, i) => {
                if (i === 0) {
                  return <React.Fragment key={i}>{part}</React.Fragment>;
                } else {
                  return (
                    <React.Fragment key={i}>
                      <br />
                      <>{part}</>
                    </React.Fragment>
                  );
                }})}</p>
      </div>
      <Image 
        src={`/images/projects/${title}/sct-3.png`}
        width={1500}
        height={1500}
        alt="left image"/>
        <div>
          <h4>{header2}</h4>
          <p>{desc2}</p>
        </div>
    </div>
  </section>
  )
}

export default ProjectSct3