import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Navbar setActiveSection={setActiveSection} />
      {activeSection === 'home' && <Hero />}
      {activeSection === 'about' && <About />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'experience' && <Experience />}
      {activeSection === 'contact' && <Contact />}
    </>
  );
}
export default App;