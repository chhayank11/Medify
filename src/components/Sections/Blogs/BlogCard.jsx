import { Box, Typography } from "@mui/material";
import React from "react";
import Blog from "../../../assets/blog.jpg";
import rebecca from "../../../assets/person.jpg";

const BlogCard = () => {
  return (
    <Box sx={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "8px" }}>
      <Box
        component={"img"}
        src={Blog}
        sx={{ width: "100%", borderRadius: "8px" }}
      />
      <Box
        pl={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{
            color: "#77829D",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: { md: "16px", xs: "12px" },
            letterSpacing: "0",
          }}
        >
          Medical | March 31, 2022
        </Typography>
        <Typography
          sx={{
            fontWeight: 500, // 'Medium' maps to 500
            fontSize: { md: "18px", xs: "13px" },
            lineHeight: "100%", // same as 1
            letterSpacing: "0",
            color: "#1B3C74",
            textAlign: "left",
          }}
          my={1}
        >
          6 Tips To Protect Your Mental Health When You're Sick
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }} my={1}>
          <Box
            component={"img"}
            src={rebecca}
            sx={{ width: "30px", borderRadius: "50%" }}
          />
          <Typography color="#1B3C74" fontSize={{ xs: 12, md: 16 }}>
            Rebecca Lee
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
