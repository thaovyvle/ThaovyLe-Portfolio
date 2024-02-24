import Landing from "./components/Landing";
import ParallaxScroll from "./components/ParallaxScroll";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SlidingImages from './components/SlidingImages';
import Contact from './components/Contact';
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isSmallScreen = useMediaQuery({ maxWidth: 400 })

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
        <ProjectsSection />
      </div>
      {!isSmallScreen && <SlidingImages />}
      <Contact />
    </main>
  );
}
