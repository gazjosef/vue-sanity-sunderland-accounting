"use client";
import React from "react";
import { FaFacebook, FaGooglePlusG, FaLinkedin, FaPhone } from "react-icons/fa";

const Topbar: React.FC = () => {
  return (
    <nav className="bg-black text-white py-1.5">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a
          href="tel:0296449220"
          className="flex items-center gap-2 text-sm no-underline hover:underline"
        >
          <FaPhone aria-hidden="true" />
          <span>02 9644 9220</span>
        </a>
        <div className="flex items-center gap-4 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://plus.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Plus"
            className="hover:text-red-500 transition-colors"
          >
            <FaGooglePlusG />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
