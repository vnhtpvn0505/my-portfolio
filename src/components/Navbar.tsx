// components/Navbar.tsx    
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
         PIS
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/1iwC58ylcUrRtB7tr6TaesRRUiOSk6vG6/view?usp=sharing"  target="_blank" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;