import React from "react";

const ServiceCard = ({ title, image, items }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex justify-between text-gray-700">
              <span>{item.name}</span>
              <span className="font-medium text-blue-600">₹{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
  