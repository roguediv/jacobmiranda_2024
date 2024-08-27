import Image from "next/image"
import Link from "next/link";

type props = {
  className?: string;
  src1?: string;
  src2?: string;
  title?: string;
  displayTitle?: string;
  desc?: string;
}

const CardProject : React.FC<props> = ({className = '', src1 = '', src2 = '', title = '', displayTitle='', desc = ''}) => {
  return (
    <Link href={`/projects/${title}`} className={`${className}`}>
    <div className={`CardProject`}>
      <div className="background">
        <Image className="imgBackground" src={src1} width={600} height={600} alt="Background Image" />
      </div>
      <div className="content">
        <svg preserveAspectRatio="none" viewBox="0 0 452 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M203.5 71.6102H203.298L203.152 71.469L155.798 25.5H0.5V202.5H451V89.2513L427.268 71.6102H203.5Z" fill="white" stroke="white"/><mask id="mask0_507_2916" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="25" width="452" height="178"><path d="M203.5 71.6102H203.298L203.152 71.469L155.798 25.5H0.5V202.5H451V89.2513L427.268 71.6102H203.5Z" fill="white" stroke="white"/></mask><g className="backstroke" mask="url(#mask0_507_2916)"><path d="M0 25V203H451.5V88" stroke="#3CC07E" stroke-width="4"/></g><g filter="url(#filter0_d_507_2916)"><path d="M-1 19H159L207.5 64.5H430L455.5 83.5" stroke="white" stroke-width="3"/></g><defs><filter id="filter0_d_507_2916" x="-18.4" y="0.1" width="492.198" height="102.003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8.7"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_507_2916"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_507_2916" result="shape"/></filter></defs></svg>
        <Image className="imgLogo" src={src2} width={300} height={300} alt="Logo" />
        <h4>{displayTitle}</h4>
        <p className="v2">{desc}</p>
      </div>
    </div>
    </Link>
  )
}

export default CardProject