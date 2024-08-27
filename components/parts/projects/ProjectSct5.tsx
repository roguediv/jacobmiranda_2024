type props = {
  className?: string;
  header: string | undefined;
  items: {header?: string | undefined; headerLow?: string | undefined; desc?: string | undefined; }[] | undefined;
}

const ProjectSct5 : React.FC<props> = ({className = '', header, items}) => {
  return (
  <section id="project-sct-5">
    <div className="sct-content">
      <h2>{header}</h2>

      <div>
        {items?.map((item, i) => {
          return (
            <div key={i}>
              <div>
                <h1 className="v2">{item.header}</h1>
                <h6>{item.headerLow}</h6>
              </div>
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default ProjectSct5