import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Index from './components/index.js';
import About from './components/about.js';
import Contact from './components/contactForm';
import Projects from './components/projects.js';
import Test from './components/test';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
