// src/components/Navbar.js
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-slate-950  00 text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Abdelrahman Omar</div>
        <div className="space-x-4">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="certificates"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Certificates
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
