import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Summary from "./pages/Summery";
import TechStacks from "./pages/TechStacks";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import SoftSkills from "./pages/SoftSkills";

function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-black text-white">
        <Summary/>
        <TechStacks/>
        <Projects/>
        <Education/>
        <SoftSkills/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;