# VoiCee

VoiCee is a Kenyan public-service complaint platform that allows citizens to submit complaints about government and public services, receive a department suggestion based on their complaint, and view complaints shared with the community.

The project is designed as a simple, accessible, and responsive web application that demonstrates how technology can make it easier for citizens to report public-service issues and identify the appropriate department to handle them.

---

## 1. Project Purpose

The purpose of VoiCee is to provide citizens with a simple way to:

- Submit public-service complaints.
- Provide information about the location and nature of a complaint.
- Receive an automated department suggestion.
- Review and change the suggested department before submitting.
- Receive a complaint reference number.
- View submitted complaints through the community section.
- Support or disagree with community complaints.
- View complaint details.
- Analyse complaint trends and categories.

The department suggestion system is rule-based. It uses predefined categories, keywords, counties, and department information stored within the project. No external AI API is required.

---

## 2. Technologies Used

### Frontend

- React
- JavaScript (JSX)
- HTML5
- CSS3
- Vite

### Libraries

- React Icons
- EmailJS Browser SDK

### Data Storage

- JSON
- Browser LocalStorage

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

## 3. Requirements / Prerequisites

Before running the project, make sure the following are installed:

- Node.js
- npm
- Git (optional, but recommended)
- A modern web browser
- Visual Studio Code or another code editor

You can check whether Node.js and npm are installed by running:

```bash
node -v
npm -v
````

A recent LTS version of Node.js is recommended.

---

## 4. Installation

Clone the repository:

```bash
git clone https://github.com/adannuryusuf/VoiCee.git
```

Move into the project directory:

```bash
cd VoiCee
```

Install the project dependencies:

```bash
npm install
```

After the installation is complete, the project is ready to run.

---

## 5. npm Installation

The project dependencies are installed using:

```bash
npm install
```

If a specific dependency is missing, it can be installed using npm.

For example, React Icons:

```bash
npm install react-icons
```

EmailJS:

```bash
npm install @emailjs/browser
```

The dependencies are normally already listed in `package.json`, so running:

```bash
npm install
```

should install the required packages automatically.

---

## 6. How to Run the Project

Start the Vite development server:

```bash
npm run dev
```

Vite will display a local development address in the terminal, usually similar to:

```text
http://localhost:5173
```

Open the displayed address in a web browser.

The application automatically updates when source files are changed during development.

---

## 7. How to Build the Project

To create a production build:

```bash
npm run build
```

The production files will be generated in the:

```text
dist/
```

directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 8. Project Structure

The main project structure is:

```text
VoiCee/
│
├── public/
│   └── assets/
│       └── icons.svg
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── StatCard.jsx
│   │
│   ├── data/
│   │   ├── complaints.json
│   │   └── departments.js
│   │
│   ├── pages/
│   │   │
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── about.css
│   │   │
│   │   ├── Analysis/
│   │   │   ├── Analysis.jsx
│   │   │   └── analysis.css
│   │   │
│   │   ├── Community/
│   │   │   ├── Community.jsx
│   │   │   └── community.css
│   │   │
│   │   ├── Complaint Details/
│   │   │   ├── ComplaintDetails.jsx
│   │   │   └── complaintDetails.css
│   │   │
│   │   ├── Confirmation/
│   │   │   ├── Confirmation.jsx
│   │   │   └── confirmation.css
│   │   │
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── home.css
│   │   │
│   │   ├── Submit Complaint/
│   │   │   ├── SubmitComplaint.jsx
│   │   │   └── submitComplaint.css
│   │   │
│   │   └── Suggestion/
│   │       ├── Suggestion.jsx
│   │       └── suggestion.css
│   │
│   ├── utils/
│   │   └── voicee.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 9. Main Functionality

### Home Page

The home page introduces VoiCee and explains how the platform works.

Users can navigate to the complaint submission, community, analysis, and information sections.

### Complaint Submission

Users can submit information including:

* Full name
* Email
* Phone number
* County
* Complaint title
* Complaint category
* Department
* Complaint description

The form validates important fields before submission.

### Department Suggestion

VoiCee can suggest a department based on the information provided by the user.

