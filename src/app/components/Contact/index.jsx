"use client";
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import GithubIcon from "../../../../public/github-icon.svg";
import LinkedinIcon from "../../../../public/linkedin-icon.svg";
import GmailIcon from "../../../../public/gmail-icon.svg";
import FacebookIcon from "../../../../public/facebook-icon.svg";
import Link from "next/link";
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import ImageofMe from "../../../../public/me.png";

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-300, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <section id="contact">
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"Thaovy Le"}
                            src={ImageofMe}
                            />
                        </div>
                        <h2>Let's Connect</h2>
                    </span>
                    <div className="socials flex flex-row gap-5 mx-auto my-auto w-fit">
                    <Link href="https://github.com/thaovyvle" rel="noopener noreferrer" target="_blank">
                        <Image src={GithubIcon} alt="Thaovy Le - Github Icon" />
                    </Link>
                    <Link href="https://mailto:thaovyvivian@gmail.com" rel="noopener noreferrer" target="_blank">
                        <Image src={GmailIcon} alt="Thaovy Le - Gmail Icon" />
                    </Link>
                    <Link href="https://www.facebook.com/thaovy.le.9085" rel="noopener noreferrer" target="_blank">
                        <Image src={FacebookIcon} alt="Thaovy Le - Facebook Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/thaovyvivanle/" rel="noopener noreferrer" target="_blank">
                        <Image src={LinkedinIcon} alt="Thaovy Le - Linkedin Icon" />
                    </Link>
                </div>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <p>thaovyvivian@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>(603)-682-2406</p>
                        </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <p>THAOVY LE</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <p>2024 © Edition</p>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
        </section>
    )
}
