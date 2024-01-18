'use client'; 
import Image from 'next/image'
import Header from "./components/header";
import { animate, stagger } from "framer-motion/dom"
import { useState, useEffect } from "react";

export default function Home() {


  useEffect(() => {
    animate(".animateThis", { opacity: 1 }, { duration : 1, delay: stagger(0.25) })
  }, []);
  
  return (
    <>
      <div className='mainContainer'>
          <div className='container mx-auto landingRow'>
            <Image
              src="/me.jpg"
              width={150}
              height={150}
              alt="AI Profile Image"
              className='ring-2 ring-[#ef233c] ring-offset-4 animateThis'
            />
            <h2 className='animateThis'>Hi, I'm Tyron</h2>
            <h1 className='animateThis'>I tell pixels where to go and how to behave.</h1>
            <h3 className='animateThis'>A seasoned front-end developer based in the vibrant city of Vancouver, BC, Canada. My passion is turning designs and work flows into engaging interactive experiences. </h3>
          </div>
      </div>
      </>
  )
}
