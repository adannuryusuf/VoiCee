import React from "react";
import {
    FaFileAlt,
    FaMagic,
    FaShieldAlt,
    FaHashtag
} from "react-icons/fa";

import StatCard from "../../components/StatCard";

import "./home.css";


function Home({ navigate }) {

    const platformSteps = [
        {
            number: "01",
            icon: <FaFileAlt />,
            title: "Submit Your Complaint",
            description:
                "Describe the issue you're facing with a public service or government department."
        },
        {
            number: "02",
            icon: <FaMagic />,
            title: "AI Suggests the Right Department",
            description:
                "VoiCee analyses your complaint and recommends the most relevant government department."
        },
        {
            number: "03",
            icon: <FaShieldAlt />,
            title: "Review and Confirm",
            description:
                "Check the suggestion, confirm the department, or choose a different one. You make the final decision."
        },
        {
            number: "04",
            icon: <FaHashtag />,
            title: "Get Your Reference Number",
            description:
                "Receive a unique reference number to track your complaint and follow up on its progress."
        }
    ];


    return (
        <div className="voicee-home-page">

            {/* HERO SECTION */}
            <section className="home-hero">

                <div className="home-hero-content">

                    <div className="home-hero-badge">
                        <span className="home-badge-flag"></span>

                        <span>
                            OFFICIAL CIVIC FEEDBACK PORTAL • REPUBLIC OF KENYA
                        </span>
                    </div>


                    <h1>
                        Your Voice. Your Community.
                        <span>Heard.</span>
                    </h1>


                    <p className="home-hero-description">
                        VoiCee is a platform where Kenyan citizens can raise
                        complaints and give feedback about public services and
                        government departments. Submit your complaint, find the
                        right department, and see what issues your community is
                        raising.
                    </p>


                    <div className="home-hero-buttons">

                        <button
                            type="button"
                            className="home-submit-button"
                            onClick={() => navigate("submit")}
                        >
                            Submit a Complaint
                            <span>→</span>
                        </button>


                        <button
                            type="button"
                            className="home-explore-button"
                            onClick={() => navigate("community")}
                        >
                            Explore Complaints
                        </button>

                    </div>

                </div>

            </section>


            {/* HOW VOICEE WORKS */}
            <section className="home-how-section">

                <div className="home-how-heading">

                    <h2>
                        How VoiCee Works
                    </h2>

                    <p>
                        A streamlined digital pipeline built on transparency
                        and speed.
                    </p>

                </div>


                <div className="home-steps-grid">

                    {platformSteps.map((step) => (

                        <article
                            className="home-step-card"
                            key={step.number}
                        >

                            <div className="home-step-card-top">

                                <div className="home-step-icon">
                                    {step.icon}
                                </div>

                                <span className="home-step-number">
                                    {step.number}
                                </span>

                            </div>


                            <h3>
                                {step.title}
                            </h3>


                            <p>
                                {step.description}
                            </p>

                        </article>

                    ))}

                </div>

            </section>


            {/* TRUST / STATISTICS SECTION */}
            <section className="home-trust-section">

                <div className="home-trust-heading">

                    <h2>
                        Trusted by Communities Across Kenya
                    </h2>

                    <p>
                        VoiCee helps citizens raise concerns and follow
                        public-service complaints through a transparent
                        digital process.
                    </p>

                </div>


                <div className="home-stat-cards">

                    <StatCard
                        label="Complaints Submitted"
                        value="12,000+"
                        description="Complaints submitted by communities across Kenya."
                    />

                    <StatCard
                        label="Resolved Within 30 Days"
                        value="64%"
                        description="Of complaints resolved within 30 days."
                    />

                </div>


                <div className="home-testimonials">

                    <article className="home-testimonial-card">

                        <p>
                            "Our public school road in Eldoret had deep gullies
                            for months. I uploaded details to VoiCee on Monday,
                            and the AI correctly routed it to KeRRA. Road crews
                            were out by Friday morning."
                        </p>

                        <strong>
                            - Kiprop K., Uasin Gishu County
                        </strong>

                    </article>


                    <article className="home-testimonial-card">

                        <p>
                            "VoiCee eliminates physical visits to municipal
                            buildings just to drop letters. The tracker makes
                            county departments highly accountable to taxpayers.
                            This is progress."
                        </p>

                        <strong>
                            - Wambui M., Nairobi County
                        </strong>

                    </article>

                </div>

            </section>

        </div>
    );
}


export default Home;