import React from "react";
import { FaBullhorn } from "react-icons/fa";
// Import local CSS file for styling
import "./about.css";

function About() {
    // Department contact listings displayed in the side panel
    const contactDirectory = [
        { label: "Help Desk", value: "+254 700 123 456" },
        { label: "Email Support", value: "complaints@voicee.go.ke" },
        { label: "Regional Coverage", value: "        All 47 County Governments" },
        { label: "Operating Hours", value: "24/7" }
    ];

    return (
        <div className="voicee-container">
            
            {/* Top Navigation Bar */}
            <header className="voicee-header">
                <div className="header-logo">
                    <div className="logo-icon">
                        <FaBullhorn />
                    </div>
                    <span>VoiCee</span>
                </div>

                <nav className="header-nav">
                    <a href="#home">Home</a>
                    <a href="#submit">Submit Complaint</a>
                    <a href="#analysis">Community Analysis</a>
                    {/* Active class keeps the red underline on About */}
                    <a href="#about" className="active">About</a>
                </nav>
            </header>

            {/* Main content wrapper */}
            <main className="form-wrapper">
                
                <div className="breadcrumb">
                    Home &gt; About VoiCee
                </div>

                <h1 className="form-main-title">
                    About the VoiCee Initiative
                </h1>

                <p className="form-subtitle">
                    A transparent public bridge between citizen reports and government actions.
                </p>

                {/* Two column split matching the clean form layout */}
                <div className="about-columns-container">
                    
                    {/* Left larger card: Mission and Principles */}
                    <div className="complaint-card about-content-card">
                        <h2 className="about-card-title">Our Purpose</h2>
                        <p className="about-text-body">
                            VoiCee is built to simplify how citizens raise civic concerns. 
                            Instead of traveling to county offices or making repeated phone calls, 
                            residents can log public service breakdowns online and track responses openly.
                        </p>

                        <h2 className="about-card-title" style={{ marginTop: "24px" }}>
                            Community Guidelines
                        </h2>
                        
                        <ul className="about-list">
                            <li>
                                <strong>Be Specific:</strong> Provide recognizable landmarks, street names, and exact county boundaries.
                            </li>
                            <li>
                                <strong>Pick the Best Category:</strong> Selecting the proper sector ensures your report reaches the correct desk quickly.
                            </li>
                            <li>
                                <strong>Respectful Communication:</strong> Clear, professional descriptions help public officers prioritize urgent repairs.
                            </li>
                        </ul>
                    </div>

                    {/* Right card: Official contacts and office details */}
                    <div className="complaint-card about-contact-card">
                        <h3 className="contact-card-title">Inquiries &amp; Support</h3>
                        <p className="contact-card-subtitle">
                            For technical assistance or direct departmental inquiries:
                        </p>

                        {/* Rendering contact entries */}
                        <div className="contact-details-list">
                            {contactDirectory.map((item, index) => (
                                <div key={index} className="contact-detail-row">
                                    <span className="contact-title">{item.label}:</span>
                                    <span className="contact-info">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Blue info banner reusing the teammate's ai-banner design */}
                        <div className="ai-banner about-tip-box">
                            <div className="ai-left-side">
                                <div className="ai-icon-bg">💡</div>
                                <div className="ai-text">
                                    <strong>Privacy Protection</strong>
                                    <p>Your contact details are protected under national data privacy guidelines.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
}

export default About;