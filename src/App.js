import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ScrollDownArrow from './components/ScrollDownArrow/ScrollDownArrow';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <main>
      <Header />
      <ScrollDownArrow />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;