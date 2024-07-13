// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Abdelrahman Omar</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex space-x-4 ${
            isOpen ? "block flex flex-col items-left justify-center" : "hidden"
          }`}
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className={
              "hover:text-yellow-400 cursor-pointer" +
              (active == "hero"
                ? "hover:text-yellow-400 cursor-pointer text-yellow-400"
                : "hover:text-yellow-400 cursor-pointer")
            }
            onClick={() => setActive("hero")}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={
              "hover:text-yellow-400 cursor-pointer" +
              (active == "about"
                ? "hover:text-yellow-400 cursor-pointer text-yellow-400"
                : "hover:text-yellow-400 cursor-pointer")
            }
            onClick={() => setActive("about")}
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className={
              "hover:text-yellow-400 cursor-pointer" +
              (active == "exper"
                ? "hover:text-yellow-400 cursor-pointer text-yellow-400"
                : "hover:text-yellow-400 cursor-pointer")
            }
            onClick={() => setActive("exper")}
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={
              "hover:text-yellow-400 cursor-pointer" +
              (active == "proj"
                ? "hover:text-yellow-400 cursor-pointer text-yellow-400"
                : "hover:text-yellow-400 cursor-pointer")
            }
            onClick={() => setActive("proj")}
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={
              "hover:text-yellow-400 cursor-pointer" +
              (active == "skills"
                ? "hover:text-yellow-400 cursor-pointer text-yellow-400"
                : "hover:text-yellow-400 cursor-pointer")
            }
            onClick={() => setActive("skills")}
          >
            Skills
          </Link>
          <Link
            to="certificates"
            smooth={true}
            duration={500}
            className={
              "hover:text-yellow-400 cursor-pointer" +
              (active == "cert"
                ? "hover:text-yellow-400 cursor-pointer text-yellow-400"
                : "hover:text-yellow-400 cursor-pointer")
            }
            onClick={() => setActive("cert")}
          >
            Certificates
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className={
              "hover:text-yellow-400 cursor-pointer" +
              (active == "edu"
                ? "hover:text-yellow-400 cursor-pointer text-yellow-400"
                : "hover:text-yellow-400 cursor-pointer")
            }
            onClick={() => setActive("edu")}
          >
            Education
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={
              "hover:text-yellow-400 cursor-pointer" +
              (active == "cont"
                ? "hover:text-yellow-400 cursor-pointer text-yellow-400"
                : "hover:text-yellow-400 cursor-pointer")
            }
            onClick={() => setActive("cont")}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
