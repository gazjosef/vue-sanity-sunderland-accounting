import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavbarMobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const NavbarMobileNavToggle: React.FC<NavbarMobileNavToggleProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
      aria-controls="primary-navigation"
      onClick={onClick}
      className="sm:hidden cursor-pointer w-8 aspect-square text-3xl z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      type="button"
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  );
};

export default NavbarMobileNavToggle;
