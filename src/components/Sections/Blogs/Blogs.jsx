import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        pt: 6,
        pb: 2,
      }}
    >
      <Typography
        sx={{
          color: "#2AA7FF",
          fontWeight: 600,
          fontSize: "16px",
          letterSpacing: "0",
        }}
      >
        Blog & News
      </Typography>
      <Typography
        sx={{
          color: "#1B3C74",
          fontWeight: 600,
          fontSize: { md: "48px", xs: "30px" },
          lineHeight: { md: "60px", xs: "35px" },
          letterSpacing: "0",
        }}
      >
        Read Our Latest News
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "35px",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          pt: { xs: 1, md: 1 },
          px: { xs: 2, md: 4 },
          pb: { xs: 4, md: 4 },
        }}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Box>
    </Container>
  );
};

export default Blogs;
