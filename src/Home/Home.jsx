import React from "react";
import styles from "./Home.module.css";
import { Box, Typography } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Offers from "../components/Sections/Offers/Offers";
import Specialization from "../components/Sections/Specialization/Specialization.jsx";
import Specialists from "../components/Sections/Specialists/Specialists.jsx";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring.jsx";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(81deg,#e7f0ff 9.01%,rgba(232, 241, 255, 0.47) 89.11%)",
          width: "100%",
        }}
      >
        <NavBar />
        <Hero />
      </Box>
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
    </Box>
  );
};

export default Home;
