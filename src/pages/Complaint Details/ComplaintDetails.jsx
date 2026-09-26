import React, { useState } from "react";
import "./complaintDetails.css";

const ComplaintDetails = ({ navigate }) => {
  const [supportCount, setSupportCount] = useState(124);
  const [disagreeCount, setDisagreeCount] = useState(8);
  const [userAction, setUserAction] = useState(null);

  const handleSupport = () => {
    if (userAction === "support") {
      setSupportCount((count) => count - 1);
      setUserAction(null);
      return;
    }

    if (userAction === "disagree") {
      setDisagreeCount((count) => count - 1);
    }

    setSupportCount((count) => count + 1);
    setUserAction("support");
  };

  const handleDisagree = () => {
    if (userAction === "disagree") {
      setDisagreeCount((count) => count - 1);
      setUserAction(null);
      return;
    }

    if (userAction === "support") {
      setSupportCount((count) => count - 1);
    }

    setDisagreeCount((count) => count + 1);
    setUserAction("disagree");
  };

  const handleBack = () => {
    if (navigate) {
      navigate("community");
    } else {
      window.location.hash = "community";
    }
  };

  return (
    <div className="complaint-details-page">

      <main className="complaint-details-wrapper">

        {/* BREADCRUMB */}
        <div className="complaint-details-breadcrumb">
          <span>Home</span>

          <span className="complaint-details-breadcrumb-separator">
            &gt;
          </span>

          <span>Community</span>

          <span className="complaint-details-breadcrumb-separator">
            &gt;
          </span>

          <span className="complaint-details-breadcrumb-current">
            Complaint Details
          </span>
        </div>


        {/* PAGE HEADER */}
        <header className="complaint-details-header">

          <h1>
            Complaint Details
          </h1>

          <div className="complaint-details-meta">

            <span className="complaint-details-status">
              Under Review
            </span>

            <span className="complaint-details-meta-item">
              Submitted on 15 September 2026
            </span>

            <span className="complaint-details-meta-dot">
              •
            </span>

            <span className="complaint-details-meta-item">
              Reference: VOI-2026-007291
            </span>

          </div>

        </header>


        {/* MAIN CONTENT */}
        <div className="complaint-details-layout">

          <section className="complaint-details-main">

            {/* COMPLAINT INFORMATION CARD */}
            <article className="complaint-details-card complaint-details-information-card">

              <h2>
                Stalled road construction on Thika Road
              </h2>

              <div className="complaint-details-information">

                <div className="complaint-details-information-item">

                  <span className="complaint-details-label">
                    Department
                  </span>

                  <span className="complaint-details-value">
                    Kenya National Highways Authority (KeNHA)
                  </span>

                </div>


                <div className="complaint-details-information-item">

                  <span className="complaint-details-label">
                    Category
                  </span>

                  <span className="complaint-details-value">
                    Roads &amp; Infrastructure
                  </span>

                </div>

              </div>


              <p className="complaint-details-description">
                Road construction between Section 9 and Section 10 of
                Thika Superhighway has been stalled for over 4 months.
                The unfinished road surface is causing accidents during
                morning and evening rush hours. Construction materials
                have been left scattered on the roadside, creating
                hazards for pedestrians and motorists. Local residents
                have made multiple calls to KeNHA but have received no
                updates on when work will resume.
              </p>

            </article>


            {/* COMMUNITY FEEDBACK CARD */}
            <article className="complaint-details-card complaint-details-feedback-card">

              <div className="complaint-details-feedback-header">

                <h2>
                  Community Feedback
                </h2>

                <span className="complaint-details-support-total">
                  {supportCount} people support this complaint
                </span>

              </div>


              {/* SUPPORT / DISAGREE */}
              <div className="complaint-details-feedback-actions">

                <button
                  type="button"
                  className="complaint-details-support-button"
                  onClick={handleSupport}
                >
                  ♧ {supportCount} people support this complaint
                </button>


                <button
                  type="button"
                  className="complaint-details-disagree-button"
                  onClick={handleDisagree}
                >
                  ⚑ {disagreeCount} people disagree
                </button>

              </div>


              {/* COMMUNITY COMMENTS */}
              <div className="complaint-details-comments">

                <h3>
                  Community Comments
                </h3>


                <div className="complaint-details-comment-list">

                  {/* COMMENT 1 */}
                  <div className="complaint-details-comment">

                    <div className="complaint-details-comment-header">

                      <span className="complaint-details-comment-author">
                        Resident, Juja
                      </span>

                      <span className="complaint-details-comment-time">
                        Yesterday
                      </span>

                    </div>

                    <p className="complaint-details-comment-text">
                      This road has been a nightmare for months.
                      Something needs to be done urgently.
                    </p>

                  </div>


                  {/* COMMENT 2 */}
                  <div className="complaint-details-comment">

                    <div className="complaint-details-comment-header">

                      <span className="complaint-details-comment-author">
                        Commuter, Ruiru
                      </span>

                      <span className="complaint-details-comment-time">
                        2 days ago
                      </span>

                    </div>

                    <p className="complaint-details-comment-text">
                      I use this route daily and the potholes are
                      getting worse. We need accountability.
                    </p>

                  </div>


                  {/* COMMENT 3 */}
                  <div className="complaint-details-comment">

                    <div className="complaint-details-comment-header">

                      <span className="complaint-details-comment-author">
                        Business Owner, Thika
                      </span>

                      <span className="complaint-details-comment-time">
                        3 days ago
                      </span>

                    </div>

                    <p className="complaint-details-comment-text">
                      The construction company should be held
                      responsible for the delays.
                    </p>

                  </div>

                </div>

              </div>

            </article>


            {/* BACK TO COMMUNITY */}
            <button
              type="button"
              className="complaint-details-back-button"
              onClick={handleBack}
            >
              Back to Community Dashboard
            </button>

          </section>

        </div>

      </main>

    </div>
  );
};

export default ComplaintDetails;