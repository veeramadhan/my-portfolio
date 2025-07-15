"use client";

import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { to: "services", label: "Services" },

    { to: "resume", label: "Resume" },
    { to: "skills", label: "Skills" },
    { to: "work", label: "Work" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0  left-0 w-full bg-black bg-opacity-80 text-white z-50 shadow-md">
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-5">
          {/* Left - Logo */}
          <div className="text-4xl font-bold">Portfolio</div>
          {/* Center - Nav Links */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-yellow-300 transition text-xl "
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Right - Icons */}
          <div className="hidden md:flex space-x-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/veeramanikandan-l-7164b5144/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
            <a href="mailto:apkveeraa@gmail.com">
              <HiOutlineMail className="hover:text-red-400 transition" />
            </a>
            <a
              href="https://github.com/veeramadhan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-400 transition" />
            </a>
          </div>{" "}
          <div className="hidden md:flex space-x-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/veeramanikandan-l-7164b5144/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
            <a href="mailto:apkveeraa@gmail.com">
              <HiOutlineMail className="hover:text-red-400 transition" />
            </a>
            <a
              href="https://github.com/veeramadhan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-400 transition" />
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden z-50" onClick={() => setNavOpen(!navOpen)}>
            <div className="w-6 h-1 bg-white my-1"></div>
            <div className="w-6 h-1 bg-white my-1"></div>
            <div className="w-6 h-1 bg-white my-1"></div>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {navOpen && (
        <div className="md:hidden bg-black bg-opacity-95 text-center py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setNavOpen(false)}
              className="block text-lg font-medium hover:text-yellow-300 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex justify-center mt-4 space-x-4 text-2xl">
            <a href="https://www.linkedin.com/in/veeramanikandan-l-7164b5144/" target="_blank">
              <FaLinkedin />
            </a>
            <a  href="mailto:apkveeraa@gmail.com">
              <HiOutlineMail />
            </a>
            <a href="https://github.com/veeramadhan" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
