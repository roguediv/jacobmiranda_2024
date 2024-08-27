'use client'
type Props = {
  className?: string;
};

const SvgAboutBox: React.FC<Props> = ({ className = ''}) => {

  return (
    <div className={`SvgAboutBox ${className}`}>
      <svg preserveAspectRatio="none" className="box1" width="1028" height="530" viewBox="0 0 1028 530" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M2.64118 156.074L2 156.668V157.542V525.5V527.5H4H1023.09H1025.09V525.5V460.601V459.678L1024.39 459.079L1014 450.229V195.029L1024.83 175.989L1025.09 175.529V175V16.654V15.8866L1024.58 15.3161L1013.49 2.99117L1012.89 2.3291H1012H26.1849H24.1849V4.3291V136.126L2.64118 156.074Z" fill="url(#paint0_linear_358_14087)" stroke="#60F49C" stroke-width="4"/><path d="M2.64118 156.074L2 156.668V157.542V525.5V527.5H4H1023.09H1025.09V525.5V460.601V459.678L1024.39 459.079L1014 450.229V195.029L1024.83 175.989L1025.09 175.529V175V16.654V15.8866L1024.58 15.3161L1013.49 2.99117L1012.89 2.3291H1012H26.1849H24.1849V4.3291V136.126L2.64118 156.074Z" stroke="#60F49C" stroke-width="4"/><defs><linearGradient id="paint0_linear_358_14087" x1="94.0515" y1="4.32909" x2="617.774" y2="52.8893" gradientUnits="userSpaceOnUse"><stop stop-color="#60F49C"/><stop offset="0.87" stop-color="#30BCCE"/></linearGradient></defs></svg>
    </div>
  );
};

export default SvgAboutBox;