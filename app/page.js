import Hero from "../app/components/sections/Hero";
import Header from "./components/layout/Header";
import Contact from "./components/sections/Contact";
import Resume from "./components/sections/Resume";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services/>
      <Resume/>
      <Skills/>
      <Contact/>
      <Work/> 
    </>
  );
}
