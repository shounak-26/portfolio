import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  Box,
  Button,
  Hidden, // Import Hidden component
} from "@mui/material";
import "../styles/NavbarStyle.css";
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ContactMailIcon from '@mui/icons-material/ContactMail';
function Navbar() {
  return (
    <div style={{ backgroundColor: "#151515", minHeight: "100vh" }}>
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

                <Button
                  className="navButtons"
                  sx={{ my: 2, mx: 3, color: "whitesmoke" }}
                  endIcon= {<PictureAsPdfIcon/>}
                >
                  Resume
                </Button>
                <Button
                  className="navButtons"
                  sx={{ my: 2, mx: 3, color: "whitesmoke"}}
                  endIcon= {<ContactMailIcon/>}
                >
                  Contact Us
                </Button>
              </Box>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
