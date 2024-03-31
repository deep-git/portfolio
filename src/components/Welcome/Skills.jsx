import React from 'react';
import styles from "./styles.module.css";

const Skills = ({ title, Icon, icon_color, background_color }) => {

  return (
    <div className="flex flex-col items-center">
        <div style={{background: background_color}} className="p-3 rounded-full">
            <Icon style={{color: icon_color }} className="w-10 h-10"/>
        </div>
        <span className="mt-1 text-white">{title}</span>
    </div>
  )
}

export default Skills