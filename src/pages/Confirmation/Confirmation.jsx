import React from 'react';
import './confirmation.css';

export default function Confirmation({ data }) {
  // fall back to sample data so this page still looks right if someone
  // navigates here directly instead of coming from the complaint form
  const referenceNumber = data?.referenceNumber || "VOI-2026-007834";
  const dateSubmitted = data?.dateSubmitted || "17 September 2026";
  const department = data?.department || "National Registration Bureau (NRB)";
  const complaintTitle = data?.complaintTitle || "Delayed issuance of national ID cards at Huduma Centre";
  const category = data?.category || "Public Services";
  const status = data?.status || "Submitted";

  return (
    <div style={{ backgroundColor: '#ffffff' }}>

      <div className="confirmation-container">
        
        {/* green checkmark icon shown on success */}
        <div className="success-icon-wrapper">
          <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h1 className="confirmation-title">
          Your Complaint Has Been Submitted<br className="hidden sm:block" /> Successfully!
        </h1>
        <p className="confirmation-subtitle">
          Thank you for using VoiCee. Your complaint has been forwarded to the relevant<br className="hidden sm:block" /> government department.
        </p>

        {/* receipt-style summary card showing what was submitted */}
        <div className="receipt-card">
          <div className="receipt-header">
            <span className="receipt-title">COMPLAINT RECEIPT</span>
            <span className="receipt-ref-header">Reference {referenceNumber}</span>
          </div>

          <div className="receipt-body">
            <div className="receipt-content">
              {/* reference number gets its own row up top since it's the
                  main thing the user needs to remember */}
              <div className="ref-row">
                <span className="ref-label">Reference Number</span>
                <span className="ref-value">{referenceNumber}</span>
              </div>

              <div className="data-rows">
                <DataRow label="Date Submitted" value={dateSubmitted} />
                <DataRow label="Department" value={department} />
                <DataRow label="Complaint Title" value={complaintTitle} />
                <DataRow label="Category" value={category} />
                <DataRow label="Status" value={status} />
              </div>
            </div>
          </div>
        </div>

        {/* small reminder box telling the user to hold onto their reference number */}
        <div className="info-box">
          <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <p className="info-text">
            Please keep your reference number for future reference. You can use it to track the progress of your complaint.
          </p>
        </div>

        {/* using hash-based navigation here instead of a router link,
            so this just swaps the URL hash and lets the app react to it */}
        <div className="action-buttons">
          <button className="btn-primary" onClick={() => window.location.hash = 'submit'}>
            View Your Complaint
          </button>
          <button className="btn-secondary" onClick={() => window.location.hash = 'home'}>
            Return Home
          </button>
        </div>
      </div>

    </div>
  );
}

// small helper so we're not repeating the same label/value markup
// five times above
function DataRow({ label, value }) {
  return (
    <div className="data-row">
      <span className="data-label">{label}</span>
      <span className="data-value">{value}</span>
    </div>
  );
}