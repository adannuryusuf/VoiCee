import React from "react";
import { FaBullhorn } from "react-icons/fa";
// Import local CSS file for styling
import "./home.css";
// Bringing in the hero graphic from our assets directory
import heroImg from "../../assets/hero.png";

function Home() {
    // Array of key workflow steps so we can render them cleanly using array.map()
    const platformSteps = [
        {
            stepNumber: "01",
            title: "Submit Issue",
            description: "Fill in the complaint title, exact county location, and clear incident details."
        },
        {
            stepNumber: "02",
            title: "Smart Routing",
            description: "Our system assigns your grievance directly to the right county or ministry office."
        },
        {
            stepNumber: "03",
            title: "Track Progress",
            description: "Follow your complaint in real-time until public works teams resolve it."
        }
    ];

    return (
        <div className="voicee-container">
            
            {/* Top Navigation Bar: Matches the Submit Complaint screen exactly */}
            <header className="voicee-header">
                <div className="header-logo">
                    <div className="logo-icon">
                        <FaBullhorn />
                    </div>
                    <span>VoiCee</span>
                </div>

                <nav className="header-nav">
                    {/* Active class keeps the red underline on the Home tab */}
                    <a href="#home" className="active">Home</a>
                    <a href="#submit">Submit Complaint</a>
                    <a href="#analysis">Community Analysis</a>
                    <a href="#about">About</a>
                </nav>
            </header>

            {/* Main content wrapper keeps uniformside margins */}
            <main className="form-wrapper">
                
                {/* Visual breadcrumb trail */}
                <div className="breadcrumb">
                    Home &gt; Overview
                </div>

                {/* Main titles styled like the form heading */}
                <h1 className="form-main-title">
                    Empowering Citizen Voices for Better Governance
                </h1>

                <p className="form-subtitle">
                    Report public infrastructure and utility problems directly to responsible departments.
                </p>

                {/* Hero introduction card */}
                <div className="complaint-card home-hero-card">
                    <div className="hero-text-side">
                        <h2>See a problem in your neighborhood?</h2>
                        <p>
                            Whether it is a broken water pipe, damaged road, or street lighting issue,
                            VoiCee gives you a fast and open way to inform local authorities.
                        </p>
                        
                        <div className="hero-button-group">
                            <a href="#submit" className="submit-btn home-cta-link">
                                Report a Problem &gt;
                            </a>
                            <a href="#about" className="home-secondary-link">
                                How It Works
                            </a>
                        </div>
                    </div>

                    <div className="hero-image-side">
                        <img 
                            src={heroImg} 
                            alt="Citizens working for community development" 
                            className="home-banner-img"
                        />
                    </div>
                </div>

                {/* How It Works:*/}
                <div className="home-steps-grid">
                    {platformSteps.map((item, index) => (
                        <div key={index} className="complaint-card step-card">
                            <span className="step-badge">{item.stepNumber}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}

export default Home;