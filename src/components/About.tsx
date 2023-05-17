import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2  className="text-rose-700">About Me</h2>
            {/* <div className="grid-rows-1">
            <div className="grid my-3.5 grid-cols-2 about-box">
                <div>
                <div className="box-border  p-4 border-2 about-box-top" data-aos="fade-up" data-aos-delay="100">
                    <p>UI/UX Design</p>
                </div>
                <div className="box-border h-32 w-32 p-4 border-2 about-box-middle" data-aos="fade-up" data-aos-delay="200">
                    <Image  src='/images/avatar.png' className="profile-img" width={200} height={200} alt="Phuc personal headshot" />
				</div>
                <div className="box-border  p-4 border-2 about-box-bottom" data-aos="fade-up" data-aos-delay="100">
                    <p>UI/UX Design</p>
                </div>
                </div>
                <div className="grid my-3.5 grid-cols-2 about-box">
                    <h1>Texxt</h1>
               </div>
            </div>
            
            </div> */}

            <div className="grid grid-rows-1 grid-flow-col gap-4">
                <div className=" my-3.5  grid-cols-2 about-box">
                
                <div className="box-border  p-4 border-2 about-box-top" data-aos="fade-up" data-aos-delay="100">
                    <p>UI/UX Design</p>
                </div>
                <div className="box-border h-32 w-32 p-4 border-2 about-box-middle" data-aos="fade-up" data-aos-delay="200">
                    <Image  src='/images/avatar.png' className="profile-img" width={200} height={200} alt="Phuc personal headshot" />
				</div>
                <div className="box-border  p-4 border-2 about-box-bottom" data-aos="fade-up" data-aos-delay="100">
                    <p>UI/UX Design</p>
                </div>
                    
                </div>
                <div className=" my-3.5  grid-cols-2 about-box">
                
                    <p>Texxt</p>
                    <p>Texxt</p>
                    
                </div>
            
            </div>

            {/* <div className="grid my-3.5 grid-cols-2 ">
                <h3 className="text-slate-400 font-bold">Bio</h3>
                <p className="text-gray-500">I'm phuc huynh, a UI/UX designer who helps businesses create user-friendly products and services by understanding their customers' needs.</p>
            </div>
            <div className="grid my-3.5 grid-cols-2 ">
                <h3 className="text-slate-400 font-bold">Birthday</h3>
                <p>05/05/1994</p>
            </div>
            <div className="grid my-3.5 grid-cols-2 ">
                <h3 className="text-slate-400 font-bold">Residence</h3>
                <p>Viet Nam</p>
            </div>
            <div className="grid my-3.5 grid-cols-2 ">
                <h3 className="text-slate-400 font-bold">Address</h3>
                <p>HCM, Vietnam</p>
            </div>
            <div className="grid my-3.5 grid-cols-2 ">
                <h3 className="text-slate-400 font-bold">Freelance</h3>
                <p className="text-emerald-500">Available</p>
            </div>
           
            <a href="https://drive.google.com/file/d/1hG-iMdGK9k6L3kQDccYggXic5c2FEEVb/view?usp=sharing"  target="_blank" className="rounded-full px-4 py-1 text-center bg-yellow-500  bg-[length:200px_100px] bg-no-repeat ">Resume</a>
             */}
        </div>

    )
}

export default About;