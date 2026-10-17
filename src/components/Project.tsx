import React from "react";
import agro from "../assets/images/agro.png";
import "../assets/styles/Project.scss";

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>

            <div className="projects-grid">
                <div className="project">
                    <div className="project-image">
                        <img
                            src={agro}
                            className="zoom"
                            alt="Agro Connect project preview"
                        />
                    </div>

                    <div className="project-content">
                        <h2>Agro Connect</h2>

                        <p>
                            Developed a full-stack web application connecting farmers
                            and consumers, featuring product management, responsive
                            interfaces, and secure REST API integration. Implemented
                            CRUD operations, input validation, and optimized database
                            queries to improve application reliability and data integrity.
                        </p>

                        <div className="project-technologies">
                            <span>React.js</span>
                            <span>TypeScript</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MySQL</span>
                            <span>REST APIs</span>
                            <span>GitHub Actions CI/CD</span>
                        </div>

                        <a
                            href="3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-button"
                        >
                            View Project ↗
                        </a>
                    </div>
                </div>

                {/* Add another project here using the same design */}

                {/*
                <div className="project">
                    <a
                        href="https://your-project-url.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock02}
                            className="zoom"
                            alt="Project thumbnail"
                            width="100%"
                        />
                    </a>

                    <a
                        href="https://your-project-url.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Your Next Project</h2>
                    </a>

                    <p>
                        Add your project description here.
                    </p>
                </div>
                */}
            </div>
        </div>
    );
}

export default Project;