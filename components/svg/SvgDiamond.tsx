'use client'
type Props = {
  className?: string;
};

const SvgDiamond: React.FC<Props> = ({ className = ''}) => {

  return (
    <div className={`SvgDiamond ${className}`}>
      <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.88212 0L0.941406 0.940715L2.19569 1.56786H10.035L11.2893 0.940715L10.3486 0H1.88212Z" fill="white"/>
<path d="M11.7054 2.85277L11.3611 1.56773L10.3476 2.06884L6.27118 9.12943L6.18716 10.5292L7.4722 10.1849L11.7054 2.85277Z" fill="white"/>
<path d="M0.470358 2.85277L0.814683 1.56773L1.82816 2.06884L5.9046 9.12943L5.98862 10.5292L4.70358 10.1849L0.470358 2.85277Z" fill="white"/>
<path d="M8.11706 2.70605H4.05859L6.08783 6.76452L8.11706 2.70605Z" fill="white"/>
</svg>

    </div>
  );
};

export default SvgDiamond;