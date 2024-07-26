"use client";
import React, { useState, useRef } from "react";
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import ChefItIcon from "../../../public/chefIt.png";
import { CldVideoPlayer } from 'next-cloudinary';

const RecentWork = () => {

    return (
        <section id="recentWork">
            <h1 className="text-center text-4xl lg:text-5xl md:text-5xl font-semibold tracking-[0.2em] mb-4 md:mb-12 mt-[2.5em] bg-gradient-to-r from-primary-400 to-secondary-600 text-transparent bg-clip-text">
                RECENT WORK
            </h1>
            <div className="flex items-center space-x-2 flex-col lg:flex-row lg:items-start" >
                <Image src={ChefItIcon} alt="Thaovy Le - Chef It Icon" width={130} height={130} className="mr-[10px] mb-[15px]" />
                <div className="flex flex-col items-center ml-4 lg:items-start lg:mb-0 text-center lg:text-left" >
                <h2 className = "text-xl font-bold text-[#564f57] px-8 mb-4">
                    Chef It! - Recipe & Pantry App
                </h2>
                <p className="text-[#564f57] text-base sm:text-sm px-8 mb-6 lg:text-lg md:text-base flex flex-wrap">
                    Senior capstone project developing the full project lifestyle of a mobile app. Chef It transforms the cooking experience with innovative and gamified features. I played a key role in every aspect of the project, from initial research to back-end development.
                </p>
                </div>
            </div>
            <CldVideoPlayer
    id="sea-turtle-color"
    width="1920"
    height="1080"
    src="samples/sea-turtle"
/>
        </section>
    );
}

export default RecentWork;