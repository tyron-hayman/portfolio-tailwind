'use client'; 
import Image from 'next/image'
import Projects from "./components/projects";
import { motion, useTransform, stagger, animate, useInView, useScroll, useSpring, useMotionValue, useMotionTemplate  } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

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

function BuildSection({ sectionID, animateThis, onlyOnce, children }: any ) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: onlyOnce, amount : 0.2 });

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

  const hello = "h e l l o";
  const landingHeading = "I build things for the web.";
  const skillsList = ["HTML / CSS", "JavaScript", "ReactJS / NextJS", "SCSS / Tailwind", "PHP", "WordPress"];
  const helloArr = hello.split(" ");
  const landingHeadingArr = landingHeading.split(" ");
  let headingInt = 3;
  // About
  const ref = useRef(null);
  const refA = useRef(null);
  const refH2 = useRef(null);
  const isInView = useInView(ref, { once: true, amount : 0.2 });
  const isInViewH2 = useInView(refH2, { once: true, amount : 1 });

  const pointX = useMotionValue(0);
  const pointY = useMotionValue(0);

  const pointTransform = useMotionTemplate`
      translate(50px, -50%)
      translate(${pointX}px, ${pointY}px)
  `;

  useEffect(() => {
    const updadeMousePosition = (event : any ) => {
        pointX.set(event.clientX);
        pointY.set(event.clientY);
      };

      document.addEventListener("mousemove", updadeMousePosition);

      let targets = document.getElementsByClassName('hoveredOver');
      let cursorFriend = document.getElementById('cursorFriend');
      for(let i = 0; i < targets.length; i++) {
        targets[i].addEventListener("mouseover", () => {
          cursorFriend?.classList.add("hovered");
        });
        targets[i].addEventListener("mouseleave", () => {
          cursorFriend?.classList.remove("hovered");
        });
      }
      
      return () => {
        document.removeEventListener("mousemove", updadeMousePosition);
      };
}, []);


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

  let viewCLass, animateCLass, animateCLassH2;
                  
  if ( isInView ) {
      animateCLass = "active";
  } else {
      animateCLass = "inactive";
  }

  const { scrollY, scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollY,
    // Map x from these values:
    [0, 500],
    // Into these values:
    [1, 0]
  );
  const moveY = useTransform(
    scrollY,
    // Map x from these values:
    [0, 500],
    // Into these values:
    [0, 250]
  );

  const mouseMoveX = useTransform(
    pointX,
    // Map x from these values:
    [0, 600],
    // Into these values:
    [0, 200]
  );

  const mouseMoveY = useTransform(
    pointY,
    // Map x from these values:
    [0, 600],
    // Into these values:
    [0, 200]
  );

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if ( isInViewH2 ) {
    animateCLassH2 = "active";
  } else {
    animateCLassH2 = "inactive";
  }

  let showImage = (element : any ) => {
    let target = document.getElementById(element);
    target?.classList.add("show");
  }

  let hideImage = (element : any) => {
    let target = document.getElementById(element);
    target?.classList.remove("show");
  }

  return (
    <>
      <div id="scrollProgressWrap" className='rounded-lg'><motion.div id='scrollProgress' className="progress-bar" style={{ scaleY }} /></div>
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
            <motion.div id="profileImage" className='grayscale' style={{ opacity : opacity, y : moveY }}></motion.div>
          </motion.div >
          <motion.div id="aboutWrap" className='container mx-auto min-h-full flex items-center grid gap-4 grid-cols-1'>
            <motion.div id="aboutContent" className='w-full' ref={ref} variants={scrollVariants} animate={animateCLass}>
              <h3>I am a seasoned web developer based in the vibrant city of Vancouver, BC, Canada, with a rich experience spanning over a decade in the ever-evolving digital landscape.</h3>
              <h3>My journey in the world of web development has been nothing short of exhilarating. Over the years, I’ve had the privilege of working on diverse and challenging projects that have not only honed my skills but also fueled my passion for creating seamless and visually appealing online experiences. Vancouver’s dynamic tech scene has provided me with the perfect backdrop to thrive, inspiring me to push myself beyond my comfort zone and grow.</h3>
            </motion.div>
            <motion.div id="aboutSkills" className='md:w-6/12 md:justify-self-end' ref={refA} variants={scrollVariants} animate={animateCLass}>
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
          <motion.h2 ref={refH2} variants={scrollVariants} animate={animateCLassH2}>Recent Work</motion.h2>
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
                          viewCLass = "projectBoxes hoveredOver inView";
                          animateCLass = "active";
                      } else {
                          viewCLass = "projectBoxes hoveredOver";
                          animateCLass = "inactive";
                      }

                    let proParentStyles = {
                        transform: pointTransform
                    };

                    let styles = {
                        "background" : `url(${project.image}) center center no-repeat`
                    };

                    return(
                      <>
                        <motion.div key={i} ref={ref} className={viewCLass} variants={variants} animate={animateCLass} onMouseMove={() => showImage(`proImage${i}`)} onMouseLeave={() => hideImage(`proImage${i}`)} onClick={() => window.open(project.link)}>
                            <div><h4>{project.method}</h4>
                            <h3>{project.name}</h3></div>
                            <div><h5><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h5></div>
                        </motion.div>
                        <motion.div id={`proImage${i}`} className="bgImageHover" style={proParentStyles}><div className="bgImageHoverImage" style={styles}></div>
                         <div className='proDetails'>
                            <ul>
                            {techStack.map((tech, i) => {
                              headingInt++;
                              return(<li key={i} className='shadow-lg'>{tech}</li>);
                            })}
                            </ul>
                          </div>
                        </motion.div>
                        </>
                    );
                })}
          </BuildSection>
      </div>
      </>
  )
}