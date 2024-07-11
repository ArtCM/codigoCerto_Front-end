"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const Accordion = ({ key, title, description, active }) => {
  const [isOpen, setIsOpen] = useState(active);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full" key={key}>
      <div
        className="py-5 bg-primary text-terciary relative cursor-pointer"
        onClick={handleToggle}
      >
        <h3 className="text-center text-lg font-bold px-12">{title} </h3>
        <span className="absolute top-[22px] right-5 text-2xl font-bold">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </div>
      <div
        className={`overflow-hidden duration-500 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="text-lg font-bold py-4 px-5 border">{description}</p>
      </div>
    </div>
  );
};
