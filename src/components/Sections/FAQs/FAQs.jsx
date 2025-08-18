import { Box, Container, Typography } from "@mui/material";
import React from "react";
import faq from "../../../assets2/faq/faq.png";
import SimpleAccordion from "../../Accordion/Accordion";

const data = [
  {
    question: "Why choose our medical for your family?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Why we are different from others?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Trusted & experience senior care & love",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "How to get appointment for emergency cases?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const FAQs = () => {
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
        Get Your Answer
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
        Frequently Asked Questions
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          // pt: { xs: 1, md: 1 },
          // px: { xs: 2, md: 4 },
          // pb: { xs: 4, md: 4 },
        }}
      >
        <Box flex={1}>
          <Box component={"img"} src={faq} sx={{ width: "90%" }} />
        </Box>
        <Box flex={1}>
          <SimpleAccordion data={data} />
        </Box>
      </Box>
    </Container>
  );
};

export default FAQs;
