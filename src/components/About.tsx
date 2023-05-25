import Image from "next/image";

const About = () => {
    return (
        <div className="container" id="about">
            <div className="w-full text-center section-title t_center ">
                <span >BIOGRAPHY</span>
                <h3 className="text-[40px] font-black text-green-500">Who am I?</h3>
            </div>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 mt-8">
                    <div>
                        <Image  src='/images/image3.png' className="profile-img float-right" width={400 } height={400}  alt="Phuc personal headshot" />
                    </div>
                    <div className="pl-8">
                        <h4 className="title text-[30px] mt-[25px]">About Me</h4>
                        <span>
                        I'm 29 years old. I started designing here about 1,5 years. <br />  Before that, I worked as a programmer. <br />
                        Passionate about design and currently pursuing a career in UI/UX design.
                        </span>
                        <div className="wrapper w-full h-auto clear-both flex">
                            <div className="w-1/2">
                                <ul className="item py-[25px] px-[8px]">
                                    <li className="mb-[11px]">
                                        <strong><span className="font-poppins text-[16px] text-medium text-white inline-block">Name</span></strong>
                                        <p className="text-[16px]">Phuc Huynh</p>
                                    </li>
                                    <li>
                                        <strong><span className="font-poppins text-[16px] text-medium text-white inline-block">Phone</span></strong>
                                        <p className="text-[16px]">+84 0967053394</p>
                                    </li>
                                    <li className="mb-[11px]">
                                        <strong><span className="font-poppins text-[16px] text-medium text-white inline-block">Email</span></strong>
                                        <p className="text-[16px]"><a className="text-main-color" href="#">vnhtpvn0505@gmail.com</a></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/2">
                                <ul className="item py-[25px] px-[8px]">
                                    <li className="mb-[11px]">
                                        <strong><span className="font-poppins text-[16px] text-medium text-white inline-block">Address</span></strong>
                                        <p className="text-[16px]">HCM,VN</p>
                                    </li>
                                    <li>
                                        <strong><span className="font-poppins text-[16px] text-medium text-white inline-block">Freelance</span></strong>
                                        <p className="text-[16px]">Available</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                                <a href="https://drive.google.com/file/d/1hG-iMdGK9k6L3kQDccYggXic5c2FEEVb/view?usp=sharing"  target="_blank" className="cta-btn">Download CV</a>
                        </div>
                    </div>
                   
                    
            </div>
        </div>

    )
}

export default About;