"use client";
import Landing from "./components/Landing";
import ParallaxScroll from "./components/ParallaxScroll";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SlidingImages from './components/SlidingImages';
import Contact from './components/Contact';
import RecentWork from './components/RecentWork';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[white]">
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
    </main>
  );
}
