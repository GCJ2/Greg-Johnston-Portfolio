import React from 'react';
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Welcome from "./components/Welcome"
import TechUsed from "./components/TechUsed"
import Nav from "./components/Nav"
// import { Route, Link } from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">
        <Nav />
        <Welcome />
        <About />
        <Projects />
        <TechUsed />
        <Contact />
    </div>
  );
}

export default App;
