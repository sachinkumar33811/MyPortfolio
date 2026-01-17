import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaDatabase, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiSymfony, SiMysql, SiPostman } from "react-icons/si";

function Skills() {
  return (
    <div className="skills-bg">
      <div className="skills-content">
        <div className="skills-section-title">
          <h2>Skills</h2>
          <p>Technologies I Work With</p>
        </div>
        <div className="skills-container">
          <div className="skill-card">
            <h3><FaReact style={{ color: "#61DAFB" }} /> Frontend</h3>
            <div className="skills-list">
              <span><FaHtml5 style={{ color: "#e34c26" }} /> HTML</span>
              <span><FaCss3Alt style={{ color: "#1572B6" }} /> CSS</span>
              <span><FaJs style={{ color: "#F7DF1E" }} /> JavaScript</span>
              <span><FaReact style={{ color: "#61DAFB" }} /> React</span>
            </div>
          </div>
          <div className="skill-card">
            <h3><FaPhp style={{ color: "#8993BE" }} /> Backend</h3>
            <div className="skills-list">
              <span><FaPhp style={{ color: "#8993BE" }} /> PHP</span>
              <span><FaLaravel style={{ color: "#FF2D20" }} /> Laravel</span>
              <span><SiSymfony style={{ color: "#000" }} /> Symfony</span>
            </div>
          </div>
          <div className="skill-card">
            <h3><FaDatabase style={{ color: "#FACC15" }} /> Database</h3>
            <div className="skills-list">
              <span><SiMysql style={{ color: "#00758F" }} /> MySQL</span>
              <span><SiMysql style={{ color: "#00758F" }} /> Database Design</span>
            </div>
          </div>
          <div className="skill-card">
            <h3><FaGitAlt style={{ color: "#F05032" }} /> Tools</h3>
            <div className="skills-list">
              <span><FaGitAlt style={{ color: "#F05032" }} /> Git</span>
              <span><SiPostman style={{ color: "#FF6C37" }} /> Postman</span>
              <span><FaLinux style={{ color: "#FCC624" }} /> Linux (Ubuntu)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;