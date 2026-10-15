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
                            Developed a web application to connect farmers with customers,
                            helping improve access to agricultural products and simplify
                            product discovery.
                        </p>

                        <div className="project-technologies">
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>Database</span>
                        </div>

                        <a
                            href="https://github.com/your-username/agro-connect"
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