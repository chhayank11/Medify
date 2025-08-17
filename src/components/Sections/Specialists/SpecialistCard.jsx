import { Box, Typography } from "@mui/material";
import React from "react";

const SpecialistCard = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        paddingBottom: "50px",
      }}
    >
      <Box
        sx={{
          opacity: 1,
          borderTopLeftRadius: "250px",
          borderTopRightRadius: "250px",
          borderBottomRightRadius: "8px",
          borderBottomLeftRadius: "8px",
          boxShadow: "0px 15px 55px -10px #00000017",
        }}
      >
        <img src={item.img} style={{ width: "100%" }} alt="" />
      </Box>
      <Typography
        pt={2}
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400, // SemiBold
          fontSize: "24px",
          letterSpacing: "0em", // 0%
          textAlign: "center",
          verticalAlign: "middle",
          color: "#1B3C74",
        }}
      >
        Dr. {item.name}
      </Typography>
      <Typography sx={{ color: "#2AA7FF" }}> {item.position}</Typography>
    </Box>
  );
};

export default SpecialistCard;
