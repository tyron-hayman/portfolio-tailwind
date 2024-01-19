'use client'; 
import Image from 'next/image'
import Header from "./components/header";
import Projects from "./components/projects";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {

  const initial = { opacity: 0, y : 100 }

  const variants = {
    visible: (custom : any) => ({
      opacity: 1,
      y : 0,
      transition: { delay: custom * 0.2, duration : 1 }
    })
  }


  useEffect(() => {
  }, []);
  
  return (
    <>
      <div className='mainContainer'>
          <div className='container mx-auto landingSection'>
          <motion.div custom={0} animate="visible" initial={{ opacity: 0, y : 50 }} variants={variants}>
            <Image
              src="/me.jpg"
              width={150}
              height={150}
              alt="AI Profile Image"
              className='ring-2 ring-[#ef233c] ring-offset-4 rounded-full'
            />
            </motion.div>
            <motion.h2 custom={1} animate="visible" initial={initial} variants={variants} className='rounded-full'>Hi, I'm Tyron</motion.h2>
            <motion.h1 custom={2} animate="visible" initial={initial} variants={variants}>I tell pixels where to go and how to behave.</motion.h1>
            <motion.p custom={3} animate="visible" initial={initial} variants={variants}>A seasoned front-end developer based in the vibrant city of Vancouver, BC, Canada. My passion is turning designs and work flows into engaging interactive experiences.</motion.p>
          </div>
          <Projects />
      </div>
      </>
  )
}
