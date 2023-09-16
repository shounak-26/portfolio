import { Container, Typography, Avatar } from "@mui/material";
import React from "react";
import "../styles/DashboardStyle.css";
import 'animate.css';

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
      <Container
        className="secondcontainer"
      >
        <Avatar className="avatar animate__animated animate__pulse"
                alt="Remy Sharp"
                src="/images/sample.gif"
              />
      </Container>
    </div>
  );
}

export default Dashboard;
