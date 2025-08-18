import { Box, Container } from "@mui/material";
import React from "react";
import DownloadAppImg from "../../../assets/mobile.jpg";

const DownloadApp = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(#E7F0FF, #E8F1FF)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box flex={"45%"}>
        <Box
          component={"img"}
          alt="download app"
          src={DownloadAppImg}
          sx={{ width: "90%" }}
        ></Box>
      </Box>
      <Box flex={"55%"}>ad</Box>
    </Box>
  );
};

export default DownloadApp;
