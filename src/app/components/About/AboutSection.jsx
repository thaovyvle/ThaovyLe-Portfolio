"use client";
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function AboutSection() {

    const phrase = "During my time at UCF, I worked in customer service as a Beverage Cart Attendant at Hawks Landing Golf Club and had a great experience working at Destination Brides as their Web Development Intern this past Summer. Throughout these roles, I have been able to gain leadership skills, satisfy customer needs, time management, team collaboration, and attention to detail.";
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
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Eager to gain more work experience in Development and actively looking for new opportunities.</motion.p>
            </div>
            </div>
        </div>
        </section>
    )
}
