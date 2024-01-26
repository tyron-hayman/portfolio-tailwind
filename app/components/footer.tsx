"use client";
import Head from "next/head";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimate, stagger, animate  } from "framer-motion";

export default function Footer({ cssposition }) {
    let curDate = new Date();
    let year = curDate.getFullYear();
    let footerStyle;

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

    return (
        <motion.div id="footer-wrap" style={footerStyle} initial={initial} animate="visible" variants={variants}>
            <div id="footerInner" className="flex justify-between">
                <div id="footerLeft">
                    <p>I am availbe for full time work <motion.a className="rounded-full" href="mailto:tyron.hayman@gmail.com" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>Get In Touch</motion.a></p>
                </div>
                <div id="footerRight">
                    <p>&copy; {year}</p>
                </div>
            </div>
        </motion.div>
    )
};