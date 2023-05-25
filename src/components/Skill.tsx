import Image from "next/image";
import { SearchNormal, Element2,Star,Profile2User ,LampCharge,Box} from 'iconsax-react';


const Skills = () => {
    return (
        <div className="container pt-24">
             <div className="w-full text-center section-title t_center ">
                <span >Skill</span>
                <h3 className="text-[40px] font-black text-green-500">What I Do?</h3>
            </div>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 mt-8">
                <div >
                    <div  className="bg-teal-100/[0.1] rounded-md">
                        <h4 className="title text-[24px] mt-[30px] text-center">Software Development</h4>
                    </div>
                    
                    <div className="gap-2 ">
                        <div className="grid grid-cols-3 ">
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <Image  src='/images/html5.svg' className="profile-img items-center" width={56 } height={56}  alt="Phuc personal headshot" />
                                <p className=" mt-4">HTML5</p>
                            </div>
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <Image  src='/images/css3.svg' className="profile-img " width={56 } height={56}  alt="Phuc personal headshot" />
                                <p className=" mt-4">CSS3</p>
                            </div>
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <Image  src='/images/javascript.svg' className="profile-img " width={56 } height={56}  alt="Phuc personal headshot" />
                                <p className="mt-4"> JS</p>
                            </div>
                        </div>
                    </div>
                    <div className=" gap-2 items-center">
                        <div className="grid grid-cols-3 items-center ">
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <Image  src='/images/rn.svg' className="profile-img " width={56 } height={56}  alt="Phuc personal headshot" />
                                <p className="mt-4">React Native</p>
                            </div>
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <Image  src='/images/flutter.svg' className="profile-img " width={56 } height={56}  alt="Phuc personal headshot" />
                                <p className="mt-4">Flutter</p>
                            </div>
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <Image  src='/images/android.svg' className="profile-img " width={56 } height={56}  alt="Phuc personal headshot" />

                                <p className="mt-4">Android</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div>
                <div>
                    <div  className="bg-teal-100/[0.1] mt-[30px]  rounded-md">
                        <h4 className="title text-[24px] text-center">Design</h4>
                    </div>
                    <div className="gap-2 ">
                        <div className="grid grid-cols-3 ">
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <SearchNormal size="56" color="#009e66" variant="Bold"/>
                                <p className=" mt-4"> UX Research</p>
                            </div>
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <Element2 size="56" color="#009e66" variant="Bold"/>
                                <p className=" mt-4"> UI Design</p>
                            </div>
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <Star size="56" color="#009e66" variant="Bold"/>
                                <p className=" mt-4"> Prototype</p>
                            </div>
                        </div>
                    </div>
                    <div className=" gap-2 items-center">
                        <div className="grid grid-cols-3 items-center ">
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <Profile2User size="56" color="#FF8A65" variant="Bold"/>
                                <p className="mt-4"> Community</p>
                            </div>
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <LampCharge size="56" color="#FF8A65" variant="Bold"/>
                                <p className="mt-4">Design Thinking</p>
                            </div>
                            <div className="py-4 px-8  md:px-4 items-center ">
                                <Box size="56" color="#FF8A65" variant="Bold"/>
                                <p className="mt-4"> Product Design</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div></div>
                
                
            </div>
        </div>
    )
}

export default Skills;