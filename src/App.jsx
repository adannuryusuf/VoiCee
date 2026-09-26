import { useState, useEffect } from 'react';
import './App.css';

// Page imports
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SubmitComplaint from './pages/Submit Complaint/SubmitComplaint';
import Suggestion from './pages/Suggestion/Suggestion';
import Confirmation from './pages/Confirmation/Confirmation';
import ComplaintDetails from './pages/Complaint Details/ComplaintDetails';
import Community from './pages/Community/Community';
import Analysis from './pages/Analysis/Analysis';

// Shared layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  /*
   * Reads the current URL hash to decide which page to display.
   */
  const getScreenFromHash = () => {
    const hash = window.location.hash.replace('#', '');

    if (hash === 'submit') return 'submit';
    if (hash === 'suggestion') return 'suggestion';
    if (hash === 'about') return 'about';
    if (hash === 'confirmation') return 'confirmation';
    if (hash === 'community') return 'community';
    if (hash === 'complaint-details') return 'complaint-details';
    if (hash === 'analysis') return 'analysis';

    return 'home';
  };

  // Stores the current page.
  const [currentScreen, setCurrentScreen] = useState(getScreenFromHash);

  /*
   * Stores the complaint information entered on the form.
   */
  const [complaintData, setComplaintData] = useState(null);

  /*
   * Stores the final complaint information after the citizen
   * confirms the department.
   */
  const [confirmData, setConfirmData] = useState(null);

  /*
   * Changes the URL hash to navigate between pages.
   */
  const navigate = (page) => {
    window.location.hash = page;
  };

  /*
   * Listen for changes to the URL hash.
   */
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentScreen(getScreenFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >

      {/* Shared Navbar */}
      <Navbar
        currentPage={currentScreen}
        navigate={navigate}
      />

      {/* Page content */}
      <main style={{ flex: 1 }}>

        {/* HOME */}
        {currentScreen === 'home' && (
          <Home navigate={navigate} />
        )}

        {/* ABOUT */}
        {currentScreen === 'about' && (
          <About navigate={navigate} />
        )}

        {/* SUBMIT COMPLAINT */}
        {currentScreen === 'submit' && (
          <SubmitComplaint
            onFormSubmit={(data) => {
              /*
               * Save the form data first.
               */
              setComplaintData(data);

              /*
               * If AI Suggest is ON, go to the AI Suggestion page.
               *
               * If AI Suggest is OFF, go directly to Confirmation.
               */
              if (data.aiSuggest) {
                window.location.hash = 'suggestion';
              } else {
                setConfirmData(data);
                window.location.hash = 'confirmation';
              }
            }}
          />
        )}

        {/* AI SUGGESTION */}
        {currentScreen === 'suggestion' && (
          <Suggestion
            data={complaintData}
            navigate={navigate}
            onConfirm={(finalData) => {
              /*
               * Save the finalised complaint.
               */
              setConfirmData(finalData);

              /*
               * Move to the Confirmation page.
               */
              window.location.hash = 'confirmation';
            }}
          />
        )}

        {/* CONFIRMATION */}
        {currentScreen === 'confirmation' && (
          <Confirmation
            data={confirmData || complaintData}
            navigate={navigate}
          />
        )}

        {/* COMMUNITY */}
        {currentScreen === 'community' && (
          <Community navigate={navigate} />
        )}

        {/* COMPLAINT DETAILS */}
        {currentScreen === 'complaint-details' && (
          <ComplaintDetails navigate={navigate} />
        )}

        {/* ANALYSIS */}
        {currentScreen === 'analysis' && (
          <Analysis navigate={navigate} />
        )}

      </main>

      {/* Shared Footer */}
      <Footer navigate={navigate} />

    </div>
  );
}

export default App;

