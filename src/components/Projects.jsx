import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Projects.css";

const projects = [
  {
    title: "CloudLayer & MMS",
    subtitle: "Payment Operations & Reporting Platform",
    short: "Payment applications for transaction management, large-scale reporting, and merchant administration.",
    overview: "Payment-related applications that support payment operations, transaction management, reporting, and merchant administration. They handle online and settlement transactions and let users and administrators access transaction data and monitor business activity.",
    features: [
      "Online and settlement transaction management",
      "Large transaction report handling",
      "CSV report generation and downloading",
      "Report History for accessing generated reports",
      "Admin dashboard and merchant activity analysis",
      "Revenue summaries and sales/MDR charts"
    ],
    contributions: [
      "Implemented large transaction report handling on both CloudLayer and MMS for Online and Settlement Transactions, including the large-report workflow and CSV report access.",
      "Built the Portfolio View Admin Dashboard with merchant activity metrics, active merchant ratios, revenue summaries, monthly sales volume and MDR charts, and end-of-month projections.",
      "Added key insights, a summary table, a Top 5 Merchants section, and historical-date selection to the dashboard."
    ],
    tech: ["PHP", "Laravel", "MySQL", "REST APIs", "JavaScript", "HTML / CSS", "Git / GitHub", "Linux / Apache"]
  },
  {
    title: "Honore Bakery",
    subtitle: "ERP & E-commerce Platform",
    short: "An integrated ERP and e-commerce platform for bakery operations and online orders.",
    overview: "An integrated ERP and e-commerce platform for managing bakery operations and online orders through connected business workflows.",
    features: [
      "Production dashboard and FIFO inventory management",
      "Customer-specific pricing and B2B discounts",
      "GST, packing and delivery charge calculations",
      "Razorpay payments and unpaid-order detection",
      "Invoice and tax reporting"
    ],
    contributions: [
      "Enhanced backend business logic and inventory workflows.",
      "Fixed pricing, discount and tax calculation issues.",
      "Worked on checkout, OTP authentication and payment-related flows."
    ],
    tech: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript", "jQuery / AJAX", "REST APIs"]
  },
  {
    title: "Aritic",
    subtitle: "Marketing Automation, CRM & Customer Support SaaS",
    short: "A multi-tenant SaaS platform built on Mautic, extended with CRM, helpdesk, campaign automation, and omnichannel messaging capabilities for business clients.",
    overview: "Aritic is a multi-tenant SaaS platform built on Mautic and extended to provide marketing automation, CRM, customer support, and omnichannel communication capabilities. It enables businesses to manage contacts, automate campaigns, track customer engagement, manage sales pipelines, and handle customer support through an integrated platform.",
    features: [
      ["Marketing Automation", "Campaign management, lead scoring, contact segmentation, email marketing, and automated engagement workflows."],
      ["CRM & Sales Management", "Deal management, sales pipelines, sales stages, and Kanban-based deal tracking."],
      ["Helpdesk & Customer Support", "Ticket management, unified inbox, and email-to-ticket integration."],
      ["Omnichannel Communication", "Live chat, WhatsApp, SMS, and other messaging channel integrations."],
      ["Third-Party Integrations", "Microsoft 365 email integration using Microsoft Graph API, OAuth2, and webhooks."],
      ["Background Processing", "Scheduled tasks and queue-based processing for supported workflows."]
    ],
    contributions: [
      "Worked on frontend improvements and resolved JavaScript and PHP issues across application modules.",
      "Investigated existing application workflows to identify and fix functional issues.",
      "Improved UI responsiveness, usability, and consistency across different screen sizes.",
      "Supported debugging and maintenance of existing marketing automation and customer engagement features."
    ],
    tech: ["PHP", "Symfony 2.8", "Mautic", "MySQL", "Doctrine ORM", "JavaScript", "jQuery", "HTML", "CSS", "REST APIs", "Git"]
  },
  {
    title: "Weather Forecast Application",
    subtitle: "Personal Project",
    short: "A responsive weather forecasting web application that displays real-time weather data using third-party APIs.",
    overview: "A personal React-based project built to explore API integration and cloud deployment. It fetches real-time weather data from a public API and presents it through a clean, responsive interface.",
    features: [
      "Real-time weather data from a public API",
      "Clean, responsive user interface",
      "Deployed on Vercel with CI/CD and automated builds"
    ],
    contributions: [
      "Built the UI with reusable React components.",
      "Implemented API handling for fetching and displaying weather data.",
      "Set up production deployment on Vercel with CI/CD."
    ],
    tech: ["React", "JavaScript", "REST APIs", "Vercel"]
  }
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div className="project-modal" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal-header">
          <div>
            <h4>{project.title}</h4>
            <p>{project.subtitle}</p>
          </div>
          <button className="project-modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="project-modal-body">
          <h5>Project Overview</h5>
          <p>{project.overview}</p>

          <h6>Key Features</h6>
          <ul>
            {project.features.map((f) =>
              Array.isArray(f) ? (
                <li key={f[0]}><strong>{f[0]}:</strong> {f[1]}</li>
              ) : (
                <li key={f}>{f}</li>
              )
            )}
          </ul>

          <h6>My Contributions</h6>
          <ul>
            {project.contributions.map((c) => <li key={c}>{c}</li>)}
          </ul>

          <h6>Technology Stack</h6>
          <div className="project-tech">
            {project.tech.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

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
            <div className="project-card" key={proj.title}>
              <h3>{proj.title} – {proj.subtitle}</h3>
              <p>{proj.short}</p>
              <button onClick={() => setOpenIndex(idx)}>View Details</button>
            </div>
          ))}
        </div>
      </div>
      {openIndex !== null && (
        <ProjectModal project={projects[openIndex]} onClose={() => setOpenIndex(null)} />
      )}
    </div>
  );
}

export default Projects;
