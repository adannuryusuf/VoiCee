import { useState, useEffect } from "react";
import {
  suggestDepartment,
  saveComplaint,
  DEPT_VALUE_TO_LABEL,
} from "../../utils/voicee";

import "./suggestion.css";

const DEPT_REASONS = {
  "water-sanitation": [
    "Your complaint is related to water or sanitation services.",
    "This department handles public water and sanitation matters.",
  ],

  "transport-roads": [
    "Your complaint is related to roads or transportation.",
    "This department handles road and transport infrastructure.",
  ],

  "lands-housing": [
    "Your complaint is related to land or housing.",
    "This department handles land and housing matters.",
  ],

  health: [
    "Your complaint is related to healthcare services.",
    "This department handles public health services.",
  ],

  interior: [
    "Your complaint is related to security or public safety.",
    "This department handles internal security and public safety.",
  ],

  "energy-petroleum": [
    "Your complaint is related to electricity or energy services.",
    "This department handles energy and petroleum matters.",
  ],

  environment: [
    "Your complaint is related to environmental services.",
    "This department handles environmental matters.",
  ],

  county: [
    "Your complaint concerns a county-level public service.",
    "The county government is responsible for this type of service.",
  ],

  education: [
    "Your complaint is related to education services.",
    "This department handles education-related matters.",
  ],
};

const DEPARTMENT_OPTIONS = [
  {
    value: "water-sanitation",
    label: "Water & Sanitation",
  },
  {
    value: "transport-roads",
    label: "Transport & Roads",
  },
  {
    value: "lands-housing",
    label: "Lands & Housing",
  },
  {
    value: "health",
    label: "Health",
  },
  {
    value: "interior",
    label: "Interior & Security",
  },
  {
    value: "energy-petroleum",
    label: "Energy & Petroleum",
  },
  {
    value: "environment",
    label: "Environment",
  },
  {
    value: "education",
    label: "Education",
  },
  {
    value: "county",
    label: "County Government",
  },
];

