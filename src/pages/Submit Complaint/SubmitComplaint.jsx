
import React, { useState } from "react";
import "./submitComplaint.css";
import { FaBullhorn } from "react-icons/fa";
function SubmitComplaint() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [department, setDepartment] = useState("");
    const [description, setDescription] = useState("");
    const [aiSuggest, setAiSuggest] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Complaint Submitted Securely");
        console.log("Name:", fullName);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Location:", location);
        console.log("Title:", title);
        console.log("Category:", category);
        console.log("Department:", department);
        console.log("Description:", description);
        console.log("AI Suggest:", aiSuggest);
    }

    return (
        <div className="voicee-container">

            <header className="voicee-header">

                <div className="header-logo">
                    <div className="logo-icon">
    <FaBullhorn />
</div>

                    <span>VoiCee</span>
                </div>

                <nav className="header-nav">
                    <a href="#home">Home</a>
                    <a href="#submit" className="active">
                        Submit Complaint
                    </a>
                    <a href="#analysis">Community Analysis</a>
                    <a href="#about">About</a>
                </nav>

            </header>

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

                <form onSubmit={handleSubmit} className="complaint-card">

                    <div className="form-row">

                        <div className="form-group">
                            <label>Full Name</label>

                            <div className="input-with-icon">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="e.g. John Kamau"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />

                                <span className="input-svg-icon">✏️</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>

                            <div className="input-with-icon">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="e.g. john@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <span className="input-svg-icon">✏️</span>
                            </div>
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label>Phone Number</label>

                            <div className="input-with-icon">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="e.g. 0712 345 678"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                                <span className="input-svg-icon">✏️</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>County / Location</label>

                            <div className="select-wrapper">
                                <select
                                    name="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                >
                                    <option value="">
                                        e.g. Nairobi, Westlands
                                    </option>

                                    <option value="nairobi">Nairobi</option>
                                    <option value="mombasa">Mombasa</option>
                                    <option value="kisumu">Kisumu</option>
                                    <option value="nakuru">Nakuru</option>
                                    <option value="kiambu">Kiambu</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="form-group full-width">

                        <label>Complaint Title</label>

                        <div className="input-with-icon">
                            <input
                                type="text"
                                name="title"
                                placeholder="e.g. Broken water pipe on Moi Avenue"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <span className="input-svg-icon">✏️</span>
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Category</label>

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
                                        Water & Sanitation
                                    </option>

                                    <option value="roads">
                                        Roads & Transport
                                    </option>

                                    <option value="infrastructure">
                                        Housing & Public Works
                                    </option>

                                    <option value="health">
                                        Healthcare Services
                                    </option>

                                    <option value="security">
                                        Security & Administration
                                    </option>

                                    <option value="power">
                                        Energy & Electricity
                                    </option>

                                    <option value="environment">
                                        Environment & Forestry
                                    </option>
                                </select>

                            </div>

                        </div>

                        <div className="form-group">

                            <label>Department</label>

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

                    <div className="form-group full-width">

                        <label>Complaint Description</label>

                        <textarea
                            name="description"
                            placeholder="Describe your issue clearly and include relevant details such as location, dates, and what has happened so far."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="5"
                        ></textarea>

                    </div>

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
                                    Instantly analyze your description to map it accurately to County or National ministries.
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

                            <span className="slider-round"></span>

                        </label>

                    </div>

                    <div className="form-footer">

                        <p className="terms-text">
                            By submitting, you agree to VoiCee's Citizen Data Charter. Your personal contact details are protected.
                        </p>

                        <button type="submit" className="submit-btn">
                            Submit Complaint &gt;
                        </button>

                    </div>

                </form>

            </main>

        </div>
    );
}

export default SubmitComplaint;


