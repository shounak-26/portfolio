import React, { useState } from "react";
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
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "../styles/NavbarStyle.css";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const pdfUrl =
    "https://drive.google.com/file/d/1235Ev9dBc5STiicc7rt5zrbq-eQPqUIL/view?usp=sharing";

  const handleButtonClick = () => {
    window.open(pdfUrl, "_blank");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = (
    <List>
      <ListItem button>
        <ScrollLink
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary="Portfolio" />
        </ScrollLink>
      </ListItem>
      <ListItem button onClick={handleButtonClick}>
        <ListItemText primary="Resume" />
      </ListItem>
      <ListItem button>
        <ScrollLink
          activeClass="active"
          to="contact-us"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary="Contact Us" />
        </ScrollLink>
      </ListItem>
    </List>
  );

  return (
    <div style={{ backgroundColor: "#151515" }}>
      <AppBar
        className="navbar"
        position="static"
        sx={{ backgroundColor: "#151515", boxShadow: "none" }}
      >
        <Container className="nav-container">
          <Toolbar className="main-toolbar">
            <Box className="name-container">
              <IconButton className="icon">
                <Avatar
                  sx={{
                    boxShadow: "initial",
                    height: "8vh",
                    width: "8vh",
                  }}
                  alt="Profile Picture"
                  src="/images/profilePhotoMod.png"
                />
              </IconButton>
              <Typography
                variant="h5"
                marginLeft={1}
                letterSpacing={2}
                className="name"
              >
                Shounak Purnapatre
              </Typography>
            </Box>

            <Box
              className="buttons-container"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                alignItems: "center",
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

            <Hidden mdUp>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ marginLeft: "auto" }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgb(255, 226, 146)",
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuItems}
        </Box>
      </Drawer>
    </div>
  );
}

export default Navbar;
