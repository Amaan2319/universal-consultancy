import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-white">
            <Facebook />
          </a>
          <a href="#" className="hover:text-white">
            <Instagram />
          </a>
          <a href="#" className="hover:text-white">
            <Twitter />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Universal Consultants. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
