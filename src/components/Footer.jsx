import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <div className="flex justify-center gap-6 text-xl">
          <a href="#" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Universal Consultants. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
