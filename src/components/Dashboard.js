import { Container, Typography, Avatar } from "@mui/material";
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
      <Container
        className="secondcontainer"
      >
        <Avatar className="avatar"
                alt="Remy Sharp"
                src="/images/Testing.gif"
              />
      </Container>
    </div>
  );
}

export default Dashboard;
