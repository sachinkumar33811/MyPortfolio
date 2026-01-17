import './Experience.css';
import { FaReact, FaLaravel, FaCode } from "react-icons/fa";
import { SiJavascript, SiCodeigniter, SiSymfony, SiMysql } from "react-icons/si";

function Experience() {
    return (
        <div className="experience-bg">
            <div className="experience-content">
                <div className="experience-section-title">
                    <h2>Experience</h2>
                    <p>My professional journey and key responsibilities</p>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="timeline-card">
                            <h3>DataAegis Software Pvt Ltd — Bengaluru, India</h3>
                            <span className="company">Full-Stack Developer</span>
                            <span className="timeline-date-inside">Jan 2024 – Present</span>
                            <div className="exp-list">
                                <div className="exp-item">👉 Built and maintained FinTech, ERP, and marketing automation platforms supporting real-world business operations.</div>
                                <div className="exp-item">👉 Developed reusable React.js components with focus on performance, accessibility, and responsive UI design.</div>
                                <div className="exp-item">👉 Integrated MomentPay payment gateway using secure iframe-based checkout and API-driven transaction flows.</div>
                                <div className="exp-item">👉 Designed and consumed REST APIs using Laravel, Symfony, and CodeIgniter with MySQL database integration.</div>
                            </div>
                            <div className="tech-badges">
                                <span><FaReact /> React</span>
                                <span><SiJavascript /> JavaScript</span>
                                <span><FaLaravel /> Laravel</span>
                                <span><SiCodeigniter /> CodeIgniter</span>
                                <span><SiSymfony /> Symfony</span>
                                <span><SiMysql /> MySQL</span>
                                <span><FaCode /> REST APIs</span>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="timeline-card">
                            <h3>Jindal India Ltd — Howrah, India</h3>
                            <span className="company">Shift Engineer</span>
                            <span className="timeline-date-inside">Jul 2021 – Dec 2023</span>
                            <div className="exp-list">
                                <div className="exp-item">👉 Managed daily production operations and shift planning to meet manufacturing targets.</div>
                                <div className="exp-item">👉 Coordinated with cross-functional teams to ensure quality control and safety compliance.</div>
                                <div className="exp-item">👉 Worked with SAP systems for production tracking, reporting, and MIS documentation.</div>
                                <div className="exp-item">👉 Contributed to process optimization initiatives and demonstrated strong team leadership.</div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="timeline-card">
                            <h3>Indian Steel Corporation Ltd — Gandhidham, India</h3>
                            <span className="company">Trainee Engineer</span>
                            <span className="timeline-date-inside">July 2019 – June 2021</span>
                            <div className="exp-list">
                                <div className="exp-item">👉 Assisted in production planning and material flow management.</div>
                                <div className="exp-item">👉 Prepared MIS reports and monitored operational efficiency.</div>
                                <div className="exp-item">👉 Built strong foundation in industrial processes and teamwork.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;