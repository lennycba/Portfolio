'use client'
import style from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [currentSection,setCurrentSection] = useState('') 

 const handleClick = (id) =>{
    setCurrentSection(id)
 }
  return (
    <div className={style.container}>
      <div className={style.home}>
        <div className={style.homeT}>
          <Link onClick={()=>handleClick('')} href="#About">Mario Lujan</Link>
        </div>
      </div>
      <div className={style.others}>
          {currentSection !== '#Projects' && 
          <div className={style.projectsT}>
          <Link onClick={()=>handleClick("#Projects")} href="#Projects">Projects</Link>
        </div>}
        {currentSection !== "#Technologies" &&
        <div className={style.techT}>
          <Link onClick={()=>handleClick("#Technologies")} href="#Technologies">Technologies</Link>
        </div>}
        {currentSection !== "#Contact" &&
        <div className={style.contacT}>
          <Link onClick={()=>handleClick("#Contact")} href="#Contact">Contact</Link>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
