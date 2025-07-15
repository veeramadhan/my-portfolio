'use client';
import React from 'react';
import { FaGraduationCap, FaCar } from 'react-icons/fa';

const educationData = [
  {
    year: '2016 – 2020',
    title: 'B.E EEE',
    place: 'Tirchy, Tamilnadu',
  },
  {
    year: '2019',
    title: 'JLPT N5 - Basic Level',
    place: 'Issued by The Japan Foundation',
  },
  {
    year: '2022',
    title: 'Azure Fundamentals - AZ-900',
    place: 'Microsoft Certified',
  },
  {
    year: '2023',
    title: 'JLPT N4 - Elementary Level',
    place: 'Issued by The Japan Foundation',
  },
];

const workData = [
  {
    year: '2021 – 2023',
    title: 'Associate Software developer',
    place: 'Tech Mahindra',
  },
  {
    year: '2023 – 2024',
    title: 'Junior Software developer',
    place: 'Apple holidays destinations Services',
  },
  {
    year: '2024 – 2025',
    title: 'Software developer',
    place: 'BilliMD',
  },
,
];

const Resume = () => {
  return (
    <section id="resume" className="w-full bg-black text-white py-12 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Resume
        </h1>
      </div>

      {/* Education */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 md:px-8">
  {/* Education */}
  <div>
    <h2 className="text-2xl font-bold mb-6">Education</h2>
    <div className="relative border-l-[3px] border-purple-500 ml-4">
      {educationData.map((item, index) => (
        <div key={index} className="relative pl-10 mb-10">
          {/* Icon aligned to line */}
          <div className="absolute left-[-20px] top-1 w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center">
            <FaGraduationCap className="text-white text-base" />
          </div>
          {/* Text aligned cleanly */}
          <h3 className="text-purple-400 font-semibold">{item.year}</h3>
          <p className="text-lg font-bold">{item.title}</p>
          <p className="text-gray-400">{item.place}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Work Experience */}
  <div>
    <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
    <div className="relative border-l-[3px] border-pink-500 ml-4">
      {workData.map((item, index) => (
        <div key={index} className="relative pl-10 mb-10">
          {/* Icon aligned to line */}
          <div className="absolute left-[-20px] top-1 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
            <FaCar className="text-white text-base" />
          </div>
          {/* Text aligned cleanly */}
          <h3 className="text-pink-400 font-semibold">{item.year}</h3>
          <p className="text-lg font-bold">{item.title}</p>
          <p className="text-gray-400">{item.place}</p>
        </div>
      ))}
    </div>
  </div>
</div>


    </section>
  );
};

export default Resume;
