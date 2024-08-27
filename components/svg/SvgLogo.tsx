'use client'
type Props = {
  className?: string;
};

const SvgLogo: React.FC<Props> = ({ className = ''}) => {

  return (
    <div className={`SvgLogo ${className}`}>
      <svg width="67" height="70" viewBox="0 0 67 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_303_1123)">
<path d="M15.6897 17.6437L15.6897 30.2279L9.16238 30.2279L6.55145 27.4922L6.55145 21.656L4.5 20.197L4.5 6.88329L9.16238 2.87094L14.7572 2.87094L26.0402 12.4915L32.3115 17.4316L35.877 17.8954L43.959 24.8536L44.4344 27.8688L59.8891 41.353L40.1718 61.5L31.3607 61.5L10.4426 43.8726L9.96721 38.77L14.7572 34.0578L19.5618 38.3091L19.7131 41.5532L32.3115 52.2224L38.1342 52.2224L46.0984 43.8726L36.4889 35.8231L36.3525 32.9715L28.9484 26.1957L25.6557 26.0133L15.6897 17.6437Z" fill="url(#paint0_linear_303_1123)"/>
<path d="M47.5 19.5L39.9341 13.4489L54.4807 0.500002L58.4904 0.500002L60.8361 2.87094L60.8361 9.19772L62.5 11.4011L62.5 32.5988L53.5 24.5L53.5 14L47.5 19.5Z" fill="url(#paint1_linear_303_1123)"/>
<path d="M9.37635 29.7279L15.1897 29.7279L15.1897 17.6437L15.1897 16.5708L16.0113 17.2608L25.8497 25.5233L28.9761 25.6964L29.1543 25.7063L29.286 25.8268L36.69 32.6026L36.842 32.7418L36.8519 32.9476L36.9779 35.5805L46.4194 43.4893L46.8283 43.8318L46.4602 44.2177L38.496 52.5675L38.3483 52.7224L38.1342 52.7224L32.3115 52.7224L32.1282 52.7224L31.9883 52.604L19.39 41.9348L19.2238 41.7941L19.2137 41.5765L19.0722 38.5435L14.7753 34.7414L10.4871 38.9599L10.9215 43.6223L31.5432 61L39.9615 61L59.1614 41.3817L44.1057 28.2456L43.9688 28.1261L43.9405 27.9467L43.4937 25.1128L35.6642 18.372L32.247 17.9274L32.1103 17.9096L32.0021 17.8243L25.7308 12.8842L25.7232 12.8782L25.7158 12.8719L14.573 3.37094L9.3479 3.37094L5 7.11265L5 19.939L6.84124 21.2486L7.05145 21.3981L7.05145 21.656L7.05145 27.2919L9.37635 29.7279ZM54 24.2773L62 31.4762L62 11.5687L60.4371 9.49903L60.3361 9.3653L60.3361 9.19772L60.3361 3.07648L58.2817 1L54.671 1L40.709 13.4285L47.4778 18.842L53.1621 13.6314L54 12.8634L54 14L54 24.2773Z" stroke="white"/>
</g>
<defs>
<filter id="filter0_d_303_1123" x="0.5" y="0.5" width="66" height="69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_1123"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_1123" result="shape"/>
</filter>
<linearGradient id="paint0_linear_303_1123" x1="-33.5" y1="-7" x2="65.3211" y2="39.0154" gradientUnits="userSpaceOnUse">
<stop stop-color="#FC02E3"/>
<stop offset="0.512995" stop-color="#008FE7"/>
<stop offset="1" stop-color="#60F49C"/>
</linearGradient>
<linearGradient id="paint1_linear_303_1123" x1="-33.5" y1="-7" x2="65.3211" y2="39.0154" gradientUnits="userSpaceOnUse">
<stop stop-color="#FC02E3"/>
<stop offset="0.512995" stop-color="#008FE7"/>
<stop offset="1" stop-color="#60F49C"/>
</linearGradient>
</defs>
</svg>

    </div>
  );
};

export default SvgLogo;