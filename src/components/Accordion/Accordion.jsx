import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const SimpleAccordion = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ pr: { xs: 0, md: 10 } }}>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            boxShadow: "none",
            "&:before": { display: "none" },
            my: 3,
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "#2AA7FF" }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(45deg)", // 👈 custom rotation
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600, // SemiBold = 600
                fontSize: "18px",
                lineHeight: "25px",
                letterSpacing: "0",
                verticalAlign: "middle",
                color: "#1B3C74",
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontWeight: 400, // SemiBold = 600
                fontSize: "13px",
                letterSpacing: "0",
                color: "black",
                textAlign: "left",
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default SimpleAccordion;
