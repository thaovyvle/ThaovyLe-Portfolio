"use client";
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Landing from "./components/Landing";
import ParallaxScroll from "./components/ParallaxScroll";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SlidingImages from './components/SlidingImages';
import Contact from './components/Contact';
import RecentWork from './components/RecentWork';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
 
  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
    <div className="flex min-h-screen flex-col bg-[white]">
      <Navbar />
      <div className="container mt-20 mx-auto px-10">
        <Landing />
      </div>
      <div className="pt-10 px-0 w-full">
        <ParallaxScroll />
      </div>
      <div className="container mt-10 mx-auto px-10">
        <AboutSection />
        <RecentWork />
        <ProjectsSection />
      </div>
      <SlidingImages />
      <Contact />
      </div>
    </main>
  );
}
