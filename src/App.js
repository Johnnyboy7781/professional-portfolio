import React, { useState } from 'react';

import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  const [currSection, setCurrSection] = useState(sections[0]);

  return (
    <div className="App">
      <Header 
        sections={sections} 
        currSection={currSection}
        setCurrSection={setCurrSection}
      />
      <main>
        {currSection === sections[0] && <About />}
        {currSection === sections[1] && <Portfolio />}
        {currSection === sections[2] && <Contact />}
        {currSection === sections[3] && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
