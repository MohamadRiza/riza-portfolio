import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Summary from "./pages/Summery";
import TechStacks from "./pages/TechStacks";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import SoftSkills from "./pages/SoftSkills";
import HeroSection from "./pages/HeroSection";
import Experience from "./pages/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-black text-white">
        <HeroSection/>
        <Summary/>
        <TechStacks/>
        <Projects/>
        <Education/>
        <Experience/>
        <SoftSkills/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;