import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="#" alt="Avatar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Vijayakumar-22"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/vijayakumar-k93"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <a
              href="/Vijayakumar_Resume.pdf"
              download="Vijayakumar_Resume.pdf"
              className="resume-btn"
            >
              Download Resume
            </a>
          </div>

          <h1>Vijayakumar K</h1>
          <p>Full-Stack Developer | Application Support Engineer</p>


          <div className="mobile_social_icons">
            <a
              href="https://github.com/Vijayakumar-22"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/vijayakumar-k93"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <a
              href="/Vijayakumar_Resume.pdf"
              download="Vijayakumar_Resume.pdf"
              className="resume-btn"
            >
              Download Resume
            </a>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Main;
