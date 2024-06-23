import React from "react";
import "../styles/PortfolioStyle.css";
function Portfolio() {
  return (
    <div id="portfolio">
      <div className="skills-wrapper" id="skills">
        <div className="firstimg-container">
          <div className="card">
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
            <div className="card__content">
              <img src="/images/Ebanking.png" alt="" className="card-image" />
            </div>
          </div>
        </div>
        <div className="firstcontent-container">
          <div className="card__content">
            <div className="heading">
              <h3 className="first">01 🏦 E-Banking System Project 🌐</h3>
            </div>
            <div className="line">
              <br /> 🏦 In my E-Banking System Portfolio Project, I harnessed my
              expertise in Java, Spring Boot, SQL, HTML, CSS, and JavaScript to
              create a customer-centric banking solution. Customers can
              seamlessly manage their accounts, perform secure transactions,
              view detailed transaction histories, and enjoy the flexibility of
              adding or deleting accounts. This project is Tested & deployed via a Jenkins 
              pipeline, so when new commit happens project will be deployed to end user with changes.
              🌐💼🔒🚀
            </div>
          </div>
        </div>

        <br />

        <div className="firstimg-container">
          <div className="card">
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
            <div className="card__content">
              <img src="/images/Predictify.png" alt="" className="card-image" />
            </div>
          </div>
        </div>
        <div className="firstcontent-container second">
          <div className="card__content">
            <div className="heading">
              <h3 className="first">
                02 📊Predictify: Product Correlation Wizard
              </h3>
            </div>
            <div className="line">
              <br /> Predictify, powered by Python and ML, maximizes sales
              potential by revealing product correlations. Import data, gain
              insights, and optimize your business strategy effortlessly.
              Elevate your business decisions with data-driven precision.
              Predictify can be used in malls and stores to tell the corelation
              between the products for better sales. 🚀📊
            </div>
          </div>
        </div>

        <br />

        <div className="firstimg-container">
          <div className="card">
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
            <div className="card__content">
              <img src="/images/test.png" alt="" className="card-image" />
            </div>
          </div>
        </div>
        <div className="firstcontent-container third">
          <div className="card__content">
            <div className="heading">
              <h3 className="first">
                03 📝 Inotebook - Your Digital Notepad 🚀
              </h3>
            </div>
            <div className="line">
              <br /> Inotebook is a secure ReactJS and Express JS project that
              lets you create, update, and delete notes. Built with JWT token
              authentication, it's your go-to digital notepad for organized
              thoughts and ideas. Explore it now!
            </div>
          </div>
        </div>

        <br />

        <div className="firstimg-container">
          <div className="card">
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
            <div className="card__content">
              <img
                src="/images/StudentManagement.png"
                alt=""
                className="card-image"
              />
            </div>
          </div>
        </div>
        <div className="firstcontent-container forth">
          <div className="card__content">
            <div className="heading">
              <h3 className="first">04 📚 Student Management System 🏫</h3>
            </div>
            <div className="line">
              <br /> Discover a dynamic Student Management System which is a
              freelance project powered by Python's Tkinter GUI and SQL,
              designed to streamline student information management for Tulips
              Play School Aurangabad. With features like effortless student
              addition, real-time updates, and Excel data import/export, this
              system ensures efficient and accurate record-keeping, simplifying
              administrative tasks for schools and institutions. Elevate your
              institution's efficiency with this user-friendly solution. 🎓💼
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
