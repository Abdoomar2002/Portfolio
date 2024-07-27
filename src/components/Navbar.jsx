// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      url: "hero",
      active: "hero",
    },
    {
      id: 2,
      name: "About",
      url: "about",
      active: "about",
    },
    {
      id: 3,
      name: "Experience",
      url: "experience",
      active: "exper",
    },
    {
      id: 4,
      name: "Projects",
      url: "projects",
      active: "proj",
    },
    {
      id: 5,
      name: "Skills",
      url: "skills",
      active: "skill",
    },
    {
      id: 6,
      name: "Certificates",
      url: "certificates",
      active: "cert",
    },
    {
      id: 7,
      name: "Education",
      url: "education",
      active: "edu",
    },
    {
      id: 8,
      name: "Contact",
      url: "contact",
      active: "cont",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const handleScroll = () => {
    navItems.forEach((item) => {
      const section = document.getElementById(item.url);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActive(item.active);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
          {navItems.map((e) => (
            <Link
              key={e.id}
              to={e.url}
              smooth={true}
              duration={500}
              className={
                "hover:text-yellow-400 cursor-pointer" +
                (active == e.active
                  ? "hover:text-yellow-400 cursor-pointer text-yellow-400"
                  : "hover:text-yellow-400 cursor-pointer")
              }
              onClick={() => setActive(e.active)}
            >
              {e.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
