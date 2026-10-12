import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          {/* Current Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="Aug 2025 - Present"
            iconStyle={{
              background: "#5000ca",
              color: "#fff",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Junior Full-Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Wipnttech, Karaikudi
            </h4>
            <p>
              Developing and maintaining full-stack web applications using
              React.js, Node.js, PHP Laravel, JavaScript, and Tailwind CSS.
              Managing MySQL databases, deploying applications on Linux
              Ubuntu servers, resolving production issues, and using Git
              for version control.
            </p>
          </VerticalTimelineElement>

          {/* Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2024 - Mar 2025"
            iconStyle={{
              background: "#5000ca",
              color: "#fff",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Web Development Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Leadpro Infotech, Coimbatore
            </h4>
            <p>
              Developed responsive web interfaces using React.js, HTML,
              CSS, JavaScript, and Bootstrap. Worked with PHP and MySQL
              for backend functionality, database operations, application
              deployment, and performance improvements.
            </p>
          </VerticalTimelineElement>

          {/* Master's Degree */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jun 2023 - Apr 2025"
            iconStyle={{
              background: "#c8a951",
              color: "#fff",
            }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              M.Sc. Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hindusthan College of Arts & Science
            </h4>
            <p>
              Postgraduate studies focused on computer science,
              programming, databases, and software development.
            </p>
          </VerticalTimelineElement>

          {/* Bachelor's Degree */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jun 2020 - May 2023"
            iconStyle={{
              background: "#c8a951",
              color: "#fff",
            }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              B.Sc. Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pavendar Bharathidasan College of Arts & Science
            </h4>
            <p>
              Built a foundation in programming, object-oriented
              programming, databases, and computer science fundamentals.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
