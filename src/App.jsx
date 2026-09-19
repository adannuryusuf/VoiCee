import { useState, useEffect } from 'react'
import './App.css'

// Existing complaint component from your teammate
import SubmitComplaint from "./pages/Submit Complaint/SubmitComplaint";

// Your Home and About components
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  // Helper function: reads the current URL hash (#home, #submit, #about)
  const getScreenFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'submit') return 'submit';
    if (hash === 'about') return 'about';
    return 'home'; // Defaults to Home screen
  };

  // State tracks which screen to display
  const [currentScreen, setCurrentScreen] = useState(getScreenFromHash);

  // Listen to hash changes whenever a top nav link is clicked
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentScreen(getScreenFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    // Cleanup the listener when component unmounts
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {/* Declarative view rendering based on the active top-bar link */}
      {currentScreen === 'home' && <Home />}
      {currentScreen === 'submit' && <SubmitComplaint />}
      {currentScreen === 'about' && <About />}
    </>
  );
}

export default App;