'use client'; 
import Image from 'next/image'
import Projects from "./components/projects";
import { motion, useAnimate, stagger, animate, useInView  } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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

function BuildSection({ sectionID, animateThis, onlyOnce, children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: onlyOnce, amount : 0.7 });

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

  let animateCLass;
                  
  if ( isInView ) {
      animateCLass = "active";
  } else {
    animateCLass = "inactive";
  } 

  if ( animateThis ) {
    return (
      <div id={sectionID} className='container mx-auto min-h-full flex items-center grid gap-4 grid-cols-1'>
        <motion.div className='w-full' ref={ref} variants={scrollVariants} animate={animateCLass}>
          {children}
        </motion.div>
      </div>
    );
  } else {
    return (
      <div id={sectionID} className='container mx-auto min-h-full flex items-center grid gap-4 grid-cols-1'>
        <motion.div className='w-full'>
          {children}
        </motion.div>
      </div>
    );
  }
}



export default function Home() {

  const hello = "H E L L O";
  const landingHeading = "I build things for the web.";
  const skillsList = ["HTML / CSS", "JavaScript", "ReactJS / NextJS", "SCSS / Tailwind", "PHP", "WordPress"];
  const helloArr = hello.split(" ");
  const landingHeadingArr = landingHeading.split(" ");
  let headingInt = 3;
  // About
  const ref = useRef(null);
  const refA = useRef(null);
  const isInView = useInView(ref, { once: true, amount : 0.7 });


  // Landing Motion
  const variants = {
    visible: (custom :any) => ({
      opacity: 1,
      filter: "blur(0px)",
      y : 0,
      transition: { delay: custom * 0.1, duration : 0.75 }
    })
  }
  const initial = { opacity : 0, y : 30, filter: "blur(20px)"  };

  // Scrolling Motion
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

  let viewCLass, animateCLass;
                  
  if ( isInView ) {
      animateCLass = "active";
  } else {
      animateCLass = "inactive";
  }
  

  useEffect(() => {
  }, []);

  return (
    <>
      <div id='mainContainer'>
          <motion.div id="landingWrap" className='container mx-auto h-dvh grid grid-cols-1 content-center'>
            <h1>
            {helloArr.map((word, i) => {
              return(<motion.span className='headingWords' key={i} custom={i} initial={initial} animate="visible" variants={variants}>{word}</motion.span>);
            })}
            </h1>
            <h2>
            {landingHeadingArr.map((word, i) => {
              headingInt++;
              return(<motion.span className='headingWords' key={i} custom={headingInt} initial={initial} animate="visible" variants={variants}>{word}</motion.span>);
            })}
            </h2>
          </motion.div >
          <motion.div id="aboutWrap" className='container mx-auto min-h-full flex items-center grid gap-4 grid-cols-1'>
            <motion.div id="aboutContent" className='w-full' ref={ref} variants={scrollVariants} animate={animateCLass}>
              <h3>I am a seasoned web developer based in the vibrant city of Vancouver, BC, Canada, with a rich experience spanning over a decade in the ever-evolving digital landscape.</h3>
              <h3>My journey in the world of web development has been nothing short of exhilarating. Over the years, I’ve had the privilege of working on diverse and challenging projects that have not only honed my skills but also fueled my passion for creating seamless and visually appealing online experiences. Vancouver’s dynamic tech scene has provided me with the perfect backdrop to thrive, inspiring me to push myself beyond my comfort zone and grow.</h3>
            </motion.div>
            <motion.div id="aboutSkills" className='w-6/12 justify-self-end' ref={refA} variants={scrollVariants} animate={animateCLass}>
              <h4>My Skills</h4>
              <ul className='grid gap-4 grid-cols-2'>
              {skillsList.map((skill, i) => {
                const refA = useRef(null);
                const isInView = useInView(refA, { once: true, amount : 0.5 });

                let viewCLass, animateCLass;
                  
                if ( isInView ) {
                    animateCLass = "active";
                } else {
                    animateCLass = "inactive";
                }

                return(<motion.li key={i} custom={headingInt} ref={refA} variants={scrollVariants} animate={animateCLass}>{skill}</motion.li>);
              })}
              </ul>
            </motion.div>
          </motion.div>
          <BuildSection sectionID="projectsWrap" animateThis={false} onlyOnce={true}>
          {projectList.map((project, i) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true, amount : 1 });
                    let techStack = project.tech;

                    const variants = {
                        active: {
                            y: 0,
                            opacity : 1,
                            transition: { duration: 1 }
                        },
                        inactive: {
                            y: 100,
                            opacity : 0,
                            transition: { duration: 1 }
                        }
                      }

                    let viewCLass, animateCLass;
                  
                      if ( isInView ) {
                          viewCLass = "projectBoxes basis-1/2 rounded-lg inView grayscale hover:grayscale-0";
                          animateCLass = "active";
                      } else {
                          viewCLass = "projectBoxes basis-1/2 rounded-lg grayscale hover:grayscale-0";
                          animateCLass = "inactive";
                      }
                    
                    let styles = {
                        "background" : `url(${project.image}) center center no-repeat`
                    };

                    return(
                        <motion.div key={i} ref={ref} className={viewCLass} variants={variants} animate={animateCLass}>
                            <motion.div className='projectImg' style={styles}></motion.div>
                            <div className='projectInfo'>
                                <div className='projectInfoHeading'><h3>{project.name}</h3></div>
                            </div>
                            <div className='projectTags'>
                                <ul>
                                    <li className='rounded-full'>{project.method}</li>
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
          </BuildSection>
      </div>
      </>
  )
}