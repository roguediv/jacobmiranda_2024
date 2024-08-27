import Header from "@/components/$main/Header";
import ProjectCards from "@/components/elements/ProjectCards";
import ProjectSct1 from "@/components/parts/projects/ProjectSct1";
import ProjectSct2 from "@/components/parts/projects/ProjectSct2";
import ProjectSct3 from "@/components/parts/projects/ProjectSct3";
import ProjectSct4 from "@/components/parts/projects/ProjectSct4";
import ProjectSct5 from "@/components/parts/projects/ProjectSct5";
import CtaCard from "@/components/parts/general/CtaCard";
import {ProjectData} from "@/scripts/data/ProjectData"
import { Project } from "@/scripts/data/Project";
import Image from "next/image"

export default function page({params}: {params: {title: string}}) {
  let proj : Project | undefined = ProjectData.find((array : Project) => array.body.title === params.title);
  if (proj == undefined) {
    return (
    <div className={`pge-project projectHome`}>
      <Header page="project" title={''} />
      <section className="sct-1">
        <div className="sct-content">
          <div className="projects">
            {ProjectData.map((item, i) => {
              return(
              <div key={i}>
                <div className="background">
                  <Image className="imgBackground" src={`/images/projects/${item.body.title}/preview.png`} width={1000} height={1000} alt="Background Image" />
                </div>
                <div className="content">
                  <h6 className="v2">{item.body.displayTitle}</h6>
                  <h4 className="v2">{item.body.header}</h4>
                  <p className="v2">{item.body.desc}</p>
                </div>
              </div>)
            })}
          </div>
          <CtaCard type={2}/>
        </div>
        <div className="cta-backdrop"></div>
        <div className="background">
          <div className="flare"></div>
          <div className="flare"></div>
          <div className="flare"></div>
        </div>
      </section>
    </div>);
  }
  return (
    <div className={`pge-project ${proj.body.theme} project-${proj.body.title}`}>
      <Header page="project" title={params.title} />
      <ProjectSct1 title={proj.sct1.title} overview={proj.sct1.overview} timeframe={proj.sct1.timeframe} technologies={proj.sct1.technologies} />
      <ProjectSct2 title={params.title} header={proj.sct2.header} desc={proj.sct2.desc} card1={proj.sct2.card1} card2={proj.sct2.card2} />
      <ProjectSct3 title={params.title} header1={proj.sct3.header1} desc1={proj.sct3.desc1} header2={proj.sct3.header2} desc2={proj.sct3.desc2} />
      <ProjectSct4 title={params.title} header={proj.sct4.header} desc={proj.sct4.desc} />
      <ProjectSct5 header={proj.sct5.header} items={proj.sct5.items} />
      <CtaCard />
      <section className="moreProjects">
        <div className="sct-content">
          <ProjectCards projects={ProjectData} />
        </div>
      </section>
      
    </div>
  );
}
