import React from "react";
import "../styles/ContactStyle.css";
import { Link } from "react-scroll";
function Contact() {
  function openExternalLink(url) {
    window.open(url, "_blank");
  }
  return (
    <div className="contactus" id="contact-us">
      <div className="contact">
        <div className="Contact-card">
          <span>About Me</span>
          <br />
          <p className="info">
            I am Shounak Purnapatre, currently a Software Engineer II at
            Rockwell Automation, specializing in full-stack development with
            over 3 years of experience in Java 8, Spring Boot, and ReactJS. I
            have a strong background in building scalable applications,
            including microservices and RESTful APIs, and am proficient in AWS,
            DataDog, and CI/CD pipelines. Additionally, I am eager to explore
            the MERN stack and collaborate on innovative projects. Connect with
            me on social profiles—I’d love to expand my network and welcome you
            to my professional circle! 😄
          </p>
          <div className="share">
            <Link
              className="social"
              style={{ fontSize: "1.9em" }}
              onClick={() =>
                openExternalLink(
                  "https://github.com/shounak-26/"
                )
              }
            >
              <i class="devicon-github-original-wordmark"></i>
            </Link>

            <Link
              className="social"
              style={{ fontSize: "1.9em" }}
              onClick={() =>
                openExternalLink(
                  "https://www.linkedin.com/in/shounak-purnapatre/"
                )
              }
            >
              <i class="devicon-linkedin-plain colored"></i>
            </Link>

            <Link
              className="social"
              style={{ fontSize: "1.9em" }}
              onClick={() =>
                openExternalLink(
                  "https://leetcode.com/u/_s_h_o_u_n_a_k_/"
                )
              }
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" />
            </Link>

            <Link
              className="social"
              onClick={() =>
                openExternalLink("https://www.instagram.com/_s_h_o_u_n_a_k_/")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;