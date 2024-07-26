'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const words = [" Hello ", " Bonjour ", " Ciao ", " Olà ", " やあ ", " Hallå ", " Guten tag ", " Hallo ", " Hello "];

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight});
    }, []);

    useEffect(() => {
        if(index === words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2}
        }
    };

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 &&
            <>
                <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{words[index]} <span></span></motion.p>
                <svg width={dimension.width} height={dimension.height} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#primary-400', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#secondary-600', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <motion.path
                        x="10"
                        y="10"
                        rx="15"
                        ry="15"
                        variants={curve}
                        initial="initial"
                        exit="exit"
                        fill="url(#gradient1)"
                    />
                </svg>
            </>
            }
        </motion.div>
    );
}
