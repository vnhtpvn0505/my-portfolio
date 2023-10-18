import Image from "next/image";
import { BsLinkedin, BsBehance, BsGoogle } from "react-icons/bs"; 


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
                   
                    <a
                        href="https://www.behance.net/huynhphuv"
                        aria-label="Behance"
                        target="_blank"
                        rel="Behance"
                    >
                         <BsBehance size={32} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/phuc05/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="LinkedIn"
                    >
                         <BsLinkedin />
                    </a>
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