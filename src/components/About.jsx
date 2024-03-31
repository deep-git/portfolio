import { GraduationCap, SquareChevronRight, Tv, UserRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className="relative screen_size about_design flex flex-col lg:flex-row justify-center">
      <div className="absolute w-full h-screen bg-white z-0" />
      <section className="w-full py-12 lg:pt-40 lg:pb-0 flex items-center z-10">
        <div className="container flex flex-col lg:flex-row items-center gap-6 px-0 md:px-6 xl:gap-12 justify-center max-w-[900px] h-full">
          <div className="flex justify-center bg-primary p-10 w-[100%] lg:h-full items-center lg:rounded-tl-xl lg:rounded-tr-xl">
            <h2 className="text-3xl text-white lg:text-4xl">About <br />Myself</h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-4xl">Deepak Thangella</h2>
              <p className="max-w-[500px] text-gray-500 dark:text-gray-400">
                Hi, I'm Deepak. I am currently 23 years old and living in Ontario, Canada. I enjoy coding and creating beautiful websites through utilizing my skills. Outside of coding, I also enjoy reading novels and watching youtube videos.
              </p>
            </div>
            <div>
              <div className="flex gap-5 w-[90%] lg:w-[500px] border-t border-gray-200 dark:border-gray-800">
                <GraduationCap className="w-10 h-10 text-slate-400" />
                <ul className="grid gap-2 py-2 grid-cols-2 md:grid-cols-3 w-full">
                  <li>Studied at Ontario Tech University</li>
                  <li>Years 2018-2023</li>
                  <li>Bachelor's of Software Engineering</li>
                </ul>
              </div>

              <div className="flex gap-5 w-[90%] lg:w-[500px] border-t border-gray-200 dark:border-gray-800">
                <Tv className="w-10 h-10 text-slate-400" />
                <ul className="grid gap-2 py-2 grid-cols-2 md:grid-cols-3 w-full">
                  <li>Coding</li>
                  <li>Reading novels</li>
                  <li>Watching youtube videos</li>
                </ul>
              </div>

              <div className="flex gap-5 w-[90%] lg:w-[500px] border-t border-gray-200 dark:border-gray-800">
                <SquareChevronRight className="w-10 h-10 text-slate-400" />
                <ul className="grid gap-2 py-2 grid-cols-2 md:grid-cols-3 w-full">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>Typescript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About