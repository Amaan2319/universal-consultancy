import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        Our Services
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {Object.values(services).map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
