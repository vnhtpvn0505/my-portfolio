import Link from "next/link";
import { BsLinkedin, BsBehance, BsGoogle } from "react-icons/bs"; 

const Footer = () => {
    return (
        <>
           <div>
            <div className="footer-container">
                <div className="logo">
                    <Link href="/">
                    PIS
                    </Link>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer;