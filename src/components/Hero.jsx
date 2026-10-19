import myImage from "../assets/images/MyImage.jpeg";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-card">
        <div className="hero-left">
          <div className="hero-image-wrapper">
            <img src={myImage} alt="Sachin Kumar" className="hero-image" />
            {/* <span className="badge badge-award">Award-winning</span> */}
            <span className="badge badge-experience">🏆 6+ Years Professional Experience (2+ Years in Web Development)</span>
          </div>
        </div>
        <div className="hero-right">
          <span className="badge badge-freelance">Open to Full-Time Opportunities</span>
          <h1>Hi, I'm <span className="highlight">Sachin Kumar</span></h1>
          <h2>Full-Stack Developer | React.js | PHP & JavaScript</h2>
          <p>Building scalable, user-focused web applications with React and modern web technologies.</p>
          <a href="/sachin_cv_oct.pdf" className="btn btn-primary" style={{ marginLeft: "1rem" }} download target="_blank" rel="noopener noreferrer"> Download Resume </a>
          <div className="hero-stats">
            <div><span className="stat-number">5+</span><span className="stat-label">Production Modules</span></div>
            <div><span className="stat-number">10+</span><span className="stat-label">Features Delivered</span></div>
            <div><span className="stat-number">2+</span><span className="stat-label">Years Industry Experience</span></div>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/sachinkumar33811" target="_blank" rel="noopener noreferrer" className="icon-link">GitHub</a>
            <a href="https://www.linkedin.com/in/sachin-kumar-b11146177/" target="_blank" rel="noopener noreferrer" className="icon-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
