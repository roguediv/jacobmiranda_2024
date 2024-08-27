'use client'

import React, { useEffect } from "react";
import CardProject from "./cards/CardProject";
import {Project} from "@/scripts/data/Project"
import Link from "next/link";
import Image from "next/image";
import ObserveElement from "../$functions/ObserveElement";

type props = {
  className?: string;
  projects?: Project[];
}

const ProjectCards : React.FC<props> = ({className = '', projects = []}) => {
  useEffect(() => {
    const sctElement = document.querySelector('.ProjectCards');
    const observer1 = ObserveElement(".ProjectCards .trigger1", (e) => {
      if (sctElement) {
        sctElement.classList.add("animate1");
      }
    }, () => {});
    const observer2 = ObserveElement(".ProjectCards .trigger2", (e) => {
      if (sctElement) {
        sctElement.classList.add("animate2");
      }
    }, () => {});
    const observer3 = ObserveElement(".ProjectCards .trigger3", (e) => {
      if (sctElement) {
        sctElement.classList.add("animate3");
      }
    }, () => {});
    const observer4 = ObserveElement(".ProjectCards .trigger4", (e) => {
      if (sctElement) {
        sctElement.classList.add("animate4");
      }
    }, () => {});

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
      
    };
  }, []);
  if (className == 'default') {
    return (
      <div className="ProjectCards projects">
        {projects.map((item, i) => {
          return(
            <Link href={`/projects/${item.body.title}`} className={`trigger${i + 1}`} key={i}>
              <div className={`background`}>
                <Image className="imgBackground" src={`/images/projects/${item.body.title}/preview.png`} width={1000} height={1000} alt="Background Image" />
              </div>
              <div className="content">
                <h6 className="v2">{item.body.displayTitle}</h6>
                <h4 className="v2">{item.body.header}</h4>
                <p className="v2">{item.body.desc}</p>
              </div>
            </Link>)
        })}
      </div>
    )
  }
  return (
    <div className={`ProjectCards ${className}`}>
      <div className="project-holder">
        <h3>Projects</h3>
        {projects.map((project, i) => {
          if (i % 2 == 0 && project.body.title != undefined) {
            if (i == 0) {
              return(
                <CardProject className={`trigger2`} key={i} title={project?.body.title} displayTitle={project?.body.displayTitle} desc={project?.body.desc} src1={`/images/projects/${project.body.title}/background.png`} src2={`/images/projects/${project.body.title}/bodyLogo.png`}/>
              )
            }
            return(
              <CardProject className={`trigger${i * 2}`} key={i} title={project?.body.title} displayTitle={project?.body.displayTitle} desc={project?.body.desc} src1={`/images/projects/${project.body.title}/background.png`} src2={`/images/projects/${project.body.title}/bodyLogo.png`}/>
            )
          }
          return (<></>)
        })}
      </div>
      <div className="project-holder">
        {projects.map((project, i) => {
          if (i % 2 == 1 && project.body.title != undefined) {
            if (i == 0) {
              return(
                <CardProject className={`trigger${i}`} key={i} title={project?.body.title} displayTitle={project?.body.displayTitle} desc={project?.body.desc} src1={`/images/projects/${project.body.title}/background.png`} src2={`/images/projects/${project.body.title}/bodyLogo.png`}/>
              )
            }
            return(
              <CardProject className={`trigger${i}`} key={i} title={project?.body.title} displayTitle={project?.body.displayTitle} desc={project?.body.desc} src1={`/images/projects/${project.body.title}/background.png`} src2={`/images/projects/${project.body.title}/bodyLogo.png`}/>
            )
          }
          return (<></>)
        })}
      </div>
      <Link href={'/projects'} >
        <button className="more">
          <div className="svg-holder">
            <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 1H2.5L24.5 23L2.5 45.5H16.5L38 23L16.5 1Z" fill="#CF12BC" stroke="#CF12BC" stroke-width="2"/></svg>
            <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 1H2.5L24.5 23L2.5 45.5H16.5L38 23L16.5 1Z" fill="#CF12BC" stroke="#CF12BC" stroke-width="2"/></svg>
            <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 1H2.5L24.5 23L2.5 45.5H16.5L38 23L16.5 1Z" fill="#CF12BC" stroke="#CF12BC" stroke-width="2"/></svg>
            <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 1H2.5L24.5 23L2.5 45.5H16.5L38 23L16.5 1Z" fill="#CF12BC" stroke="#CF12BC" stroke-width="2"/></svg>
            <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 1H2.5L24.5 23L2.5 45.5H16.5L38 23L16.5 1Z" fill="#CF12BC" stroke="#CF12BC" stroke-width="2"/></svg>
          </div>
          <span>View All</span>
        </button>
      </Link>

    </div>
  )
}

export default ProjectCards