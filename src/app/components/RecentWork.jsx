"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import ChefItIcon from "../../../public/chefIt.png";
import ReactPlayer from 'react-player';

const RecentWork = () => {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsPlaying(true);
                } else {
                    setIsPlaying(false);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
        
        if (playerRef.current) {
            observer.observe(playerRef.current.wrapper);
        }

        return () => {
            if (playerRef.current) {
                observer.unobserve(playerRef.current.wrapper);
            }
        };
    }, []);

    return (
        <section id="recentWork" className="flex flex-col items-center">
            <h1 className="text-center text-4xl lg:text-5xl md:text-5xl font-semibold tracking-[0.2em] mb-2 mt-[2.5em] bg-gradient-to-r from-primary-400 to-secondary-600 text-transparent bg-clip-text">
                RECENT WORK
            </h1>
            <div className="flex items-center space-x-2 flex-col lg:flex-row lg:items-start">
                <Image src={ChefItIcon} alt="Thaovy Le - Chef It Icon" width={130} height={130} className="mr-[10px] mb-[15px]" />
                <div className="flex flex-col items-center ml-4 lg:items-start lg:mb-0 text-center lg:text-left">
                    <h2 className="text-xl font-bold text-[#564f57] px-8 mb-4">
                        Chef It! - Recipe & Pantry App
                    </h2>
                    <p className="text-[#564f57] text-base sm:text-sm px-8 mb-6 lg:text-lg md:text-base flex flex-wrap">
                        Senior capstone project developing the full project lifestyle of a mobile app. Chef It transforms the cooking experience with innovative and gamified features. I played a key role in every aspect of the project, from initial research to back-end development.
                    </p>
                </div>
            </div>
            <div id="videoWrapper" className="flex items-center justify-center mx-auto mt-10 mb-2 relative w-full mt-5 lg:w-[800px] lg:h-[600px] md:w-[640px] md:h-[480px] sm:w-[400px] sm:h-[300px]">
                <ReactPlayer
                    ref={playerRef}
                    url='https://vimeo.com/990792000?share=copy'
                    className="rounded-lg shadow-lg overflow-hidden"
                    width="100%"
                    height="100%"
                    controls={false}
                    playing={isPlaying}
                    muted={true}
                    loop={true}
                />
            </div>
        </section>
    );
};

export default RecentWork;
