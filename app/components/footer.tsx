"use client";
import Head from "next/head";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";
import { motion, useAnimate, stagger, animate, useInView  } from "framer-motion";


export default function Footer({ cssposition } : any ) {
    let curDate = new Date();
    let year = curDate.getFullYear();
    let footerStyle: any, animateCLass;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount : 0.5 });

    const variants = {
        visible: () => ({
          opacity: 1,
          filter: "blur(0px)",
          y : 0,
          transition: { delay : 1, duration : 0.75 }
        })
      }
      const initial = { opacity : 0, y : 30, filter: "blur(10px)"  };

    if ( cssposition == "fixed" ) {
        footerStyle = {
            position : cssposition,
            left : 0,
            bottom : 0,
            width : "100%"
        }
    } else {
        footerStyle = {
            position : "relative"
        }
    }

    const scrollVariants = {
        active: {
            y: 0,
            opacity : 1,
            filter: "blur(0px)",
            transition: { duration: 0.75 }
        },
        inactive: {
            y: 100,
            opacity : 0,
            filter: "blur(20px)",
            transition: { duration: 0.75 }
        }
      }

    if ( isInView ) {
        animateCLass = "active";
    } else {
        animateCLass = "inactive";
    }

    return (
        <>
        <motion.div id="footer-contact" ref={ref} initial={initial} animate={animateCLass} variants={scrollVariants}>
            <p>Have a full time opportunity or want to collaborate on a project?</p>
            <h2><Link href="mailto:tyron.hayman@gmail.com" className="hoveredOver">Get In Touch</Link></h2>
        </motion.div>
        <motion.div id="footer-wrap" style={footerStyle} initial={initial} animate="visible" variants={variants}>
            <div id="footerInner" className="flex justify-between">
                <div id="footerLeft">
                    <p>Pushing pixels since 2012</p>
                </div>
                <div id="footerRight">
                    <p>&copy; {year}</p>
                </div>
            </div>
        </motion.div>
        </>
    )
};