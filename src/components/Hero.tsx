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
                   
                   
                        <Image  src='/images/_home_4.svg' style={{background:"#fff"}} width={32} height={32} alt="Phuc personal headshot" />
                  
                        <Image  src='/images/_home_2.svg' style={{background:"#fff"}} width={32} height={32} alt="Phuc personal headshot" />
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