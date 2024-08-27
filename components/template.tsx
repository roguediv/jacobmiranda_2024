type props = {
  className?: string;
}

const ComponentTemplate : React.FC<props> = ({className = ''}) => {
  return (
    <div className={`ComponentTemplate ${className}`}>
    </div>
  )
}

export default ComponentTemplate