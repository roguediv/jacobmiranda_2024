import Link from "next/link";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type props = {
  className?: string;
}

const NavLinks: React.FC<props> = ({className = ''}) => {
  return (
    <div className="Socials">
      <Link href="#"><FaLinkedin /></Link>
      <Link href="#"><FaPhoneAlt /></Link>
      <Link href="#"><MdEmail /></Link>
    </div>
  )
}

export default NavLinks
