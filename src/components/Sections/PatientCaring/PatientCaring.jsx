import { Box, Container } from "@mui/material";
import React from "react";
import patientcaring from "../../../assets2/patientcaring/PatientCaring.png";

const PatientCaring = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(81deg,#e7f0ff 9.01%,rgba(232, 241, 255, 0.47) 89.11%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Container>
        <img
          src={patientcaring}
          alt=""
          style={{ width: "100%", padding: "30px" }}
        />
      </Container>
      <Container>asd</Container>
    </Box>
  );
};

export default PatientCaring;
