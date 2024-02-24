"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

import P1 from "../../../public/p1.png";
import P2 from "../../../public/p2.png";
import P3 from "../../../public/p3.png";
import P4 from "../../../public/p4.png";
import P5 from "../../../public/p5.png";
import P6 from "../../../public/p6.png";
import P7 from "../../../public/p7.png";
import P8 from "../../../public/p8.png";
import P9 from "../../../public/p9.png";
import P10 from "../../../public/p10.png";
import P11 from "../../../public/p11.png";
import P12 from "../../../public/p12.png";
import P13 from "../../../public/p13.png";
import P14 from "../../../public/p14.png";
import P15 from "../../../public/p15.png";
import P16 from "../../../public/p16.png";


const projectsData = [
  {
    id: 1,
    title: "Quiz App",
    description: "React Native application. To view the app, you can log in with these credentials: username-test, password-Test1@",
    image: P1,
    tag: ["ALL", "MOBILE"],
    gitUrl: "https://github.com/thaovyvle/quizApp",
    previewUrl: "https://thaovyvle.github.io/quizApp/",
  },
  {
    id: 2,
    title: "Layers of Love",
    description: "Responsive single-page website that demonstrates a form of creativity. Developed with HTML, CSS, and JavaScript",
    image: P2,
    tag: ["ALL", "WEB"],
    gitUrl: "https://github.com/thaovyvle/layersOfLove",
    previewUrl: "https://thaovyvle.github.io/layersOfLove/",
  },
  {
    id: 3,
    title: "Journey Through UCF",
    description: "Responsive single-page website that describes my journey at UCF. Developed with HTML, SASS, and JavaScript",
    image: P3,
    tag: ["ALL", "WEB"],
    gitUrl: "https://github.com/thaovyvle/journeyThroughUCF",
    previewUrl: "https://thaovyvle.github.io/journeyThroughUCF/",
  },
  {
    id: 4,
    title: "Art Deco",
    description: "Single-page website that describes the Art Deco movement. Developed with HTML and CSS",
    image: P4,
    tag: ["ALL", "WEB"],
    gitUrl: "https://github.com/thaovyvle/artDeco",
    previewUrl: "https://thaovyvle.github.io/artDeco/",
  },
  {
    id: 5,
    title: "Exercise App",
    description: "React application that is a simple exercise tracker. Contains menu with a repetition and duration types",
    image: P5,
    tag: ["ALL", "MOBILE"],
    gitUrl: "https://github.com/thaovyvle/exerciseApp",
    previewUrl: "https://thaovyvle.github.io/exerciseApp/",
  },
  {
    id: 6,
    title: "Survey",
    description: "A survey form that offers up hints, uses a variety of input types, and performs validation before delivering the results",
    image: P6,
    tag: ["ALL", "WEB"],
    gitUrl: "https://github.com/thaovyvle/survey",
    previewUrl: "https://thaovyvle.github.io/survey/",
  },
  {
    id: 7,
    title: "Yahoo Redesign - Web Prototype",
    description: "A website redesign for usability and accessibility: light mode switch & accesibility button. Designed with Adobe XD",
    image: P7,
    tag: ["ALL", "DESIGN"],
    gitUrl: "https://drive.google.com/file/d/15j9YRFQ0UOfZAE3BxYZyHtANqSHeVCmz/view?usp=sharing",
    previewUrl: "https://xd.adobe.com/view/bf5744d5-1229-43bc-aa70-60a0afd028a6-ea04/?fullscreen",
  },
  {
    id: 8,
    title: "TravelME - App Prototype",
    description: "A UX/UI project that includes developing a high fidelity prototype with Adobe XD, and a full report of the design process",
    image: P8,
    tag: ["ALL", "DESIGN"],
    gitUrl: "https://drive.google.com/file/d/1ia_PLP76KhandgUTTv4h6URINKOTrKpD/view?usp=sharing",
    previewUrl: "https://xd.adobe.com/view/1baf8575-04b5-4169-9878-bc04b0a13b80-4efc/screen/fa639dbe-0750-43e7-9945-e0df9318aa43",
  },
  {
    id: 9,
    title: "Bakery Database - MongoDB",
    description: "A bakery database comprising entities of the store, baker, and dessert. Postman is used to show the queries and operations",
    image: P11,
    tag: ["ALL", "DATABASE"],
    gitUrl: "https://github.com/thaovyvle/BakeryDB/",
    previewUrl: "https://www.canva.com/design/DAF9dWHguW4/g9ro-AWFHKpn6w9Ks8W9pg/edit?utm_content=DAF9dWHguW4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 10,
    title: "Crumbl Redesign - App Design",
    description: "Tasked with creating an alternative design for the Crumbl app with at least three states and controls. Designed with Adobe XD",
    image: P9,
    tag: ["ALL", "DESIGN"],
    gitUrl: "https://drive.google.com/file/d/1y31Pf2uFB-qZwnD9HEFiUp7sWK3pC5HM/view?usp=sharing",
    previewUrl: "https://xd.adobe.com/view/85cb937a-85eb-4f33-b1ca-2ed932ee7ef5-d098/",
  },
  {
    id: 11,
    title: "Blog Database - MySQL",
    description: "Created a blog database with MySQL. Postman is used to demonstrate the queries and operations",
    image: P10,
    tag: ["ALL", "DATABASE"],
    gitUrl: "https://github.com/thaovyvle/Blog-Database/",
    previewUrl: "https://www.canva.com/design/DAF9dCSKkvQ/r-ERvXTcO8pXnf8DB8SxvA/edit?utm_content=DAF9dCSKkvQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 12,
    title: "Chessland Attacks - C",
    description: "Recreated a chessboard, considering the positions of rooks. Determines how many and which rooks can attack each piece",
    image: P12,
    tag: ["ALL", "C.S"],
    gitUrl: "https://github.com/thaovyvle/Chessland-Attacks/blob/main/README.md",
    previewUrl: "https://github.com/thaovyvle/Chessland-Attacks/blob/main/main.c",
  },
  {
    id: 13,
    title: "Coin Organization - C",
    description: "The program sorts the list of individuals based on the money they each have and the ratio of currency",
    image: P13,
    tag: ["ALL", "C.S"],
    gitUrl: "https://github.com/thaovyvle/Coin-Organization/blob/main/README.md",
    previewUrl: "https://github.com/thaovyvle/Coin-Organization/blob/main/main.c",
  },
  {
    id: 14,
    title: "Arcade Management - C",
    description: "Given a list of people entering and leaving the arcade, determine the most valuable player",
    image: P14,
    tag: ["ALL", "C.S"],
    gitUrl: "https://github.com/thaovyvle/Arcade-Management/blob/main/README.md",
    previewUrl: "https://github.com/thaovyvle/Arcade-Management/blob/main/main.c",
  },
  {
    id: 15,
    title: "Sudoku Solver - Java",
    description: "Given a sudoku unsolved grid, output the solved puzzle. Uses backtracking function to solve",
    image: P15,
    tag: ["ALL", "C.S"],
    gitUrl: "https://github.com/thaovyvle/Sudoku-Solver/blob/main/README.md",
    previewUrl: "https://github.com/thaovyvle/Sudoku-Solver/blob/main/sudokuSolver.java",
  },
  {
    id: 16,
    title: "Hexagram - Java",
    description: "Determine the amount of ways to place numbers on the vertices of a hexagram such that the sum each line is the same",
    image: P16,
    tag: ["ALL", "C.S"],
    gitUrl: "https://github.com/thaovyvle/Hexagram/blob/main/README.md",
    previewUrl: "https://github.com/thaovyvle/Hexagram/blob/main/hexagram.java",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("ALL");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isDesktop = useMediaQuery({ minWidth: 820 });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center md:text-5xl sm:text-[2em] font-semibold tracking-[0.2em] mb-8 md:mb-12 mt-[2.5em] bg-gradient-to-r from-primary-400 to-secondary-600 text-transparent bg-clip-text">
        PROJECTS
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-5 py-5 mb-10">
      <div className="flex flex-wrap justify-center md:flex-row gap-5">
        <ProjectTag
          onClick={handleTagChange}
          name="ALL"
          isSelected={tag === "ALL"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="WEB"
          isSelected={tag === "WEB"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MOBILE"
          isSelected={tag === "MOBILE"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DESIGN"
          isSelected={tag === "DESIGN"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DATABASE"
          isSelected={tag === "DATABASE"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="C.S"
          isSelected={tag === "C.S"}
        />
      </div>
      </div>
      <ul ref={ref} className="grid gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image.src}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
