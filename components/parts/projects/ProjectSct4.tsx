import Image from "next/image"
type props = {
  className?: string;
  title?: string;
  header: string | undefined;
  desc: string | undefined;
}

const ProjectSct4 : React.FC<props> = ({className = '', title="", header, desc}) => {
  return (
  <section id="project-sct-4">
    <div className="flare"></div>
    <div className="sct-content">
      <div className="col-2">
        <div className="c1">
          <h2>{header}</h2>
          <p>{desc}</p>
        </div>
        <div className="c2">
          <Image 
            src={`/images/projects/${title}/sct-4.png`}
            width={1500}
            height={5000}
            alt="Preview of Project"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProjectSct4