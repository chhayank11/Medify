import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/home.webp";

const Hero = () => {
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "6px",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Container>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "31px",
            lineHeight: "68px",
            letterSpacing: "0.62px",
            color: "#102851",
          }}
        >
          Skip the travel! Find Online <br />
          <Typography
            component="span"
            sx={{
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "56px",
              lineHeight: "68px",
              letterSpacing: "1.12px",
              color: "#000000",
            }}
          >
            Medical{" "}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "56px",
              lineHeight: "68px",
              letterSpacing: "1.12px",
              color: "#2AA7FF",
            }}
          >
            Centers
          </Typography>
        </Typography>
        <Typography
          mb={2}
          sx={{
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "32px",
            letterSpacing: "0.4px", // 2% of 20px
            color: "#5C6169",
          }}
        >
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.{" "}
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "#2AA8FF" }}>
          Find Centers
        </Button>
      </Container>
      <Box>
        <Box component={"img"} src={logo} width={{ xs: 1, md: "100%" }} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "88%",
          // left: "50%",
          // transform: "translateX(-50%)",
          height: "300px",
          width: "92%",
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Box>asd</Box>
        <Box>asd</Box>
      </Box>
    </Container>
  );
};

export default Hero;
