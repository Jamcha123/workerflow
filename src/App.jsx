import { act, useEffect, useRef, useState } from 'react'
import $ from 'jquery';
import { animate, motion } from 'framer-motion'; 
import * as THREE from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import anime from 'animejs'
import {useAuth0} from '@auth0/auth0-react'
import './App.css'


function AddNavbar(){
  const [active, setActive] = useState(false);
  return(
    <div className="fixed w-[100%] h-[10vh] m-auto mt-[2%] p-[0] flex flex-row align-middle justify-center z-[200] ">
      <ul className="flex flex-row align-middle justify-evenly text-center w-[100%] h-[10vh] m-auto p-[0] relative ">
        <div className="w-[25%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-evenly text-center ">
          <li onClick={active? () => setActive(false) : () => setActive(true)} className="text-5xl text-white cursor-pointer z-[204]">
            <span className="material-symbols-outlined text-5xl text-black dark:text-white mt-[25%] ">
              menu
            </span>
          </li>
        </div>
        <div className="w-[75%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-evenly text-center ">
          <div className="relative w-[50%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center ">
          </div>
          <div className="relative w-[50%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center ">
          </div>
        </div>
      </ul>
      <motion.ul initial={{opacity: 0, translateX: -100 + "%"}} animate={{opacity: active? 0.75 : 0, translateX: active? -50 + "%" : -0 + "%", translateY: active? -50 + "%" : -100 + "%" }} transition={{type: "spring", duration: 2}} className='flex flex-col align-middle justify-evenly text-center w-[100%] z-[203] h-[100vh] m-auto p-[0] fixed bg-slate-950 top-[50%] left-[50%] '></motion.ul>
      <motion.ul initial={{opacity: 0, translateX: -100 + "%"}} animate={{opacity: active? 0.75 : 0, translateX: active? -50 + "%" : -0 + "%", translateY: active? -50 + "%" : -100 + "%" }} transition={{type: "spring", duration: 2}} className="flex flex-col align-middle justify-evenly text-center w-[100%] z-[203] h-[100vh] m-auto p-[0] fixed bg-transparent top-[50%] left-[50%] ">
        <li className='text-4xl text-white'><a href="#item1">Homepage</a></li>
        <li className='text-4xl text-white'><a href="#item2">What is Workerflow?</a></li>
        <li className='text-4xl text-white'><a href="#item3">What we offer</a></li>
      </motion.ul>
    </div>
  )
}

function AddHeader(){
  useEffect(() => {

  })
  return(
    <div className="w-[100%] h-[100vh] m-auto p-[0] overflow-hidden relative bg-gradient-to-tr from-violet-600 via-emerald-600 to-amber-600 back ">
      <section className="flex flex-col align-middle justify-center text-center min-h-[100vh] min-w-[100%] bg-slate-800 opacity-[0.75] "></section>
      <section className='flex flex-col align-middle justify-center text-center  min-h-[100vh] min-w-[100%] translate-y-[-100%] ' id='sect1'>
        <div className="flex flex-row align-middle justify-center text-center w-[100%] h-[50vh] m-auto p-[0] bg-transparent  ">

        </div>
        <div className="flex flex-row align-middle justify-evenly text-center w-[100%] h-[50vh] m-auto p-[0] bg-transparent  ">
          <motion.button initial={{scale: 1}} whileHover={{scale: 0.8}} whileTap={{scale: 1.2}} className="w-[6em] h-[2.5em] m-auto p-[0] rounded-3xl text-center bg-gradient-to-tr z-[201] from-violet-800 via-pink-800 to-purple-800 text-4xl text-white ">
            Get Started
          </motion.button>
        </div>
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