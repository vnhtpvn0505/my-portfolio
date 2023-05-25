import Image from "next/image";

const Skills = () => {
    return (
        <div className="container pt-24">
             <div className="w-full text-center section-title t_center ">
                <span >Skill</span>
                <h3 className="text-[40px] font-black text-green-500">What I Do?</h3>
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-8 mt-8">
                <div >
                    <h4 className="title text-[30px] mt-[25px]">Software Development</h4>
                    <div className="grid grid-cols-2 gap-2 items-center">
                        <div>Front-End</div>
                        <div className="flex items-center ">
                        <div className="py-4">
                        <Image  src='/images/html5.svg' className="profile-img float-right" width={400 } height={400}  alt="Phuc personal headshot" />
                       
                        </div>
                        <div className="py-4"><Image  src='/images/css3.svg' className="profile-img float-right" width={400 } height={400}  alt="Phuc personal headshot" /></div>
                        <div className="py-4"><Image  src='/images/javascript.svg' className="profile-img float-right" width={400 } height={400}  alt="Phuc personal headshot" /></div>
                    </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 items-center">
                        <div>Mobile Development</div>
                        <div className="flex items-center ">
                        <div className="py-4">
                        <Image  src='/images/html5.svg' className="profile-img float-right" width={400 } height={400}  alt="Phuc personal headshot" />
                        </div>
                        <div className="py-4"><Image  src='/images/css3.svg' className="profile-img float-right" width={400 } height={400}  alt="Phuc personal headshot" /></div>
                        <div className="py-4"><Image  src='/images/javascript.svg' className="profile-img float-right" width={400 } height={400}  alt="Phuc personal headshot" /></div>
                    </div>
                    </div>
                    
                </div>
                <div className="border border-slate-300 bg-amber-100 text-black">
                    
                </div>
                <div></div>
                
                
            </div>
        </div>
    )
}

export default Skills;