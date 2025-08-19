import React from "react";
import styles from "./Home.module.css";
import { Box, Typography } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Offers from "../components/Sections/Offers/Offers";
import Specialization from "../components/Sections/Specialization/Specialization.jsx";
import Specialists from "../components/Sections/Specialists/Specialists.jsx";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring.jsx";
import Blogs from "../components/Sections/Blogs/Blogs.jsx";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies.jsx";
import FAQs from "../components/Sections/FAQs/FAQs.jsx";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(81deg,#e7f0ff 9.01%,rgba(232, 241, 255, 0.47) 89.11%)",
          width: "100%",
          height: "800px",
        }}
      >
        <NavBar />
        <Hero />
      </Box>
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <OurFamilies />
      <FAQs />
    </Box>
  );
};

export default Home;
