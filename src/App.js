import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import Home from './pages/Home';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Contact from './pages/Contact';
import Header from './components/Header';
import About from './pages/About';
import './App.css';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
