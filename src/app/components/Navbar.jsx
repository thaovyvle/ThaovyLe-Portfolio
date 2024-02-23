"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "ABOUT",
    path: "#about",
  },
  {
    title: "PROJECTS",
    path: "#projects",
  },
  {
    title: "CONTACT",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed mx-auto border-b border-t-0 border-[#adadad] top-0 left-0 right-0 z-10 bg-[white] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary-400 to-secondary-600 text-transparent bg-clip-text"
        >
        THAOVY LE
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-[black] text-[black] hover:text-[#ff3888] hover:border-[#ff3888]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-[black] text-[black] hover:text-[#ff3888] hover:border-[#ff3888]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-black">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  className="block py-2 pl-3 pr-4 text-[#807e7e] sm:text-l tracking-[0.18em] rounded md:p-0 hover:text-[#ff3888]"
                  onClick={() => scrollToSection(link.path.slice(1))}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
