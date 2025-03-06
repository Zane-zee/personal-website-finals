import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Goals from './pages/Goals';
import Experience from './pages/Experience';
import Gallery from './pages/Gallery';
import Feedback from './pages/Feedback';
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutMe />} />
        <Route path="education" element={<Education />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="goals" element={<Goals />} />
        <Route path="experience" element={<Experience />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App; 