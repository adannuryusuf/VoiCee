import React from "react";

import "./about.css";


function About() {

    // Handles moving between the different pages
    const navigate = (page) => {
        window.location.hash = page;
    };


    // Stores the steps used to explain how VoiCee works
    const workSteps = [
        {
            number: "01",
            title: "Submit Your Complaint",
            description:
                "Describe the issue you are facing with any public service or government department. Provide clear details so your complaint can be addressed."
        },
        {
            number: "02",
            title: "AI Suggests the Right Department",
            description:
                "VoiCee uses AI to analyse your complaint and suggest the most relevant government department. This helps your complaint reach the right people faster."
        },
        {
            number: "03",
            title: "Review and Confirm",
            description:
                "You review the AI suggestion and make the final decision. You can confirm the department, choose a different one, or edit your complaint before submitting."
        },
        {
            number: "04",
            title: "Track Your Complaint",
            description:
                "Once submitted, you receive a unique reference number. Use it to track progress and follow up."
        }
    ];


    return (
        <div className="voicee-about-page">


            {/* Main content of the About page */}
            <main className="about-main">

                <div className="about-content-wrapper">

                    {/* Shows where the user is on the website */}
                    <div className="about-breadcrumb">

                        <span>Home</span>

                        <span className="about-breadcrumb-arrow">
                            &gt;
                        </span>

                        <strong>About</strong>

                    </div>


                    {/* About page title and introduction */}
                    <section className="about-page-heading">

                        <h1>
                            About VoiCee
                        </h1>

                        <p>
                            Giving every Kenyan citizen a voice.
                        </p>

                    </section>


                    {/* Explains the main purpose of VoiCee */}
                    <section className="about-mission-card">

                        <div className="about-mission-content">

                            <h2>
                                Our Mission
                            </h2>

                            <p>
                                VoiCee is a civic complaint and public feedback
                                platform built for Kenyan citizens. Our mission
                                is to make it easy for ordinary people to raise
                                concerns about public services and government
                                departments - and to hold those departments
                                accountable. Every citizen deserves to be heard,
                                and every complaint deserves a response.
                            </p>

                        </div>


                        <div className="about-how-box">

                            <h3>
                                How it works
                            </h3>

                            <p>
                                You report an issue, AI suggests the right
                                department, and you track progress until it is
                                resolved.
                            </p>

                        </div>

                    </section>


                    {/* TAKES YOU TO THE ABOUT PAGE AND YOU SEE HOW IT ACTUALLY WORKS(USER GUIDELINE) */}
                    <section className="about-work-section">

                        <h2 className="about-section-title">
                            How VoiCee Works
                        </h2>


                        <div className="about-work-grid">

                            {workSteps.map((step) => (

                                <article
                                    className="about-work-card"
                                    key={step.number}
                                >

                                    <span className="about-work-number">
                                        {step.number}
                                    </span>


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


                    {/* Gives more information about VoiCee features */}
                    <section className="about-information-grid">

                        {/* Explains the AI suggestion feature */}

                        <article className="about-information-card">

                            <div className="about-information-title">

                                <span className="about-information-icon about-ai-icon">
                                    ⚙
                                </span>

                                <h3>
                                    About AI Suggestions
                                </h3>

                            </div>


                            <p>
                                VoiCee uses artificial intelligence to read your
                                complaint and match it to the most appropriate
                                government department. The AI looks at keywords,
                                context, and past complaints to make its
                                suggestion. You always have the final say -
                                VoiCee AI is a helpful guide, not a
                                decision-maker.
                            </p>

                        </article>


                        {/* Explains the community analysis feature */}

                        <article className="about-information-card">

                            <div className="about-information-title">

                                <span className="about-information-icon about-community-icon">
                                    ◉
                                </span>

                                <h3>
                                    Community Analysis
                                </h3>

                            </div>


                            <p>
                                VoiCee believes in transparency and public
                                accountability. The Community Dashboard shows
                                what issues Kenyans are raising, which
                                departments receive the most complaints, and how
                                quickly issues are being resolved. No personal
                                information is shared. All data is anonymised to
                                protect citizen privacy.
                            </p>

                        </article>

                    </section>


                    {/* Contact information for users who need help */}
                    <section className="about-contact-section">

                        <h2>
                            Contact Us
                        </h2>


                        <p>
                            Have questions or need help? Reach out to us at
                            support@voicee.co.ke
                        </p>


                        <p className="about-support-email">

                            <strong>
                                Support email:
                            </strong>

                            <span>
                                support@voicee.co.ke
                            </span>

                        </p>

                    </section>

                </div>

            </main>


        </div>
    );
}


export default About;