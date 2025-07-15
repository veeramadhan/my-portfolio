import React from "react";
import Marquee from "../ui/Marquee";
import { FaCode, FaPaintBrush, FaPenNib, FaBullhorn } from 'react-icons/fa';


const services = [
  {
    title: "Web Development",
    icon: <FaCode size={30} className="text-purple-400" />,
    desc: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing..."
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush size={30} className="text-purple-400" />,
    desc: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing..."
  },
  {
    title: "Content Writing",
    icon: <FaPenNib size={30} className="text-purple-400" />,
    desc: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing..."
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn size={30} className="text-purple-400" />,
    desc: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing..."
  }
];

const Services = () => {

  
  return (
<section id="services" className="w-full py-20 overflow-hidden relative">
      <Marquee />
      <div className="text-center mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Services
        </h1>
    
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-6 sm:px-10 md:px-20 ">
      {services.map((service, index) => (
        <div
          key={index}
          className="border border-purple-400 rounded-xl p-6 flex flex-col gap-4  hover:shadow-lg transition-shadow duration-300"
        >
          <div>{service.icon}</div>
          <h2 className="text-white text-2xl font-semibold">{service.title}</h2>
          <p className="text-white text-xl">{service.desc}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Services;
