import Image from "next/image";

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="w-full text-center">
                <span  className="border border-yellow-100 p-2">Skills</span>
                <h3 className="text-[40px] text-bold text-yellow-400">I Work Hard to Improve  <br/>My Skills Regularly</h3>
            </div>
            <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-4">
                <div className="border border-slate-300 bg-amber-100 ">
                    <Image  src='/images/html5.svg' className="profile-img " width={200 } height={200}  alt="Phuc personal headshot" />
                </div>
                <div className="border border-slate-300 bg-amber-100 text-black">
                    <Image  src='/images/css3.svg' className="profile-img " width={200 } height={200}  alt="Phuc personal headshot" />
                </div>
                <div className="border border-slate-300 bg-amber-100 text-black">
                <Image  src='/images/css3.svg' className="profile-img " width={200 } height={200}  alt="Phuc personal headshot" />
                </div>
                <div className="border border-slate-300 bg-amber-100 text-black">
                    Mobile Deverlopment
                </div>
              
                <div className="border border-slate-300 bg-amber-100 text-black">
                    UI Design
                </div>
                <div className="border border-slate-300 bg-amber-100 text-black">
                    UX Design
                </div>
                <div className="border border-slate-300 bg-amber-100 text-black">
                    Research
                </div>
                <div className="border border-slate-300 bg-amber-100 text-black">
                    Prototype
                </div>
            </div>
        </div>
    )
}

export default Skills;