'use client'; 
import Image from 'next/image'
import Header from "../components/header";
import { motion, useAnimate, stagger, animate  } from "framer-motion";


const hello = "My Recent Work";
const landingHeading = "I have had the privilege to be apart of some amazing projects. Here are a few of the most recent I have completed.";
const helloArr = hello.split(" ");
const landingHeadingArr = landingHeading.split(" ");
const projectList = [
  {
      "name"      : "EffinLazy",
      "content"   : "I was responsible for the web development and design of this project, working closely with the client to achieve their vision.",
      "method"    : "Freelance",
      "image"     : "/effinlazy.png",
      "link"      : "https://effinlazy.com/",
      "tech"      : ["html", "scss", "wordpress", "php", "javascript", "jquery"]
  },
  {
      "name"      : "Anxiety Canada",
      "content"   : "As the lead Front End Developer for Anxiety Canada, I worked closely with the design team to turn the design into a function project.",
      "method"    : "Sparkjoy Studios",
      "image"     : "/AC.png",
      "link"      : "https://www.anxietycanada.com/",
      "tech"      : ["html", "scss", "wordpress", "php", "javascript", "jquery"]
  },
  {
      "name"      : "BIG",
      "content"   : "Working closely with the design team as the lead Front End Developer on BIG, I developed a function project based on design mockups and client feedback.",
      "method"    : "Sparkjoy Studios",
      "image"     : "/BIG.png",
      "link"      : "https://biglobalization.org/",
      "tech"      : ["html", "scss", "wordpress", "php", "javascript", "jquery"]
  }
];

export default function Projects() {

  const variants = {
    visible: (custom :any) => ({
      opacity: 1,
      filter: "blur(0px)",
      y : 0,
      transition: { delay: custom * 0.1, duration : 0.75 }
    }),
    text: (custom :any) => ({
      opacity: 1,
      filter: "blur(0px)",
      y : 0,
      transition: { delay: custom * 0.05, duration : 0.75 }
    })
  }
  const initial = { opacity : 0, y : 30, filter: "blur(20px)"  };

  return (
    <>
      <div id='mainContainer'>
        <div id="projectsWrap" className='container mx-auto'>
            <h1>
            {helloArr.map((word, i) => {
              return(<motion.span className='headingWords' key={i} custom={i} initial={initial} animate="visible" variants={variants}>{word}</motion.span> );
            })}
            </h1>
            <p>
            {landingHeadingArr.map((word, i) => {
              return(<motion.span className='headingWords' key={i} custom={i} initial={initial} animate="text" variants={variants}>{word}</motion.span> );
            })}
            </p>
        </div>
      </div>
      </>
  )
}
