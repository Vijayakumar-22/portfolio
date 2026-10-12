
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
    return (
        <footer>
            <div className="footer-social-icons">
                <a
                    href="https://github.com/Vijayakumar-22"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <GitHubIcon />
                </a>

                <a
                    href="https://www.linkedin.com/in/vijayakumar-k93"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <LinkedInIcon />
                </a>
            </div>

           © {new Date().getFullYear()} Vijayakumar K. All rights reserved.
        </footer>
    );
}

export default Footer;
