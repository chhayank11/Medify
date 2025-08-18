import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ourfam from "../../../assets2/ourfamilies/OurFamilies.png";

const OurFamilies = () => {
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
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          pt: { xs: 4, md: 4 },
          px: { xs: 4, md: 10 },
          pb: { xs: 2, md: 4 },
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            color: "#2AA7FF",
          }}
        >
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY. <br />
          <Typography
            component="span"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "28px", md: "48px" },
              color: "#1B3C74",
            }}
          >
            Our Families
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "29px",
            letterSpacing: "0",
            verticalAlign: "middle",
            color: "#77829D",
          }}
        >
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: { md: "start", xs: "center" },
          pt: { md: 4, xs: 0 },
        }}
      >
        <Box component={"img"} src={ourfam} sx={{ width: "90%" }}></Box>
      </Container>
    </Box>
  );
};

export default OurFamilies;
