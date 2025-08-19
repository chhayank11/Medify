import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import DownloadAppImg from "../../../assets/mobile.jpg";
import downArr from "../../../assets2/download/Down-arrow.png";
import SmsForm from "./SmsForm";
import googlePlayLogo from "../../../assets2/download/GooglePlay.png";
import appleLogo from "../../../assets2/download/Appstore.png";

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
      <Box
        flex={"45%"}
        sx={{
          display: "flex",
          justifyContent: { md: "end", xs: "center" },
          pt: 5,
        }}
      >
        <Box
          component={"img"}
          alt="download app"
          src={DownloadAppImg}
          sx={{ width: "85%" }}
        />
      </Box>
      <Box
        flex={"55%"}
        gap={2}
        sx={{
          display: "flex",
          alignItems: "center",

          pl: 3,
          pr: 4,
        }}
      >
        <Box flex={"5%"}>
          <Box
            component={"img"}
            alt="arrow"
            src={downArr}
            sx={{ width: "120%", pb: { md: 8, xs: 25 } }}
          />
        </Box>
        <Box flex={"95%"}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "28px", md: "48px" },
              color: "#1B3C74",
            }}
          >
            Download the
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "28px", md: "48px" },
              color: "#2AA7FF",
            }}
          >
            Medify
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "28px", md: "48px" },
                color: "#1B3C74",
              }}
            >
              {" "}
              App
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 700, // Bold = 700
              fontStyle: "normal", // "Bold" is not valid CSS
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0",
              verticalAlign: "middle",
              color: "#414146",
            }}
          >
            Get the link to download the app
          </Typography>
          <SmsForm />
          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Google Play Button */}
            <Button
              sx={{
                p: 0, // remove default padding so image fits perfectly
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={googlePlayLogo}
                alt="Get it on Google Play"
                sx={{ height: 50 }} // control size here
              />
            </Button>

            {/* App Store Button */}
            <Button
              sx={{
                p: 0,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={appleLogo}
                alt="Download on the App Store"
                sx={{ height: 50 }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadApp;
