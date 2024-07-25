"use client";
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function AboutSection() {

    const phrase = "I recently graduated from the University of Central Florida with a major in Digital Media - Web Design and a minor in Computer Science. During my studies, I worked on diverse projects, creating websites and mobile applications from the ground up. One notable example is my senior project, Chef It!, a recipe and pantry app that my team and I developed through comprehensive research, design, prototyping, development, debugging, and deployment, detailed in the next section. Additionally, I gained valuable skills during my Summer 2023 internship with Destination Brides, where I worked as a Web Development Intern.";
    <p dangerouslySetInnerHTML={{ __html: phrase }}></p>
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <section id="about">
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
            <h1>A 
                B 
                O 
                U 
                T 
            </h1>
            <div className={styles.textRow}>
                <p className={styles.phrase}>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Currently seeking opportunities as a Web Developer</motion.p>
            </div>
            </div>
        </div>
        </section>
    )
}
