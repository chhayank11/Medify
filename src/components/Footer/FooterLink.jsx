import { Box, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const FooterLink = ({ set }) => {
  return (
    <>
      {set.map((item, idx) => (
        <Box key={idx} sx={{ color: "white", display: "flex" }}>
          <KeyboardArrowRightIcon />
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400, // Regular
              fontSize: "14px",
              lineHeight: "28px",
              letterSpacing: "0em",
              verticalAlign: "middle",
              color: "white",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default FooterLink;
