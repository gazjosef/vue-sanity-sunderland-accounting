import React, { useState } from "react";
import NavbarList from "./NavbarList";
import NavbarMobileNavToggle from "./NavbarMobileNavToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav
      className="relative flex items-center text-lg"
      aria-label="Primary navigation"
    >
      {/* Pass toggle state to NavbarList to control mobile menu visibility */}
      <NavbarList isOpen={isOpen} />

      {/* Mobile nav toggle button */}
      <NavbarMobileNavToggle isOpen={isOpen} onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
