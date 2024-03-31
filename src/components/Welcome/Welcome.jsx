import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { BookCheck, Gauge, Github, Goal, Linkedin } from 'lucide-react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.css";
import { cn } from '@/lib/utils';
import { SKILLS_CONTAINER } from '@/config/skills';
import Skills from './Skills';
import Link from 'next/link';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div id="home" className="min-h-max pt-10 flex flex-col lg:justify-center lg:pt-0">
      <div className="background_full_design"></div>
      <div className="flex flex-col lg:flex-row mt-10 lg:mt-24">

        {/* WELCOME BLOCK SECTION */}

        <div className="bg-slate-100 p-4 lg:flex-1 lg:pt-10 lg:p-10">
          <span className="text-xl">Hello, Welcome</span>

          <h1 className="text-4xl mt-4 lg:text-5xl font-semibold">I'm Deepak, Software Developer</h1>

          <div className="flex mt-5 items-center gap-5">
            <Link href="#contact">
              <Button className="shadow-[0px_10px_20px_rgba(0,0,0,0.4)]">Hire Me</Button>
            </Link>

            <Link href="#projects">
              <span className="text-slate-900 hover:text-slate-500 cursor-pointer hover:underline">Take a look at my work!</span>
            </Link>
          </div>

          <div className="flex mt-5 px-4 gap-2 lg:mt-10">
            <Goal className="w-20" />
            <p>I am an aspiring software developer that hopes to further advance my skills by contributing to various projects and sharpen my coding skills.</p>
          </div>

          <div className="flex mt-5 gap-5 items-center flex-wrap lg:mt-10">
            <span className="">Contact Me</span>
            <div className="flex gap-7">
              <Link target="_blank" href="https://github.com/deep-git">
                <FaGithub className="bg-slate-900 w-10 h-10 p-1 rounded-full text-white hover:bg-blue-600 transition" />
              </Link>

              <Link target="_blank" href="https://www.linkedin.com/in/deepak-thangella-ab5187279/">
                <FaLinkedin className="bg-slate-900 w-10 h-10 p-1 rounded-full text-white hover:bg-blue-600 transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* INTERESTS BLOCK SECTION */}
        <div className="flex flex-col mt-5 lg:w-72 lg:mx-5 lg:mb-6">
          <div className="relative bg-slate-900 h-16 text-white p-4 text-center">
            <span className="uppercase text-3xl tracking-wide lg:text-4xl">Interests</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:w-72 lg:h-full lg:gap-5">
            <div className={cn("relative bg-slate-900 h-12 mt-2 text-white p-4 text-center lg:h-full lg:w-full", styles.interests_type)}>
              <div className={styles.background_container}>
                <span className="text-xl pl-2 lg:hidden">Frontend</span>
                <span style={{ writingMode: "vertical-lr", textOrientation: "upright" }} className="hidden lg:flex text-xl pl-2 lg:text-2xl lg:tracking-[4px]">Frontend</span>
              </div>
            </div>
            <div className={cn("relative bg-slate-900 h-12 mt-2 text-white p-4 text-center lg:h-full lg:w-full", styles.interests_type_2)}>
              <div className={styles.background_container}>
                <span className="text-xl pl-2 lg:hidden">Full-stack</span>
                <span style={{ writingMode: "vertical-lr", textOrientation: "upright" }} className="hidden lg:flex text-xl pl-2 lg:text-2xl lg:tracking-[4px]">Full-stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* INFO BLOCK SECTION */}
        <div className="flex flex-col mt-5 gap-2 lg:w-72 lg:mt-0">
          <div className="flex bg-slate-100 justify-between items-center p-4 lg:flex-1 lg:p-10 flex-wrap">
            <Gauge className="w-14 h-14" />
            <div className="flex flex-col text-end">
              <span className="text-2xl font-bold">Entry/Junior</span>
              <span>level/position</span>
            </div>
          </div>

          <div className="flex bg-slate-100 justify-between items-center p-4 lg:flex-1 lg:p-10 flex-wrap">
            <BookCheck className="w-14 h-14" />
            <div className="flex flex-col text-end">
              <span className="text-2xl font-bold">20+</span>
              <span>projects completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS BLOCK SECTION */}

      <div className="flex flex-col bg-slate-900 mt-5 text-white p-4 lg:flex-row lg:justify-between lg:px-10 lg:items-center">
        <h2 className="text-3xl lg:text-4xl">Skills</h2>
        <div className="flex gap-5 mt-5 flex-wrap justify-center">
          {SKILLS_CONTAINER.map((skill) => (
            <Skills key={skill.icon_text} title={skill.icon_text} Icon={skill.Icon} icon_color={skill.icon_color} background_color={skill.background_color} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Welcome