import { Container, Typography } from "@mui/material";
import React from "react";
import "../styles/DashboardStyle.css";

function Dashboard() {
  return (
    <div className="dashboardmain">
      <Container className="hello">
        <Typography className="text">Hello🖐, I am Shounak!</Typography>
        <Typography className="text2">
          Full-Stack Pixel 🎨 Painter 🌐
          <br />
          <br />
          Mastering the Art of User-Centric <br />
          <br />
          Design and Code 🎉✨
        </Typography>
      </Container>
      <Container className="secondcontainer">
        <div className="image-container">
          <img
            className="static-image"
            alt="" 
            src="/images/sampleimg.jpg"
          />
          <img
            className="animated-gif"
            alt="" 
            src="/images/sample.gif"
          />
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
