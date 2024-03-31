"use client";

import React, { useState } from 'react'
import { Button } from './ui/button'
import { PROJECT_LINKS } from '@/config/projects'
import ProjectCard from './ProjectCard'
import { ArrowRightLeft } from 'lucide-react';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";

const Projects = () => {

  const [projectType, setProjectType] = useState("All");
  const [switchType, setSwitchType] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState(6);

  return (
    <div id="projects" className="relative min-h-max">
      <div className="flex justify-center items-center w-full bg-slate-900 text-white p-9">
        <h2 className="text-3xl">Projects</h2>
        <Button onClick={() => setSwitchType(prev => !prev)} className="ml-auto"><ArrowRightLeft /></Button>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-5 mt-5 w-full justify-center"> 
        <Button onClick={() => setProjectType("All")}>All</Button> 
        <div className="relative border-[2px] border-slate-900 rounded-lg px-3 pt-3 pb-2 w-max flex gap-5">
          <span className="absolute -top-3 left-2 bg-white">Frontend</span>
          <Button onClick={() => setProjectType("UI")}>UI</Button>
          <Button onClick={() => setProjectType("Functional")}>Functional</Button>
        </div>

        <Button onClick={() => setProjectType("Full-stack")}>Full-stack</Button>

      </div>

      <h3 className="text-2xl font-bold w-full text-center mt-5">{projectType}</h3>

      <section className={`${switchType ? 'grid grid-cols-1' : 'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'} mt-14 w-full text-center`}>
        {PROJECT_LINKS.filter((project) => project.tag === projectType).slice(0, loadedProjects).map((project) => (
          <ProjectCard key={project.id} project={project} switchType={switchType}/>
        ))}

        {projectType === "All" && PROJECT_LINKS.slice(0, loadedProjects).map((project) => (
          <ProjectCard key={project.id} project={project} switchType={switchType}/>
        ))}
        
      </section>

      {PROJECT_LINKS.filter((project) => project.tag === projectType).length > loadedProjects && (
        <div className="flex flex-col justify-center mt-10 w-full items-center">
          <span onClick={() => setLoadedProjects(prev => prev + 6)} className="cursor-pointer">Load More</span>
          <IoIosArrowDown />
        </div>
      )}

      {projectType === "All" && PROJECT_LINKS.length > loadedProjects && (
        <div className="flex flex-col justify-center mt-10 w-full items-center">
          <span onClick={() => setLoadedProjects(prev => prev + 6)} className="cursor-pointer">Load More</span>
          <IoIosArrowDown />
        </div>
      )}
    </div>
  )
}

export default Projects