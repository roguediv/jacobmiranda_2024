'use client'

import ObserveElement from "@/components/$functions/ObserveElement";
import React, { useEffect, useState } from "react";
import { DiPhotoshop } from "react-icons/di";
import { FaDigitalOcean, FaHtml5, FaPhp, FaReact, FaSass, FaUbuntu, FaWordpress } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiMysql, SiNginx, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

type props = {
  className?: string;
  title: string | undefined;
  overview: string | undefined;
  timeframe: { num: string; type: string; desc: string; } | undefined;
  technologies: {react: number; mysql: number; next: number; php: number; ts: number; figma: number, photoshop: number, tailwind: number; html: number; sass: number; digitalOcean: number; ubuntu: number; nginx: number; } | undefined;
}

const ProjectSct1 : React.FC<props> = ({className = '', title, overview, timeframe, technologies}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    return () => {};
  }, []);
  let titleParts = title?.split("<h>");
  return (
  <section id="project-sct-1" className={`${isLoaded ? 'animate' : ''}`}>
    <div className="background"></div>
    <div className="sct-content">
      <div className="card">
        <h2>{titleParts?.map((part, index) => {
        if (index === 0) {
          return <React.Fragment key={index}>{part}</React.Fragment>;
        } else {
          const [highlight, rest] = part.split('</h>');
          return (
            <React.Fragment key={index}>
              <span>{highlight}</span>
              <>{rest}</>
            </React.Fragment>
          );
        }
      })}</h2>
        <div className="content">
          <div className="c1">
            <h6>Overview</h6>
            <p>{overview}</p>
          </div>
          <div className="c2">
            <div className="r1">
              <h6>Timeframe</h6>
              <div className="timeframe"><h1>{timeframe?.num}</h1><h2>{timeframe?.type}</h2></div>
              <p>{timeframe?.desc}</p>
              <div className="line"></div>
            </div>
            <div className="r2">
              <h6>Technologies</h6>
              <div className="logos">
                {technologies?.react == 1 ? <FaReact /> : ''}
                {technologies?.mysql == 1 ? <SiMysql /> : ''}
                {technologies?.next == 1 ? <TbBrandNextjs /> : ''}
                {technologies?.php == 1 ? <FaPhp /> : ''}
                {technologies?.wordpress == 1 ? <FaWordpress /> : ''}
                {technologies?.ts == 1 ? <TbBrandTypescript /> : ''}
                {technologies?.figma == 1 ? <IoLogoFigma /> : ''}
                {technologies?.photoshop == 1 ? <DiPhotoshop /> : ''}
                {technologies?.tailwind == 1 ? <SiTailwindcss /> : ''}

                {technologies?.html == 1 ? <FaHtml5 /> : ''}
                {technologies?.sass == 1 ? <FaSass /> : ''}
                {technologies?.digitalOcean == 1 ? <FaDigitalOcean /> : ''}
                {technologies?.ubuntu == 1 ? <FaUbuntu /> : ''}
                {technologies?.nginx == 1 ? <SiNginx /> : ''}
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProjectSct1