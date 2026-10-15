import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
    "React.js",
    "Node.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "REST APIs",
];

const labelsSecond = [
    "Java",
    "C",
    "C++",
    "PHP",
    "Laravel",
    "OOP",
    "Data Structures & Algorithms",
    "SDLC",
];

const labelsThird = [
    "MySQL",
    "PostgreSQL",
    "Redis (Basic)",
    "SQL Queries",
    "Git",
    "GitHub",
    "Postman",
    "Linux (Ubuntu)",
    "Windows",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Technical Skills</h1>

                <div className="skills-grid">
                    {/* Frontend & Backend */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full-Stack Web Development</h3>
                        <p>
                            Experienced in developing responsive web
                            applications and REST APIs using React.js,
                            Node.js, PHP Laravel, and modern web technologies.
                            Focused on clean code, functionality, and
                            user-friendly interfaces.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label) => (
                                <Chip
                                    key={label}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Programming Languages */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faNodeJs} size="3x" />
                        <h3>Programming & Core Concepts</h3>
                        <p>
                            Knowledge of multiple programming languages,
                            object-oriented programming, data structures,
                            algorithms, debugging, and software development
                            fundamentals.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labelsSecond.map((label) => (
                                <Chip
                                    key={label}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Database, Tools & Operating Systems */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Database, Tools & Linux</h3>
                        <p>
                            Experienced in SQL queries, CRUD operations,
                            database management, application deployment,
                            Linux server support, log monitoring, and
                            version control using Git.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label) => (
                                <Chip
                                    key={label}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
