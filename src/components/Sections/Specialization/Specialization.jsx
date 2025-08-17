import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./Specialization.module.css";
import dentistrylogo from "../../../assets2/specialisation/Dentistry.png";
import BloodTest from "../../../assets2/specialisation/BloodTest.png";
import Cardiology from "../../../assets2/specialisation/Cardiology.png";
import MriResonance from "../../../assets2/specialisation/MriResonance.png";
import xray from "../../../assets2/specialisation/Xray.png";
import piscologist from "../../../assets2/specialisation/Piscologist.png";
import primaryCare from "../../../assets2/specialisation/PrimaryCare.png";

const Specialization = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(81deg,#e7f0ff 9.01%,rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          pt={6}
          pb={3}
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600, // SemiBold
            fontSize: { xs: "32px", md: "48px" },
            letterSpacing: "0em", // 0%
            textAlign: "center",
            verticalAlign: "middle",
            color: "#1B3C74",
          }}
        >
          Find by specialisation
        </Typography>
        <Container>
          <Grid container spacing={2} pb={5}>
            <Grid size={{ xs: 4, md: 3 }} className={styles.itemContainer}>
              <img
                src={dentistrylogo}
                style={{ width: "60px" }}
                alt="dentistry"
              />
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500, // Medium
                  fontSize: "18px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#ABB6C7", // text color
                }}
              >
                Dentistry
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 3 }} className={styles.itemContainer}>
              <img
                src={primaryCare}
                style={{ width: "60px" }}
                alt="primaryCare"
              />
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500, // Medium
                  fontSize: "18px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#ABB6C7", // text color
                }}
              >
                Primary Care
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 3 }} className={styles.itemContainer}>
              <img
                src={Cardiology}
                style={{ width: "60px" }}
                alt="Cardiology"
              />
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500, // Medium
                  fontSize: "18px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#ABB6C7", // text color
                }}
              >
                Cardiology
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 3 }} className={styles.itemContainer}>
              <img
                src={MriResonance}
                style={{ width: "60px" }}
                alt="MriResonance"
              />
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500, // Medium
                  fontSize: "18px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#ABB6C7", // text color
                }}
              >
                MRI Resonance
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 3 }} className={styles.itemContainer}>
              <img src={BloodTest} style={{ width: "60px" }} alt="BloodTest" />
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500, // Medium
                  fontSize: "18px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#ABB6C7", // text color
                }}
              >
                Blood Test
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 3 }} className={styles.itemContainer}>
              <img
                src={piscologist}
                style={{ width: "60px" }}
                alt="piscologist"
              />
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500, // Medium
                  fontSize: "18px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#ABB6C7", // text color
                }}
              >
                Piscologist
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 3 }} className={styles.itemContainer}>
              <img
                src={dentistrylogo}
                style={{ width: "60px" }}
                alt="laboratory"
              />
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500, // Medium
                  fontSize: "18px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#ABB6C7", // text color
                }}
              >
                Laboratory
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 3 }} className={styles.itemContainer}>
              <img src={xray} style={{ width: "60px" }} alt="xray" />
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500, // Medium
                  fontSize: "18px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#ABB6C7", // text color
                }}
              >
                X-Ray
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#2AA8FF", mb: "40px", textTransform: "none" }}
        >
          View All
        </Button>
      </Container>
    </Box>
  );
};

export default Specialization;
