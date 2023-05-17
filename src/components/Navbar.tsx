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
      <a href="https://drive.google.com/file/d/1hG-iMdGK9k6L3kQDccYggXic5c2FEEVb/view?usp=sharing"  target="_blank" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;