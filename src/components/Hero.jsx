import React from "react";
import heroBg from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Simplify Your Government Document Process
        </h1>
        <p className="text-gray-200 mb-6">
          Apply for PAN, Passport, License & more — all in one place, quickly
          and securely.
        </p>
        <a
          href="#services"
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
