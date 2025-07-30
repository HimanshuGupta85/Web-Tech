/* eslint-disable no-unused-vars */
import "./App.css"; // Importing custom styles
import React from "react";
import About from "./components/About"; // Importing the About component
import Projects from "./components/Projects"; // Importing the Projects component
import Contact from "./components/Contact ";
import Footer from "./components/footer";
import Home from "./components/Home"; // Importing the Home component
import Project from "./components/project"; // Importing the Project component
import NavBar from "./components/navbar";

// Main App Component

function App() {
  return (
    <>
      <NavBar />

      <main className="pt-16">
        {/* Home Section */}
        <Home />

        {/* About Section */}
        <About />
        {/* Projects Section */}

        {/* <Project /> */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
