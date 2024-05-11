import Image from "next/image";
import { BsLinkedin, BsBehance, BsGoogle } from "react-icons/bs"; 
import {Home2Icon} from "jungicons"

const Hero = () => {
    return (
        <div className="hero-container">
            <Image  src='/images/avatar.png' className="profile-img" width={300} height={300} alt="Phuc personal headshot" />
            <div className="hero-text">
                <h2>Hey, I'm Phuc Huynh 👋</h2>
                <p>
                    I'm a UI/UX Design based in HCM, VietNam. <br/> 
                </p>
               
                
                <div className="social-icons">
                    <Home2Icon size="xs" color="green" />
                    <Home2Icon size="sm" color="red" />
                    <Home2Icon size="md" color="blue" />
                    <Home2Icon size="lg" color="yellow" />
                    <Home2Icon  size="xl"  color="#fff"/>
                    <a
                        href="mailto: vnhtpvn0505@gmail.com"
                        aria-label="Gmail"
                        target="_blank"
                        rel="Gmail "
                    >
                         <BsGoogle />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;