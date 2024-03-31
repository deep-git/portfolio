import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ProjectCard = ({ project, switchType }) => {

  return (
    <>
    {switchType === true ? (
        <div className="flex flex-col lg:flex-row justify-between items-center bg-slate-100 w-full px-10 py-5 gap-3 h-max lg:gap-10 border-b-[2px] border-b-slate-300">
            <h3 className="text-2xl flex-1 text-start">{project.title}</h3>
            <p className="flex-1 text-wrap flex-wrap text-start line-clamp-4">{project.description}</p>

            <div className="flex justify-end gap-5 items-center flex-1">
                <div className="flex gap-2">

                {project.Languages.map((Language) => (
                    <Language key={Language} className="w-7 h-7 text-slate-500"/>
                ))}
                </div>
                <div className="flex gap-5 border-l-[2px] border-l-sky-700 pl-5">
                    <Link target="_blank" href={project.github}>
                        <FaGithub className="w-7 h-7 text-slate-500"/>
                    </Link>

                    <Link target="_blank" href={project.view_link}>
                        <ExternalLink className="w-7 h-7 text-slate-500"/>
                    </Link>
                </div>
            </div>
        </div>
    ) : (
        <div className="bg-slate-200 rounded-lg w-full h-full p-5 border-b-[5px] border-b-sky-700">
            <div className="relative w-full h-52 rounded-lg overflow-hidden">
                <div className="absolute z-40 top-2 right-2 flex gap-3">
                    <Link target="_blank" href={project.github}>
                        <FaGithub className="w-10 h-10 bg-slate-900/70 p-2 text-slate-300 rounded-full"/>
                    </Link>

                    <Link target="_blank" href={project.view_link}>
                        <ExternalLink className="w-10 h-10 bg-slate-900/70 p-2 text-slate-300 rounded-full"/>
                    </Link>
                </div>
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 1440px) 208px" className="object-cover"/>
            </div>
            <h3 className="mt-5 text-2xl">{project.title}</h3>
            <p className="mt-3 text-start text-slate-500 line-clamp-4">{project.description}</p>

            <div className="flex mt-5 justify-end gap-2">
                {project.Languages.map((Language) => (
                    <Language key={Language} className="w-7 h-7 text-slate-500"/>
                ))}
            </div>
        </div>
    )}
    </>
  )
}

export default ProjectCard