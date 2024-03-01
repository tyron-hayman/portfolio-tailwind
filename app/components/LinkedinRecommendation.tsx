import { motion, useTransform, stagger, animate, useInView, useScroll, useSpring, useMotionValue, useMotionTemplate  } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function LinkedinRecommend() {

    const refH = useRef(null);
    const isInViewH = useInView(refH, { once: true, amount : "some" });

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
    
      let animateCLass : any, animateCLassH : any;

      if ( isInViewH ) {
        animateCLassH = "active";
    } else {
        animateCLassH = "inactive";
    } 

    const testimonials = [
        {
            "name"      : "Sid Saraiya",
            "content"   : "I always appreciate working with Tyron. I know him from a previous career and stand by his techical knowledge when it comes to anything that needs to exist and serve users on the web. \n Added bonus is he has a good aptitude for design. I can send him a copydeck and be confident he’ll make the layout and look fit the brand",
            "method"    : "Founder @ Effinlazy",
            "image"     : "/sid.jpeg"
        },
        {
            "name"      : "Josh Arlitt",
            "content"   : "Tyron was an absolute joy to work with. He had great work ethic and provided excellent mentoring to a fellow employee. Several times I recall him going above and beyond to meet and exceed client expectations. I'm very sad to see him go, he will be a tremendous asset to his next employer.",
            "method"    : "Lead Web Developer @ Sparkjoy Studios",
            "image"     : "/josh.jpeg"
        }
      ];

    useEffect(() => {
        let targets = document.getElementsByClassName('hoveredOverThanks');
        let cursorFriend = document.getElementById('cursorFriend');

        for(let i = 0; i < targets.length; i++) {
            targets[i].addEventListener("mouseover", () => {
                cursorFriend?.classList.add("hoveredThanks");
            });
            targets[i].addEventListener("mouseleave", () => {
                cursorFriend?.classList.remove("hoveredThanks");
            });
        }
    }, []);

    return(
        <div id="linkedinRecommend">
            <motion.h2 ref={refH} variants={scrollVariants} animate={animateCLassH}>What some amazing peopel say</motion.h2>
            <motion.h3 ref={refH} variants={scrollVariants} animate={animateCLassH}>Curious about what it's like to work with me? My past clients and colleagues know best!</motion.h3>
            <motion.div className='container mx-auto grid gap-4 grid-cols-1 lg:grid-cols-2'>
                {testimonials.map((testimonial, i) => {

                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, amount : "some" });

                if ( isInView ) {
                    animateCLass = "active";
                } else {
                  animateCLass = "inactive";
                } 

                    let styles = {
                        "background" : `url(${testimonial.image}) center center no-repeat`
                    };

                    return(
                        <motion.div key={i} className="testimonials rounded-lg hoveredOverThanks" ref={ref} variants={scrollVariants} animate={animateCLass}>
                            <motion.div className="testimonial_img rounded-full grayscale" style={styles}></motion.div>
                            <p dangerouslySetInnerHTML={{ __html: testimonial.content }}></p>
                            <h4>{testimonial.name} - <span>{testimonial.method}</span></h4>
                        </motion.div>
                    );
                })};
            </motion.div>
        </div>
    )
}