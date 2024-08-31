type props = {
  className?: string;
}

const ImageSkeleton : React.FC<props> = ({className = ''}) => {
  return (
    <div className={`ImageSkeleton ${className}`}>
      
    </div>
  )
}

export default ImageSkeleton