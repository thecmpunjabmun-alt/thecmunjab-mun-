'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Intentionally disabled sessionStorage check so you can always see it during development!
    // const hasLoaded = sessionStorage.getItem('munHomeLoaded');
    // if (hasLoaded) {
    //   setLoading(false);
    //   return;
    // }

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 2500); // Show for 2.5 seconds

    const removeTimer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('munHomeLoaded', 'true');
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader-overlay ${fading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        
        {/* Logo */}
        <div className="logo-container">
          <img src="/logo-Photoroom.png" alt="CM Punjab MUN Initiative" className="pulse-logo" />
        </div>
        
      </div>
    </div>
  );
}
