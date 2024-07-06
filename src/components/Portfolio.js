import React from "react";
import "../styles/PortfolioStyle.css";

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="skills-wrapper" id="skills">
        <div className="card first">
          <img src="/images/Ebanking.png" alt="E-Banking System" className="card-image" />
          <div className="card-content ">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="heading">
              <h3>01 🏦 E-Banking System Project 🌐</h3>
            </div>
            <div className="line">
              🏦 In my E-Banking System Portfolio Project, I harnessed my expertise in Java, Spring Boot, SQL, HTML, CSS, and JavaScript to create a customer-centric banking solution. Customers can seamlessly manage their accounts, perform secure transactions, view detailed transaction histories, and enjoy the flexibility of adding or deleting accounts. This project is Tested & deployed via a Jenkins pipeline, so when new commit happens project will be deployed to end user with changes. 🌐💼🔒🚀
            </div>
          </div>
        </div>

        <div className="card second">
          <img src="/images/Predictify.png" alt="Predictify: Product Correlation Wizard" className="card-image" />
          <div className="card-content">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="heading">
              <h3>02 📊Predictify: Product Correlation Wizard</h3>
            </div>
            <div className="line">
              Predictify, powered by Python and ML, maximizes sales potential by revealing product correlations. Import data, gain insights, and optimize your business strategy effortlessly. Elevate your business decisions with data-driven precision. Predictify can be used in malls and stores to tell the correlation between the products for better sales. 🚀📊
            </div>
          </div>
        </div>

        <div className="card third">
          <img src="/images/test.png" alt="Inotebook - Your Digital Notepad" className="card-image" />
          <div className="card-content">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="heading">
              <h3>03 📝 Inotebook - Your Digital Notepad 🚀</h3>
            </div>
            <div className="line">
              Inotebook is a secure ReactJS and Express JS project that lets you create, update, and delete notes. Built with JWT token authentication, it's your go-to digital notepad for organized thoughts and ideas. Explore it now!
            </div>
          </div>
        </div>

        <div className="card forth">
          <img src="/images/StudentManagement.png" alt="Student Management System" className="card-image" />
          <div className="card-content">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="heading">
              <h3>04 🏫 Student Management System 🏫</h3>
            </div>
            <div className="line">
              Discover a dynamic Student Management System which is a freelance project powered by Python's Tkinter GUI and SQL, designed to streamline student information management for educational institutions. It allows for seamless student addition, real-time updates, and efficient tracking of academic records.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
