import { AtSign, ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Contact = () => {
  return (
    <div id="contact" className="screen_size mt-52 flex flex-col justify-center items-center">
      <div>
        <h2 className="text-3xl">Contact</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 mt-10 w-3/4 rounded-lg bg-slate-900 text-white p-5 justify-center items-center">
        <h3 className="text-2xl">Resume</h3>
        <div className="flex gap-5">
          <Link target="_blank" href="https://github.com/deep-git/resume">
            <FaGithub className="w-7 h-7 hover:text-blue-600 transition" />
          </Link>

          <Link target="_blank" href="https://deep-git.github.io/resume/">
            <ExternalLink className="w-7 h-7 hover:text-blue-600 transition" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-5 w-3/4 gap-5 rounded-lg bg-slate-900 text-white p-5 justify-center items-center">
        <Mail className="hidden lg:flex" />
        <div className="flex lg:hidden">
          <Popover>
            <PopoverTrigger><Mail className="cursor-pointer w-10 h-10" /></PopoverTrigger>
            <PopoverContent>
              <div className="flex h-20 justify-center items-center font-bold">
                deepakthangella5@gmail.com
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <span className="hidden lg:flex lg:text-2xl">deepakthangella5@gmail.com</span>
      </div>

      <div className="flex mt-5 w-1/2 gap-5 text-white p-5 justify-center items-center">
        <Link target="_blank" href="https://github.com/deep-git">
          <FaGithub className="w-14 h-14 bg-slate-900 p-3 rounded-full hover:bg-blue-600 transition" />
        </Link>

        <Link target="_blank" href="https://www.linkedin.com/in/deepak-thangella-ab5187279/">
          <FaLinkedin className="w-14 h-14 bg-slate-900 p-3 rounded-full hover:bg-blue-600 transition" />
        </Link>
      </div>
    </div>
  )
}

export default Contact