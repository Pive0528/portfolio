import './scss/style.scss';

import React from "react";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (
      <div className="App">
        <Navigation />
        <main>
          <div className="container">
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;
