import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import medifylogo from "../../assets2/MedifyLogo/Medify.png";
import facebook from "../../assets2/footer/Facebook.png";
import twitter from "../../assets2/footer/Twitter.png";
import youtube from "../../assets2/footer/Youtube.png";
import pinterest from "../../assets2/footer/Pinterest.png";
import FooterLink from "./FooterLink";

const set1 = [
  "About Us",
  "Our Pricing",
  "Our Gallery",
  "Appointment",
  "Privacy Policy",
];
const set2 = [
  "Orthology",
  "Neurology",
  "Dental Care",
  "Opthalmology",
  "Cardiology",
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1B3C74" }}>
      <Box sx={{ px: { md: 11, xs: 4 }, pt: { md: 6, xs: 4 }, pb: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <Box component={"img"} src={medifylogo} alt="medify" width={122} />
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Box component={"img"} alt="fb" src={facebook} height={36} />
              <Box component={"img"} alt="twitter" src={twitter} height={36} />
              <Box component={"img"} alt="youtube" src={youtube} height={36} />
              <Box component={"img"} alt="pin" src={pinterest} height={36} />
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: { md: "row", xs: "column" },
              gap: 2,
              pl: { md: 15, xs: 0 },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <FooterLink set={set1} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <FooterLink set={set2} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <FooterLink set={set1} />
            </Box>
          </Box>
        </Box>
        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={13}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
