import React from "react";

interface NavbarListProps {
  isOpen: boolean;
}

const NavbarList: React.FC<NavbarListProps> = ({ isOpen }) => {
  return (
    <ul
      id="primary-navigation"
      className={`
        fixed top-0 right-0 h-[40vh] w-full max-w-xs
        bg-steelblue p-20 flex flex-col
        transform transition-transform duration-500 ease-in-out
        sm:relative sm:flex-row sm:h-auto sm:w-auto sm:p-0 sm:bg-transparent
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Your nav items here */}
      <li className="mb-4 sm:mb-0 sm:mr-6">
        <a href="#home" className="hover:underline">
          Home
        </a>
      </li>
      <li className="mb-4 sm:mb-0 sm:mr-6">
        <a href="#about" className="hover:underline">
          About
        </a>
      </li>
      <li className="mb-4 sm:mb-0 sm:mr-6">
        <a href="#services" className="hover:underline">
          Services
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavbarList;
