import { projectData } from './data/data';
import Image from "next/image";
import {Be} from 'iconsax-react';

const Projects = () => {
    return (
        // <div className="projects-container">
        //     <h2>Projects</h2>
        //     <div className="projects-grid">
        //         {projectData && projectData.map((project) => (
        //             <div className="project-card" key={project.id}>
        //                 <div className="project-header">
        //                     <i className="fa-regular fa-folder-open folder-icon"></i>
        //                     <div className="small-icons">
        //                         <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
        //                     </div>
        //                 </div>
        //                 <h3>{project.title}</h3>
        //                 <p>{project.description}</p>
        //             </div>
        //         ))
        //         }
        //     </div>
        // </div>

        <div className="container py-24">
            <div className="w-full text-center section-title t_center ">
                <span >Experience</span>
                <h3 className="text-[40px] font-black text-green-500">Project</h3>
                 <div className="w-full pt-[30px] ">
                    {/* Portfolio */}
                     <div className="grid grid-cols-3 ">
                        <div className="p-4 bg-teal-500" >
                            <p className="font-bold  text-stone-200">Behance</p>
                        </div>
                        <div className="text-left bg-teal-100/[0.1] p-4 gap-y-8">
                            <a  target="_blank" href="https://www.behance.net/huynhphuv"><Be size="32" color="#FF8A65" variant="Bold" className='float-right'/></a>
                        </div>
                        <div className="text-left bg-teal-100/[0.1] p-4 gap-y-8">
                        </div>
                     </div>
                     {/* COntact */}
                     <div className="grid grid-cols-3  ">
                        <div className="p-4 bg-cyan-600	" >
                            <p className="font-bold  text-stone-200">Contact me</p>
                        </div>
                        <div className="text-left bg-teal-100/[0.1] p-4 gap-y-8">
                            <a  target="_blank" href="https://www.linkedin.com/in/huynhphuv/"> 
                                <Image  src='/images/linkedin.svg' className="profile-img float-right" width={32} height={32}  alt="Phuc personal headshot" />
                            </a>
                        </div>
                        <div className="text-left bg-teal-100/[0.1] p-4 gap-y-8">
                        </div>
                     </div>
                    
                 </div>
            </div>
            </div>
    )
}

export default Projects;