import './footer.css'

export default function Footer({ navigate }) {
    return (
        <footer className="footer">

            {/* =================================================
                FOOTER TOP
                ================================================= */}

            <div className="footer-top">

                {/* Brand */}
                <div className="footer-brand">

                    <button
                        className="footer-logo"
                        onClick={() => navigate && navigate('home')}
                        aria-label="Go to Home"
                    >
                        <img
                            className="footer-logo-image"
                            src="/voicee-logo.png"
                            alt="VoiCee"
                        />
                    </button>

                    <p className="footer-tagline">
                        Empowering Kenyan citizens to be heard.
                    </p>

                </div>

                {/* Platform */}
                <div className="footer-col">

                    <p className="footer-col-title">
                        Platform
                    </p>

                    <div className="footer-links">

                        <button
                            onClick={() =>
                                navigate && navigate('submit')
                            }
                        >
                            Submit Complaint
                        </button>

                        <button
                            onClick={() =>
                                navigate && navigate('community')
                            }
                        >
                            Community Dashboard
                        </button>

                        <button
                            onClick={() =>
                                navigate && navigate('home')
                            }
                        >
                            How it Works
                        </button>

                        <button
                            onClick={() =>
                                navigate && navigate('about')
                            }
                        >
                            About
                        </button>

                    </div>

                </div>

                {/* Partners */}
                <div className="footer-col">

                    <p className="footer-col-title">
                        Partners
                    </p>

                    <div className="footer-links">

                        <span>County Governments</span>

                        <span>National Ministries</span>

                        <span>Ombudsman Office</span>

                        <span>Public Oversight Portal</span>

                    </div>

                </div>

                {/* Legal */}
                <div className="footer-col">

                    <p className="footer-col-title">
                        Legal
                    </p>

                    <div className="footer-links">

                        <span>Privacy Policy</span>

                        <span>Terms of Service</span>

                        <span>Citizen Data Charter</span>

                        <span>Kenya Constitution Art. 37</span>

                    </div>

                </div>

            </div>

            {/* =================================================
                FOOTER BOTTOM
                ================================================= */}

            <div className="footer-bottom">

                <p>
                    © 2026 VoiCee. Empowering Kenyan citizens to be heard.
                </p>

                <p>
                    Harambee. Huduma Bora ni Haki Yako.
                </p>

            </div>

        </footer>
    )
}