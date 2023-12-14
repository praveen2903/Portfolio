import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


const ProjectSingle = ({image,title,description,gitlink,deploylink,icons}) => {
  return (
      <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="group relative flex flex-col flex-wrap h-80 w-[95%] mx-auto shadow-xl rounded-xl mt-6">
      <img src={image} alt={title} className="h-80 rounded-xl"/>
      <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-[#3b0764] rounded-xl">
        <h3 data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="text-2xl font-medium text-white my-2">{title}</h3>
        <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="px-2 text-lg text-white text-justify p-1">{description}</p>
        <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="flex flex-wrap items-center gap-3 mt-3">
        {
          icons.map((Icon,index)=>(
            <div className="rounded-full p-2" key={index}>
              <Icon className="text-white text-4xl font-bold"/>
            </div>
          ))
        }
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="flex gap-7 justify-center items-center my-7 text-2xl">
          <div className="bg-white rounded-full p-2">
            <a className="text-darkblue text-xl bg-white" href={gitlink} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="bg-white rounded-full p-2">
          <a className="text-darkblue text-xl bg-white" href={deploylink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt  className='p-[1px]'/>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSingle