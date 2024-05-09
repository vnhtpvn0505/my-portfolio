import { ArrowRight3} from "iconsax-react";
import Image from "./smallComp/image/Img";

const About = () => {
    return (
        <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
            {/* // ? 0.1 About Me */}
            <div
                className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
                md:w-[700px] lg:w-[900px] "
            >
                    <div className="flex flex-row items-center ">
                        <div className="flex flex-row  items-center mr-4">
                        <ArrowRight3 size="32" color="#FF8A65" variant="Bulk"/>
                            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
                            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
                            About Me
                            </span>
                        </div>
                         <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
                    </div>    
            </div>

            <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hello! My name is Phuc, and  I am a passionate & doing with UI/UX designer about 3 years of experience in creating user-centered 
                and visually appealing digital experiences. I have approximately 3.5 to 4 years of experience in software engineer.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                My journey as a UI/UX designer has allowed me to work on a diverse array of projects, from designing user-friendly mobile apps to optimizing, interactives  for web platform. What excites me most about design is its power to solve problems and enhance the human experience. <br/>I&#39;m dedicated to staying updated with the latest design trends and emerging technologies to consistently deliver innovative and effective solutions.
              </span>
            </div>
            

            {/* <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div> */}
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Image  src='/images/image3.png' className="profile-img float-right" width={400 } height={400}  alt="Phuc personal headshot" />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
            <Image  src='/images/image3.png' className="profile-img float-right" width={400 } height={400}  alt="Phuc personal headshot" />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>

            
        </div>
        // <div className="container" id="about">
        //     <div className="w-full text-center section-title t_center ">
        //         <span >BIOGRAPHY</span>
        //         <h3 className="text-[40px] font-black text-green-500">Who am I?</h3>
        //     </div>
        //     <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 mt-8">
        //             <div>
        //                 <Image  src='/images/image3.png' className="profile-img float-right" width={400 } height={400}  alt="Phuc personal headshot" />
        //             </div>
        //             <div className="pl-8">
        //                 <h4 className="title text-[30px] mt-[25px]">About Me</h4>
        //                 <span className=" text-neutral-500">
        //                     I am a highly skilled professional with a passion for UI/UX design and software development. With a solid background in both areas, 
        //                     I had 3 years of experience in UI/UX design and 3,5 years in software development.
        //                 </span>
        //                 <div className="wrapper w-full h-auto clear-both flex">
        //                     <div className="w-1/2">
        //                         <ul className="item py-[25px] px-[8px]">
        //                             <li className="mb-[11px]">
        //                                 <strong><span className="font-poppins text-[16px] text-medium text-white inline-block">Name</span></strong>
        //                                 <p className="text-[16px]">Phuc Huynh</p>
        //                             </li>
        //                             <li>
        //                                 <strong><span className="font-poppins text-[16px] text-medium text-white inline-block">Phone</span></strong>
        //                                 <p className="text-[16px]">+84 0967053394</p>
        //                             </li>
        //                             <li className="mb-[11px]">
        //                                 <strong><span className="font-poppins text-[16px] text-medium text-white inline-block">Email</span></strong>
        //                                 <p className="text-[16px]"><a className="text-main-color" href="#">vnhtpvn0505@gmail.com</a></p>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                     <div className="w-1/2">
        //                         <ul className="item py-[25px] px-[8px]">
        //                             <li className="mb-[11px]">
        //                                 <strong><span className="font-poppins text-[16px] text-medium text-white inline-block">Address</span></strong>
        //                                 <p className="text-[16px]">HCM,VN</p>
        //                             </li>
        //                             <li>
        //                                 <strong><span className="font-poppins text-[16px] text-medium text-white inline-block">Freelance</span></strong>
        //                                 <p className="text-[16px]">Available</p>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div>
        //                         <a href="https://drive.google.com/file/d/1hG-iMdGK9k6L3kQDccYggXic5c2FEEVb/view?usp=sharing"  target="_blank" className="cta-btn">Download CV</a>
        //                 </div>
        //             </div>
                   
                    
        //     </div>
        // </div>

    )
}

export default About;