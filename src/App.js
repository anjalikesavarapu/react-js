import React from 'react';
import Info from './components/Info.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Interests from './components/Interests.js';
import './style.css';

export default function App() {
  return (
    <div>
      <Info />
      <About />
      <Interests />

      <Footer />
    </div>
  );
}
