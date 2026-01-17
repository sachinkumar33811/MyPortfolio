import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    name: "ePay – Merchant Onboarding & eKYC Platform",
    short: "A FinTech onboarding platform for merchant registration and KYC automation.",
    details: `ePay is a FinTech onboarding platform built to streamline merchant registration and KYC verification processes. The system automates application number generation, document validation, and regulatory compliance checks, significantly reducing manual onboarding effort.

I worked as a full-stack developer, building secure backend APIs using Laravel and MySQL, and implementing AJAX-based verification flows on the frontend. The platform integrates multiple OCR and compliance services such as Google Vision, AWS Textract, Signzy, and LSEG to validate documents for India and UAE regulatory requirements.

I also developed operational dashboards that allow internal teams to track merchant onboarding status, verification stages, and compliance outcomes in real time.`
  },
  {
    name: "ERP-Ecom System – Omni Sales & Business Automation",
    short: "ERP-Ecom platform for centralized product, sales, and business management.",
    details: `This project involved developing an ERP-Ecom platform that enables businesses to manage products, sales configurations, and operational settings from a single interface. The system focuses on simplifying onboarding by providing centralized default configurations such as language, currency, and country.

I contributed primarily to frontend and backend modules using CodeIgniter, PHP, and MySQL. My work included building responsive product grid components, implementing AJAX-driven interactions, and improving UI presentation through card-based layouts to enhance usability and performance.`
  },
  {
    name: "Aritic – B2B Marketing Automation Platform",
    short: "A B2B marketing automation platform focused on campaign management, analytics, and user engagement workflows.",
    details: `Aritic is a marketing automation platform designed to manage campaigns, user engagement, and analytics for B2B clients. I worked on improving frontend responsiveness and usability while debugging and resolving JavaScript and PHP issues affecting system stability.

My contributions helped improve platform performance, reduce UI bugs, and enhance the overall user experience across different screen sizes.`
  },
  {
    name: "Weather Forecast Application (Personal Project)",
    short: "A responsive weather forecasting web application that displays real-time weather data using third-party APIs.",
    details: `This is a personal React-based project built to explore API integration and cloud deployment. The application fetches real-time weather data from a public API and presents it through a clean, responsive user interface.

The project is deployed on Vercel with CI/CD enabled, ensuring fast performance and automated builds. It demonstrates my understanding of React components, API handling, and production deployment workflows.`
  }
];

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="projects-bg">
      <div className="projects-content">
        <div className="projects-section-title">
          <h2>Projects</h2>
          <p>Some of the real-world and personal projects I have worked on</p>
        </div>
        <div className="projects-container">
          {projects.map((proj, idx) => (
            <div className="project-card" key={proj.name}>
              <h3>{proj.name}</h3>
              <p>{proj.short}</p>
              <button onClick={() => setOpenIndex(idx)}>View Details</button>
              {openIndex === idx && (
                <div className="project-modal">
                  <div className="project-modal-content">
                    <h4>{proj.name}</h4>
                    <pre>{proj.details}</pre>
                    <button onClick={() => setOpenIndex(null)}>Close</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;