'use client'; 
import Image from 'next/image'
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
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


export default function Projects() {


    useEffect(() => {
    }, []);
  
  return (
    <>
          <div className='container mx-auto projectsSection'>
                <div className='projectContainer grid grid-cols-2 gap-6'>
                {projectList.map((project, i) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { amount : 0 });
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
                          viewCLass = "projectBoxes basis-1/2 rounded-lg inView";
                          animateCLass = "active";
                      } else {
                          viewCLass = "projectBoxes basis-1/2 rounded-lg";
                          animateCLass = "inactive";
                      }
                    
                    let styles = {
                        "background" : `url(${project.image}) center center no-repeat`
                    };

                    return(
                        <motion.div key={i} ref={ref} className={viewCLass} variants={variants} animate={animateCLass}>
                            <div className='projectImg' style={styles}></div>
                            <div className='projectInfo bg-gradient-to-t from-60% from-white'>
                                <h3>{project.name}</h3>
                                <p>{project.content}</p>
                            </div>
                            <div className='projectTags'>
                                <ul>
                                    <li className='rounded-full'>{project.method}</li>
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
                </div>
          </div>
      </>
  )
}