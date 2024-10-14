import { act, useEffect, useRef, useState } from 'react'
import $ from 'jquery';
import { animate, motion } from 'framer-motion'; 
import * as THREE from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import anime from 'animejs'
import './App.css'


function AddNavbar(){
  const [active, setActive] = useState(false);
  return(
    <div className="fixed w-[100%] h-[10vh] m-auto mt-[2%] p-[0] flex flex-row align-middle justify-center z-[200] ">
      <ul className="flex flex-row align-middle justify-evenly text-center w-[100%] h-[10vh] m-auto p-[0] relative ">
        <div className="w-[25%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-evenly text-center ">
          <li onClick={active? () => setActive(false) : () => setActive(true)} className="text-5xl text-white cursor-pointer z-[200]">
            <span className="material-symbols-outlined text-5xl text-black dark:text-white mt-[25%] ">
              menu
            </span>
          </li>
        </div>
        <div className="w-[75%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-evenly text-center ">
          <div className="relative w-[50%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center ">

          </div>
          <div className="relative w-[50%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center ">
            <motion.button whileHover={{scale: 0.8}} whileTap={{scale: 1.1}} className="relative w-[8em] rounded-xl h-[10vh] z-[200] m-auto p-[0] bg-slate-950 text-2xl overflow-hidden cursor-pointer dark:text-white text-black  ">
              To the Budget
            </motion.button>
          </div>
        </div>
      </ul>
      <motion.ul initial={{opacity: 0}} animate={{opacity: active? 0.75 : 0}} className="flex flex-row align-middle justify-evenly text-center w-[100%] h-[100vh] m-auto p-[0] bg-slate-700 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] ">

      </motion.ul>
      <motion.ul initial={{opacity: 0}} animate={{opacity: active? 1 : 0}} className="flex flex-row align-middle justify-evenly text-center w-[100%] h-[100vh] m-auto p-[0] fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] "></motion.ul>
    </div>
  )
}

function AddHeader(){
  return(
    <div className="w-[100%] h-[100vh] m-auto p-[0] overflow-hidden relative bg-slate-400 dark:bg-slate-800 ">
      <section className="grid grid-rows-3 grid-cols-3 sm:grid-cols-4 sm:grid-rows-4 md:grid-cols-5 md:grid-rows-5 lg:grid-rows-6 lg:grid-cols-6 gap-[5px] w-[100%] h-[100vh] m-auto p-[0] overflow-hidden z-[99] ">
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden sm:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden sm:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden sm:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden sm:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden sm:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden md:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden md:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden md:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden md:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden md:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
        <div className="relative w-[100%] h-[100%] hidden lg:block m-auto p-[0] bg-slate-400 dark:bg-slate-900 "></div>
      </section>      
    </div>
  )
}
export default function App(){
  const ref = useRef()
  return(
    <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent ">
      <AddNavbar></AddNavbar>
      <AddHeader></AddHeader>
    </div>
  )
}