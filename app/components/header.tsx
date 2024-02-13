"use client";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimate, stagger, animate, useMotionValue, useMotionTemplate  } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const pointX = useMotionValue(0);
    const pointY = useMotionValue(0);
    const [pointOpac, setPointOpac] = useState(0);

    const pointTransform = useMotionTemplate`
        translate(-50%, -50%)
        translate(${pointX}px, ${pointY}px)
    `;

    const router = useRouter();
    const variants = {
        visible: () => ({
          opacity: 1,
          filter: "blur(0px)",
          y : 0,
          transition: { delay : 1, duration : 0.75 }
        })
      }
      const initial = { opacity : 0, y : -30, filter: "blur(10px)"  };

      useEffect(() => {
        const updadeMousePosition = (event : any) => {
            setPointOpac(1);
            pointX.set(event.clientX);
            pointY.set(event.clientY);
          };

          const hideMouseCursor = (event : any ) => {
            setPointOpac(0);
            pointX.set(event.clientX);
          };
      
          document.addEventListener("mousemove", updadeMousePosition);
          document.addEventListener("mouseleave", hideMouseCursor);
      
          return () => {
            document.removeEventListener("mousemove", updadeMousePosition);
            document.addEventListener("mouseleave", hideMouseCursor);
          };
    }, []);

    return (
        <>
        <motion.div id="cursorFriendDot" style={{ transform: pointTransform, opacity : pointOpac }}></motion.div>
        <motion.div id="cursorFriend" style={{ transform: pointTransform, opacity : pointOpac }}></motion.div>
        <div id="noiseBG"></div>
        <motion.div id="header" className="flex justify-between content-center backdrop-blur-md" initial={initial} animate="visible" variants={variants}>
            <div id="header-logo"><Link href="/" scroll={false}>Tyron Hayman</Link></div>
            <div id="mainNav">
                <Link href="mailto:tyron.hayman@gmail.com" className="link-items active rounded-full" scroll={false}>Contact Me</Link>
            </div>
        </motion.div>
        </>
    )
};