import { Container, Typography } from "@mui/material";
import React from "react";
import "../styles/DashboardStyle.css";
import "animate.css";
import Experience from "../components/Experience";

function Dashboard() {
  return (
    <div>
      <div className="dashboardmain">
        <Container className="hello">
          <Typography className="text animate__animated animate__tada">
            Hello🖐, I am Shounak!
          </Typography>
          <Typography className="text2 animate__animated animate__lightSpeedInLeft">
            Full-Stack Pixel 🎨 Painter 🌐
            <br />
            <br />
            Mastering the Art of User-Centric <br />
            <br />
            Design & Code 🎉✨
          </Typography>
        </Container>
        <Container className="secondcontainer animate__animated animate__fadeIn">
          <img className="static-image" alt="" src="/images/sampleimg.jpg" />
          <img className="animated-gif" alt="" src="/images/sample.gif" />
        </Container>
      </div>
      <div className="experience">
        <Experience />
      </div>
    </div>
  );
}

export default Dashboard;