The system uses predefined rules and keyword matching.

For example:

```text
Road
Pothole
Highway
Bridge
Traffic
```

can result in:

```text
Roads & Infrastructure
```

Similarly:

```text
Water
Pipe
Sewage
Borehole
```

can result in:

```text
Water & Sanitation
```

The user can accept the suggested department or choose another department.

### Complaint Reference Number

Each submitted complaint receives a unique reference number in a format similar to:

```text
VOI-2026-123456
```

This allows complaints to be identified within the application.

### Confirmation

After the department has been confirmed, the user receives a confirmation screen containing information about the submitted complaint.

### Community

The Community page displays complaints that have been stored in the application.

Users can view complaint information and open individual complaint details.

### Complaint Details

The Complaint Details page provides more information about an individual complaint.

Users can also interact with community feedback, including support and disagreement actions.

### Analysis

The Analysis page provides information about complaint data, such as categories and complaint trends.

### Local Storage

Submitted complaints are stored in the browser using:

```text
localStorage
```

This allows the data to remain available when the page is refreshed on the same browser.

---

## 10. Configuration Requirements

The project does not require an external AI API.

The department suggestion system is implemented locally using JavaScript rules and the department information in:

```text
src/data/departments.js
```

Complaint sample data is stored in:

```text
src/data/complaints.json
```

The application stores newly submitted complaints in the browser's LocalStorage using the key:

```text
voicee_complaints
```

### EmailJS

If EmailJS functionality is enabled, the project requires the appropriate EmailJS service, template, and public key configuration.

EmailJS is used for sending complaint-related emails from the frontend.

No Claude, OpenAI, Gemini, or other external AI API is required.

---

## 11. Assumptions

The project operates under the following assumptions:

1. Users have access to a modern web browser.

2. Users provide valid information when submitting complaints.

3. Department information contained in `departments.js` is accurate and up to date for the purposes of the demonstration.

4. Keyword matching provides a reasonable department suggestion for common complaint types.

5. The application is primarily a frontend demonstration.

6. LocalStorage is sufficient for demonstrating complaint persistence during development.

7. Users are responsible for reviewing the suggested department before confirming a complaint.

8. The project does not assume that the automated department suggestion is always correct.

---

## 12. Known Limitations

### Frontend-Only Application

VoiCee currently operates primarily as a frontend application.

There is no dedicated backend server or production database.

### LocalStorage

Complaint data is stored in the user's browser.

This means:

* Data is not automatically shared between different devices.
* Clearing browser storage can remove the stored complaints.
* Different users do not share the same LocalStorage database.
* The application is not suitable for production-scale data storage in its current form.

### Rule-Based Department Suggestion

The department suggestion system does not use machine learning or an external AI service.

It uses predefined keywords and department rules.

Therefore, it may not correctly understand complaints containing unusual wording, spelling errors, or topics that are not covered by the predefined rules.

### Email Delivery

Email functionality depends on the configuration and availability of the EmailJS service.

A frontend-only application cannot provide the same level of control and security as a dedicated backend email service.

### Authentication

The current version does not include user accounts or authentication.

### Government Integration

VoiCee is not directly connected to government systems.

Submitting a complaint through the demonstration does not automatically create a case inside an official government database.

### Data Validation

The application performs basic frontend validation, but production systems would require stronger server-side validation and security controls.

### Production Security

The current project is designed as a student/competition demonstration and should not be considered a production government complaint-management system without additional backend security, authentication, database infrastructure, privacy controls, and administrative systems.

---

## 13. Future Improvements

Possible future improvements include:

* Backend API development.
* Secure database storage.
* User authentication.
* Government department integration.
* Secure server-side email processing.
* Complaint status tracking.
* File and evidence uploads.
* Administrative dashboards.
* Improved search and filtering.
* More advanced complaint classification without relying on external AI APIs.
* Notifications for complaint status changes.
* Improved accessibility.
* Stronger security and privacy controls.

---

## License

This project was developed as an educational and competition project.

The project is intended to demonstrate the development of a citizen-focused public-service complaint platform using modern frontend technologies.
