import Image from "next/image"
import NavLinks from "./NavLinks";
import Link from "next/link";
import { GlobalEmailAnchor, GlobalPhoneAnchor } from "./$global";
import SvgLogo from "../svg/SvgLogo";
import Socials from './Socials'

type props = {
  className?: string;
}

const Footer: React.FC<props> = ({className = ''}) => {
  return (
    <footer className={`theme-dark ${className}`}>
      <div className="wrapper">
        <div className="top">
          <div className="p1">
            <div className="logo">
              <SvgLogo />
            </div>
            <h4>Jacob Miranda</h4>
            <p className="v2">Full stack developer specializing in creating websites, apps, databases, and server management</p>
          </div>
          <div className="p2">
            <h4>Pages</h4>
            <NavLinks />
          </div>
          <div className="p3">
            <h4>Contact</h4>
            <ul>
              <li><GlobalPhoneAnchor/></li>
              <li><GlobalEmailAnchor/></li>
            </ul>
          </div>
          <div className="p4">
            <h4>Terms of Service</h4>
            <ul>
              <li><Link href='#'>Cookies and Privacy</Link></li>
              <li><Link href='#'>User Agreement</Link></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
        <h6>&copy; {new Date().getFullYear()} JacobMiranda</h6>
        <Socials />
      </div>
      </div>

    </footer>
  )
}

export default Footer
