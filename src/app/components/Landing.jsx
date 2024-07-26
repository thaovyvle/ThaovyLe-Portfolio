import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Landing = () => {
  // State to handle the delay
  const [delay, setDelay] = useState(0);

  // Use effect to update delay after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(1000); // Update delay to 1000ms (1 second) after initial render
    }, 3000); // Initial delay for demonstration

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-[#222442] mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "", // Start with an empty string
                delay, // Delay based on state
                "Thaovy Le",
                1000,
                "a Web Developer",
                1000,
                "an App Developer",
                1000,
                "a Full-Stack Developer",
                1000,
                "a UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={35}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl md:text-lg flex flex-wrap">
            Recent Graduate from the University of Central Florida || Web Design & Computer Science
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
