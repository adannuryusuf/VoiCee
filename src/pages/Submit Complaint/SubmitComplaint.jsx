/**
 * SubmitComplaint.jsx — The complaint submission form.
 *
 * This page collects the citizen's complaint information.
 *
 * When AI Suggest is ON:
 *   Submit Complaint → AI Suggestion → Confirmation
 *
 * When AI Suggest is OFF:
 *   Submit Complaint → Confirmation
 */

import React, { useState } from 'react';

import './submitComplaint.css';

import {
  generateId,
  CATEGORY_TO_LABEL,
  DEPT_VALUE_TO_LABEL,
  COUNTY_LABELS,
} from '../../utils/voicee';

function SubmitComplaint({ onFormSubmit }) {

  // --- Form field state ---

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [department, setDepartment] = useState('');
  const [description, setDescription] = useState('');

  // Controls whether the AI Suggestion page is shown.
  const [aiSuggest, setAiSuggest] = useState(true);

  // Stores validation errors.
  const [formErrors, setFormErrors] = useState([]);

  /**
   * Validates the required form fields.
   */
  function validateForm() {

    const errors = [];

    if (!fullName.trim()) {
      errors.push('Full Name is required.');
    }

    if (!email.trim()) {
      errors.push('Email Address is required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.push(
        'Please enter a valid email address (e.g. john@email.com).'
      );
    }

    if (!title.trim()) {
      errors.push(
        'Complaint Title is required — give your complaint a short heading.'
      );
    }

    if (!description.trim() || description.trim().length < 20) {
      errors.push(
        'Please describe your complaint in at least 20 characters.'
      );
    }

    return errors;
  }

  /**
   * Handles form submission.
   */
  function handleSubmit(e) {

    e.preventDefault();

    // Validate the form.
    const errors = validateForm();

    if (errors.length > 0) {

      setFormErrors(errors);

      setTimeout(() => {
        document
          .querySelector('.form-error-summary')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
      }, 50);

      return;
    }

    // Clear previous errors.
    setFormErrors([]);

    // Generate complaint reference number.
    const refNum = generateId();

    // Get today's date.
    const today = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    // Convert raw values to readable labels.
    const deptLabel =
      DEPT_VALUE_TO_LABEL[department] ||
      department ||
      'County Government';

    const categoryLabel =
      CATEGORY_TO_LABEL[category] ||
      category ||
      'Public Services';

    const countyLabel =
      COUNTY_LABELS[location] ||
      location ||
      'Kenya';

    /*
     * Build the complete complaint object.
     */
    const dataToPass = {

      // Complaint reference information
      referenceNumber: refNum,
      dateSubmitted: today,
      status: 'Submitted',

      // Complaint information
      complaintTitle: title.trim(),
      department: deptLabel,
      category: categoryLabel,

      // Raw values used by Suggestion.jsx
      departmentValue: department,
      categoryValue: category,

      // County information
      county: countyLabel,
      countyValue: location,

      // Citizen information
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),

      // Complaint description
      description: description.trim(),

      /*
       * This tells App.jsx whether the user wants
       * to see the AI Suggestion page.
       */
      aiSuggest: aiSuggest,
    };

    /*
     * Send the completed form data to App.jsx.
     */
    if (onFormSubmit) {
      onFormSubmit(dataToPass);
    }
  }

  return (
    <div className="voicee-container">

      {/* FORM CONTENT */}
      <main className="form-wrapper">

        <div className="breadcrumb">
          Home &gt; Submit Complaint
        </div>

        <h1 className="form-main-title">
          Submit Your Complaint
        </h1>

        <p className="form-subtitle">
          Tell us about the issue you are facing. We will help you reach the right government department.
        </p>

        <form
          onSubmit={handleSubmit}
          className="complaint-card"
          noValidate
        >

          {/* ROW 1: Full Name + Email */}

          <div className="form-row">

            <div className="form-group">

              <label>
                Full Name <span className="required-star">*</span>
              </label>

              <div className="input-with-icon">

                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. John Kamau"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />

                <span className="input-svg-icon">
                  ✏️
                </span>

              </div>

            </div>

            <div className="form-group">

              <label>
                Email Address <span className="required-star">*</span>
              </label>

              <div className="input-with-icon">

                <input
                  type="email"
                  name="email"
                  placeholder="e.g. john@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <span className="input-svg-icon">
                  ✏️
                </span>

              </div>

            </div>

          </div>

          {/* ROW 2: Phone + County */}

          <div className="form-row">

            <div className="form-group">

              <label>
                Phone Number
              </label>

              <div className="input-with-icon">

                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. 0712 345 678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <span className="input-svg-icon">
                  ✏️
                </span>

              </div>

            </div>

            <div className="form-group">

              <label>
                County / Location
              </label>

              <div className="select-wrapper">

                <select
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >

                  <option value="">
                    Select your county
                  </option>

                  <option value="baringo">Baringo</option>
                  <option value="bomet">Bomet</option>
                  <option value="bungoma">Bungoma</option>
                  <option value="busia">Busia</option>
                  <option value="elgeyo_marakwet">Elgeyo-Marakwet</option>
                  <option value="embu">Embu</option>
                  <option value="garissa">Garissa</option>
                  <option value="homa_bay">Homa Bay</option>
                  <option value="isiolo">Isiolo</option>
                  <option value="kajiado">Kajiado</option>
                  <option value="kakamega">Kakamega</option>
                  <option value="kericho">Kericho</option>
                  <option value="kiambu">Kiambu</option>
                  <option value="kilifi">Kilifi</option>
                  <option value="kirinyaga">Kirinyaga</option>
                  <option value="kisii">Kisii</option>
                  <option value="kisumu">Kisumu</option>
                  <option value="kitui">Kitui</option>
                  <option value="kwale">Kwale</option>
                  <option value="laikipia">Laikipia</option>
                  <option value="lamu">Lamu</option>
                  <option value="machakos">Machakos</option>
                  <option value="makueni">Makueni</option>
                  <option value="mandera">Mandera</option>
                  <option value="marsabit">Marsabit</option>
                  <option value="meru">Meru</option>
                  <option value="migori">Migori</option>
                  <option value="mombasa">Mombasa</option>
                  <option value="muranga">Murang'a</option>
                  <option value="nairobi">Nairobi</option>
                  <option value="nakuru">Nakuru</option>
                  <option value="nandi">Nandi</option>
                  <option value="narok">Narok</option>
                  <option value="nyamira">Nyamira</option>
                  <option value="nyandarua">Nyandarua</option>
                  <option value="nyeri">Nyeri</option>
                  <option value="samburu">Samburu</option>
                  <option value="siaya">Siaya</option>
                  <option value="taita_taveta">Taita-Taveta</option>
                  <option value="tana_river">Tana River</option>
                  <option value="tharaka_nithi">Tharaka-Nithi</option>
                  <option value="trans_nzoia">Trans Nzoia</option>
                  <option value="turkana">Turkana</option>
                  <option value="uasin_gishu">Uasin Gishu</option>
                  <option value="vihiga">Vihiga</option>
                  <option value="wajir">Wajir</option>
                  <option value="west_pokot">West Pokot</option>

                </select>

              </div>

            </div>

          </div>

          {/* COMPLAINT TITLE */}

          <div className="form-group full-width">

            <label>
              Complaint Title <span className="required-star">*</span>
            </label>

            <div className="input-with-icon">

              <input
                type="text"
                name="title"
                placeholder="e.g. Broken water pipe on Moi Avenue"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <span className="input-svg-icon">
                ✏️
              </span>

            </div>

          </div>

          {/* ROW 3: Category + Department */}

          <div className="form-row">

            <div className="form-group">

              <label>
                Category
              </label>

              <div className="select-wrapper">

                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >

                  <option value="">
                    Select a category
                  </option>

                  <option value="water">
                    Water &amp; Sanitation
                  </option>

                  <option value="roads">
                    Roads &amp; Transport
                  </option>

                  <option value="infrastructure">
                    Housing &amp; Public Works
                  </option>

                  <option value="health">
                    Healthcare Services
                  </option>

                  <option value="security">
                    Security &amp; Administration
                  </option>

                  <option value="power">
                    Energy &amp; Electricity
                  </option>

                  <option value="environment">
                    Environment &amp; Forestry
                  </option>

                </select>

              </div>

            </div>

            <div className="form-group">

              <label>
                Department{' '}
                <span className="optional-note">
                  (optional — AI can suggest)
                </span>
              </label>

              <div className="select-wrapper">

                <select
                  name="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >

                  <option value="">
                    Select a department
                  </option>

                  <option value="county">
                    County Government
                  </option>

                  <option value="water-sanitation">
                    Ministry of Water, Sanitation and Irrigation
                  </option>

                  <option value="transport-roads">
                    Ministry of Roads and Transport
                  </option>

                  <option value="lands-housing">
                    Ministry of Lands, Public Works, Housing and Urban Development
                  </option>

                  <option value="health">
                    Ministry of Health
                  </option>

                  <option value="education">
                    Ministry of Education
                  </option>

                  <option value="interior">
                    Ministry of Interior and National Administration
                  </option>

                  <option value="energy-petroleum">
                    Ministry of Energy and Petroleum
                  </option>

                  <option value="environment">
                    Ministry of Environment, Climate Change and Forestry
                  </option>

                </select>

              </div>

            </div>

          </div>

          {/* DESCRIPTION */}

          <div className="form-group full-width">

            <label>
              Complaint Description{' '}
              <span className="required-star">*</span>
            </label>

            <textarea
              name="description"
              placeholder="Describe your issue clearly and include relevant details such as location, dates, and what has happened so far."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
            />

          </div>

          {/* AI SUGGESTION BANNER */}

          <div className="ai-banner">

            <div className="ai-left-side">

              <div className="ai-icon-bg">
                💡
              </div>

              <div className="ai-text">

                <strong>
                  Not sure which department? Let VoiCee AI suggest the right one.
                </strong>

                <p>
                  Instantly maps your complaint category to the most relevant County or National ministry.
                  You will review and confirm the suggestion before it is submitted.
                </p>

              </div>

            </div>

            <label className="toggle-switch">

              <input
                type="checkbox"
                name="aiSuggest"
                checked={aiSuggest}
                onChange={(e) => setAiSuggest(e.target.checked)}
              />

              <span className="slider-round" />

            </label>

          </div>

          {/* VALIDATION ERRORS */}

          {formErrors.length > 0 && (

            <div
              className="form-error-summary"
              role="alert"
            >

              <strong>
                Please fix the following before continuing:
              </strong>

              <ul>

                {formErrors.map((err, i) => (
                  <li key={i}>
                    {err}
                  </li>
                ))}

              </ul>

            </div>

          )}

          {/* FORM FOOTER */}

          <div className="form-footer">

            <p className="terms-text">
              By submitting, you agree to VoiCee's Citizen Data Charter.
              Your personal contact details are protected.
            </p>

            <button
              type="submit"
              className="submit-btn"
            >
              {aiSuggest
                ? 'Next: Review AI Suggestion ›'
                : 'Submit Complaint ›'}
            </button>

          </div>

        </form>

      </main>

    </div>
  );
}

export default SubmitComplaint;

