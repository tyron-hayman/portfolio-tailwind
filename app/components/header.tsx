"use client";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimate, stagger, animate  } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const router = useRouter()
    const variants = {
        visible: () => ({
          opacity: 1,
          filter: "blur(0px)",
          y : 0,
          transition: { delay : 1, duration : 0.75 }
        })
      }
      const initial = { opacity : 0, y : -30, filter: "blur(10px)"  };

    return (
        <>
        <div id="noiseBG"></div>
        <motion.div id="header" className="flex justify-between content-center" initial={initial} animate="visible" variants={variants}>
            <div id="header-logo"><Link href="/" scroll={false}><FontAwesomeIcon icon={faCodeBranch} /></Link></div>
            <div id="mainNav">
                <Link href="/" className="link-items active rounded-full" scroll={false}>Home</Link>
                <Link href="/projects" className="link-items rounded-full" scroll={false}>Recent Work</Link>
            </div>
        </motion.div>
        </>
    )
};