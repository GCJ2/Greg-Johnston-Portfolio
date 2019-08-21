import React from 'react';
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Welcome from "./components/Welcome"

import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
