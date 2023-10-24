import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  Box,
  Button,
  Hidden
} from "@mui/material";
import "../styles/NavbarStyle.css";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ContactMailIcon from "@mui/icons-material/ContactMail";
function Navbar() {

  const pdfUrl =
    "https://drive.google.com/file/d/1LV8axf8F5QF44jH0_qgLIpbVd5TKkixW/view?usp=sharing";

  const handleButtonClick = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div style={{ backgroundColor: "#151515" }}>
      <AppBar
        className="navbar"
        position="static"
        sx={{ backgroundColor: "#151515", boxShadow: "none" }}
      >
        <Container>
          <Toolbar className="main">
            <IconButton className="icon">
              <Avatar
                sx={{
                  boxShadow: "initial",
                  height: "8vh",
                  width: "8vh",
                }}
                alt="Remy Sharp"
                src="/images/profilePhotoMod.png"
              />
            </IconButton>

            <Typography
              variant="h5"
              marginLeft={4}
              letterSpacing={2}
              className="name"
            >
              Shounak Purnapatre
            </Typography>

            <Hidden xsDown>
              {/* Hide these buttons on screens smaller than "sm" */}
              <Box
                className="box"
                sx={{
                  flexGrow: 1,
                  display: { md: "flex" },
                  justifyContent: "end",
                }}
              >
                <ScrollLink
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <Button
                    className="navButtons hvr-float"
                    sx={{
                      my: 2,
                      mx: 3,
                      color: "whitesmoke",
                    }}
                    endIcon={<AutoAwesomeMotionIcon />}
                  >
                    Portfolio
                  </Button>
                </ScrollLink>

                <Button
                  className="navButtons"
                  sx={{ my: 2, mx: 3, color: "whitesmoke" }}
                  endIcon={<PictureAsPdfIcon />}
                  onClick={handleButtonClick}
                >
                  Resume
                </Button>
                <a
       
                  href="https://drive.google.com/file/d/1M93ioSSQX_XsuUKETqwsaZEiVbHrxAWa/view?usp=drive_link"
                  download="shounakResume.pdf"
                  style={{ display: "none" }}
                >
                  Download PDF
                </a>
                <ScrollLink
                  activeClass="active"
                  to="contact-us"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <Button
                    className="navButtons"
                    sx={{ my: 2, mx: 3, color: "whitesmoke" }}
                    endIcon={<ContactMailIcon />}
                  >
                    Contact Us
                  </Button>
                </ScrollLink>
              </Box>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
