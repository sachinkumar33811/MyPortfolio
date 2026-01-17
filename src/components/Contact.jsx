import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [thankYou, setThankYou] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would add email sending logic (e.g. EmailJS, backend API)
    setThankYou(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-bg">
      <div className="contact-content">
        <div className="contact-section-title">
          <h2>Contact Me</h2>
          <p>Let’s connect and discuss opportunities, projects, or collaborations</p>
        </div>
        <div className="contact-main">
          <div className="contact-info">
            <div>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:sroy33811@gmail.com">sroy33811@gmail.com</a>
            </div>
            <div>
              <FaLinkedin className="contact-icon" />
              <a href="https://www.linkedin.com/in/sachin-kumar-b11146177/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/sachin-kumar-b11146177
              </a>
            </div>
            <div>
              <FaGithub className="contact-icon" />
              <a href="https://github.com/sachinkumar33811" target="_blank" rel="noopener noreferrer">
                github.com/sachinkumar33811
              </a>
            </div>
            <div className="contact-cta">
              I’m open to full-time roles, freelance projects, and remote opportunities.
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Write your message here…"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
            {thankYou && (
              <div className="thank-you-message">
                Thank you for reaching out!
              </div>
            )}
          </form>
        </div>
        <div className="contact-footer">
          © 2026 Sachin Kumar — Built with React
        </div>
      </div>
    </div>
  );
}

export default Contact;