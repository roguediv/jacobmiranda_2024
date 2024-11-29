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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'All Projects - Jacob Miranda',
  description: 'A portfolio of Jacob\'s projects.',
}

export default function page() {
  let proj : Project | undefined = ProjectData.find((array : Project) => array.body.title === "");
  if (proj == undefined) {
    return (
    <div className={`pge-project projectHome`}>
      <Header page="project" title={""} />
      <section className="sct-1">
        <div className="sct-content">
          <ProjectCards className="default" projects={ProjectData} />
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
    <></>
  );
}
