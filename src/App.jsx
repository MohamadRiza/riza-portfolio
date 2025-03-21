import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Summary from "./pages/Summery";
import TechStacks from "./pages/TechStacks";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-black text-white">
        <Summary/>
        <TechStacks/>
        <Projects/>
        <section id="education" className="p-8">
          <h2 className="text-2xl font-bold">Education</h2>
          <p>This is the education section.</p>
        </section>
        <section id="skills" className="p-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <p>This is the skills section.</p>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;