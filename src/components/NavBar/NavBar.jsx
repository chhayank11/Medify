import { Box, Button, Typography } from "@mui/material";
import logo from "./../../assets/logo.jpg";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

const NavBar = () => {
  const navItems = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "Facilities",
    "My Bookings",
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#2AA7FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "8px",
        }}
      >
        <Typography color="white" fontSize={"14px"}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Box mb={10}>
        <img src={logo} alt="" />
      </Box>
    </>
  );
};

export default NavBar;
