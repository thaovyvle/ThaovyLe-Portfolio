"use client";
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import LayersPages from "../../../../public/layersPages.png";
import JourneyPages from "../../../../public/journeyPages.png";
import LayersLove from "../../../../public/layersOfLove.png";
import QuizApp from "../../../../public/quizApp.png";
import ArtPages from "../../../../public/artPages.png";
import LayersMobile from "../../../../public/layersMobile.png";
import Journey from "../../../../public/journey.png";
import Art from "../../../../public/art.png";

const slider1 = [
    {
        color: "#e3e5e7",
        src: LayersPages,
    },
    {
        color: "#e3e3e3",
        src: JourneyPages,
    },
    {
        color: "#d6d7dc",
        src: LayersLove
    },
    {
        color: "#21242b",
        src: QuizApp
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: ArtPages
    },
    {
        color: "#e1dad6",
        src: LayersMobile
    },
    {
        color: "#e5e0e1",
        src: Journey
    },
    {
        color: "#d7d4cf",
        src: Art
    },
    
]

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"Thaovy Le"}
                                    src={project.src}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"Thaovy Le"}
                                    src={project.src}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}
