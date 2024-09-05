import Link from "next/link";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type props = {
  className?: string;
}

const NavLinks: React.FC<props> = ({className = ''}) => {
  return (
    <div className="Socials">
      <Link href="https://www.linkedin.com/in/jacob-miranda-1a83aa147/" target="_blank"><FaLinkedin /></Link>
      <a className="contact-link" href="tel:+16468309178"><FaPhoneAlt /></a>
      <a  className="contact-link" href="mailto:contact@jacobmiranda.com?subject=Technical%20Services&body=Hello%20Jacob!"><MdEmail /></a>
    </div>
  )
}

export default NavLinks
