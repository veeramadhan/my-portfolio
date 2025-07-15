"use client";

import { useSelector } from "react-redux";
import translations from "../lib/translations";
import LanguageToggle from "../ui/LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";
import Image from "next/image";
import veera from "../../../public/images/veera.jpg";
import CrystalChainBackGround from "../ui/CrystalChainBackground";

export default function Hero() {
  const language = useSelector((state) => state.language.language) || "en";
  const t = translations[language] || translations["en"];

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-[#0f051d] to-black text-white gap-10 py-20">
      <CrystalChainBackGround />
      {/* Left: Profile Image */}
      <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-purple-700 shadow-xl z-10">
        <Image
          src={veera}
          alt="Veeramanikandan"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="max-w-2xl text-center md:text-left space-y-4 z-10">
        <h2 className="text-xl md:text-4xl font-light text-gray-300">
          Hi, I’m{" "}
          <span className="text-white font-semibold">Veeramanikandan</span>.
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          A Front-End Developer
          <br /> based in India
        </h1>

        <p className="text-gray-400 text-sm md:text-base pt-2">
          I design and code beautifully simple websites and web apps using React
          and Next.js. Clean, fast, and user-focused — just how I love it!
        </p>

        {/* Buttons */}
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 rounded-md shadow-md transition text-white font-semibold">
          {t.download}
        </button>

    


        {/* <div className="mt-6 flex justify-center md:justify-start gap-4">
          <ThemeToggle />
          <LanguageToggle />
        </div> */}
      </div>
    </section>
  );
}
