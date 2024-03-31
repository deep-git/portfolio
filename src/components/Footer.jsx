import React from 'react';
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
  return (
    <footer className="inset-x-0 h-max text-slate-500">
        <MaxWidthWrapper>
          <div className="flex flex-col lg:flex-row bg-slate-100 justify-center items-center h-max p-5 gap-10">    
            <div className="flex flex-col text-center">
              <span>All right reserved 2024</span>
              <span>Made by Deepak T</span>
            </div>

            <div>
              <span>Made using</span>
              <div className="flex gap-2">
                <FaHtml5 className="w-5 h-5"/>
                <SiTailwindcss className="w-5 h-5"/>
                <TbBrandNextjs className="w-5 h-5"/>
              </div>
            </div>
        </div>
      </MaxWidthWrapper>
  </footer>
  )
}

export default Footer