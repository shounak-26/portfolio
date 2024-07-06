import React from "react";
import "../styles/SkillsStyle.css";

function Portfolio() {
  return (
    <div>
      <div className="skills-wrapper1" id="skills">
        <br />
        <br />
        <br />
        <h3>TECHNICAL SKILLS</h3>
        <br />
        <br />
        <h6>
          I'm a versatile developer proficient in a wide spectrum of technologies. On the frontend, I specialize in crafting delightful user experiences using ⚛️ ReactJS, 🌐 HTML/CSS/JS, 🅱️ Bootstrap, and ⚛️ MaterialUI. When it comes to the backend, I wield the power of ☕ Java, ⚙️ Spring, 🚀 Spring Boot, ⚙️ Spring MVC, 🅱️ Spring Hibernate, and 🐍 Python. These skills enable me to build end-to-end web solutions that seamlessly integrate user-centric design with robust server-side functionality.
        </h6>
        <br />
        <br />

        <div className="row skillsection">
          <div className="skill-item java">
            <h5>
              <strong>
                <img className="javaimg" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" /> &nbsp;JAVA
              </strong>
            </h5>
          </div>
          <div className="skill-item spring">
            <h5>
              <strong>
                <img alt="" className="springimg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" /> &nbsp;Spring
              </strong>
            </h5>
          </div>
          <div className="skill-item python">
            <h5>
              <strong>
                <img className="pythonimg" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" /> &nbsp;Python
              </strong>
            </h5>
          </div>
          <div className="skill-item microservices">
            <h5>
              <strong>
                <img className="microserviceimg" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" /> &nbsp;Microservices
              </strong>
            </h5>
          </div>
          <div className="skill-item sql">
            <h5>
              <strong>
                <img className="sqlimg" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" /> &nbsp;MySQL
              </strong>
            </h5>
          </div>
        </div>

        <div className="row skillsection">
          <div className="skill-item html">
            <h5>
              <strong>
                <img className="htmlimg" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" /> &nbsp;HTML
              </strong>
            </h5>
          </div>
          <div className="skill-item css">
            <h5>
              <strong>
                <img alt="" className="cssimg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" /> &nbsp;CSS
              </strong>
            </h5>
          </div>
          <div className="skill-item javascript">
            <h5>
              <strong>
                <img className="javascriptimg" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /> &nbsp;JavaScript
              </strong>
            </h5>
          </div>
          <div className="skill-item reactjs">
            <h5>
              <strong>
                <img className="reactjsimg" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> &nbsp;ReactJS
              </strong>
            </h5>
          </div>
          <div className="skill-item github">
            <h5>
              <strong>
                <img className="githubimg" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" /> &nbsp;GitHub
              </strong>
            </h5>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Portfolio;