export default function Suggestion({ data, onConfirm, navigate }) {
  const [agreed, setAgreed] = useState(true);
  const [selectedDeptValue, setSelectedDeptValue] = useState("");

  /*
   * If someone reaches this page without submitting
   * a complaint first, send them back to the form.
   */
  useEffect(() => {
    if (!data) {
      window.location.hash = "submit";
    }
  }, [data]);

  /*
   * Calculate the suggested department.
   *
   * We check whether data exists first so that the
   * component does not try to read properties from null.
   */
  const suggestedDeptValue = data
    ? suggestDepartment(data.categoryValue || "")
    : "";

  /*
   * Convert the department value into a readable name.
   */
  const suggestedDeptLabel = data
    ? DEPT_VALUE_TO_LABEL[suggestedDeptValue] ||
      data.department ||
      "County Government"
    : "";

  /*
   * Get the explanation for the suggestion.
   */
  const reason =
    DEPT_REASONS[suggestedDeptValue] || [
      "This department is the most appropriate for this type of complaint.",
    ];

  /*
   * Set the dropdown to the AI-suggested department.
   *
   * This useEffect MUST be above the "if (!data) return null"
   * because React Hooks must always run in the same order.
   */
  useEffect(() => {
    if (suggestedDeptValue) {
      setSelectedDeptValue(suggestedDeptValue);
    }
  }, [suggestedDeptValue]);

  /*
   * Prevent rendering if there is no complaint data.
   */
  if (!data) {
    return null;
  }

  function handleConfirm() {
    /*
     * If the user agrees, use the suggested department.
     * Otherwise use the department selected manually.
     */
    const finalDeptValue = agreed
      ? suggestedDeptValue
      : selectedDeptValue;

    const finalDeptLabel =
      DEPT_VALUE_TO_LABEL[finalDeptValue] ||
      suggestedDeptLabel;

    /*
     * Save the complaint to localStorage.
     */
    saveComplaint({
      id: data.referenceNumber,
      fullName: data.fullName || "Anonymous",
      county: data.county || "Kenya",
      title: data.complaintTitle,
      category: data.categoryValue || "general",
      categoryLabel: data.category || "Public Services",
      department: finalDeptLabel,
      description: data.description || "",
      status: "Submitted",
      dateSubmitted: data.dateSubmitted,
      supportCount: 0,
      disagreeCount: 0,
    });

    /*
     * Send the final complaint information back to App.jsx.
     */
    if (onConfirm) {
      onConfirm({
        ...data,
        department: finalDeptLabel,
        departmentValue: finalDeptValue,
      });
    }
  }

  return (
    <div className="suggestion-page">

      <main className="suggestion-main">

        {/* Watermark */}
        <div className="suggestion-watermark">
          <img
            src="/assets/icons.svg"
            alt=""
          />
        </div>

        <div className="suggestion-content">

          {/* Breadcrumb */}
          <div className="breadcrumb">

            <button onClick={() => navigate("home")}>
              Home
            </button>

            <span>›</span>

            <button onClick={() => navigate("submit")}>
              Submit Complaint
            </button>

            <span>›</span>

            <span className="breadcrumb-current">
              AI Suggestion
            </span>

          </div>


          {/* Header */}
          <div className="suggestion-header">

            <h1 className="suggestion-title">
              Review Department Suggestion
            </h1>

            <p className="suggestion-sub">
              We analysed your complaint and identified the
              department that appears most appropriate.
            </p>

          </div>


          {/* Two-column area */}
          <div className="suggestion-grid">

            {/* LEFT — Complaint summary */}
            <div className="complaint-card">

              <h2 className="complaint-card-title">
                Your Complaint
              </h2>

              <div className="complaint-field">
                <span className="complaint-field-label">
                  Complaint Title
                </span>

                <span className="complaint-field-value">
                  {data.complaintTitle}
                </span>
              </div>


              <div className="complaint-field">
                <span className="complaint-field-label">
                  Category
                </span>

                <span className="complaint-field-value">
                  {data.category || "Public Services"}
                </span>
              </div>


              <div className="complaint-field">
                <span className="complaint-field-label">
                  Location
                </span>

                <span className="complaint-field-value">
                  {data.county || "Kenya"}
                </span>
              </div>


              <div className="complaint-field">
                <span className="complaint-field-label">
                  Description
                </span>

                <p className="complaint-field-summary">
                  {data.description}
                </p>
              </div>

            </div>


            {/* RIGHT — AI result */}
            <div className="ai-result-card">

              {/* AI badge */}
              <div className="ai-score-badge">

                <span>
                  AI SUGGESTION
                </span>

              </div>


              {/* Department */}
              <div className="ai-dept-section">

                <span className="ai-dept-label">
                  Suggested Department
                </span>

                <h2 className="ai-dept-name">
                  {suggestedDeptLabel}
                </h2>

                <p className="ai-dept-desc">
                  This suggestion is based on the category
                  selected for your complaint.
                </p>

              </div>


              {/* Reasons */}
              <div className="ai-reasons">

                <div className="ai-reasons-title">
                  Why this department?
                </div>

                <div className="ai-reasons-list">

                  {reason.map((item, index) => (
                    <div
                      className="ai-reason-item"
                      key={index}
                    >
                      <span className="ai-reason-check">
                        ✓
                      </span>

                      <p>{item}</p>
                    </div>
                  ))}

                </div>

              </div>


              {/* Disclaimer */}
              <div className="ai-disclaimer">

                <p>
                  This is a suggestion only. You have the
                  final say over which department receives
                  your complaint.
                </p>

              </div>


              {/* Actions */}
              <div className="ai-actions">

                <div className="ai-action-row">

                  <button
                    className="btn-confirm"
                    onClick={() => {
                      setAgreed(true);
                      handleConfirm();
                    }}
                  >
                    Accept Suggestion
                  </button>

                  <button
                    className="btn-choose-another"
                    onClick={() => setAgreed(false)}
                  >
                    Choose Another
                  </button>

                </div>


                {/* Department selector */}
                {!agreed && (
                  <div className="complaint-field">

                    <label
                      className="complaint-field-label"
                      htmlFor="department"
                    >
                      Select Department
                    </label>

                    <select
                      id="department"
                      value={selectedDeptValue}
                      onChange={(e) =>
                        setSelectedDeptValue(e.target.value)
                      }
                    >
                      {DEPARTMENT_OPTIONS.map((dept) => (
                        <option
                          key={dept.value}
                          value={dept.value}
                        >
                          {dept.label}
                        </option>
                      ))}
                    </select>

                    <button
                      className="btn-confirm"
                      onClick={handleConfirm}
                    >
                      Confirm Selected Department
                    </button>

                  </div>
                )}

              </div>


              {/* Edit complaint */}
              <div className="ai-edit-row">

                <button
                  className="btn-edit"
                  onClick={() => navigate("submit")}
                >
                  Edit Complaint
                </button>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}