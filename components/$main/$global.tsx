type props = {
  className?: string;
}
export const GlobalEmailAnchor: React.FC<props> = ({}) => {return <a className="contact-link" href="mailto:contact@jacobmiranda.com?subject=Technical%20Services&body=Hello%20Jacob!">contact@jacobmiranda.com</a>}
export const GlobalPhoneAnchor: React.FC<props> = ({}) => {return <a className="contact-link" href="tel:+16468309178">(646) 830-9178</a>}