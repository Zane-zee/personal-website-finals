import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundVideo from '../assets/images/zanebackground.mp4';

function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Ensure video loads properly
  useEffect(() => {
    console.log("Video path:", backgroundVideo); // Debug the video path
    const video = document.getElementById('background-video');
    if (video) {
      console.log("Video element found, attempting to play");
      video.play().catch(error => {
        console.error("Video play failed:", error);
      });
    } else {
      console.error("Video element not found");
    }
  }, []);

  return (
    <div className="app-wrapper">
      <div className="video-background">
        <video autoPlay muted loop playsInline id="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Navbar />
      <main className="app-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout; 