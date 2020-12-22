import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Links from "./components/Links/Links";
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <main>
      <Header />
      <Links />
      <div className="line"></div>
      <Projects />
    </main>
  );
}

export default App;