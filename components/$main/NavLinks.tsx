import Link from "next/link";

type props = {
  className?: string;
}

const NavLinks: React.FC<props> = ({className = ''}) => {
  return (
    <ul className="NavLinks">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/projects">Projects</Link></li>
    </ul>
  )
}

export default NavLinks
