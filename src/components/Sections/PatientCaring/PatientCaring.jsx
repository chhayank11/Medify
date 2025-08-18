import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import patientcaring from "../../../assets2/patientcaring/PatientCaring.png";
import tick from "../../../assets2/patientcaring/tick-blue.png";

const PatientCaring = () => {
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
        pb: 3,
      }}
    >
      <Container>
        <Box
          component={"img"}
          pt={6}
          src={patientcaring}
          width={"100%"}
          sx={{ pl: { xs: 0, md: 8 } }}
        ></Box>
      </Container>
      <Container sx={{ padding: "40px", pr: { md: 8 } }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            color: "#2AA7FF",
          }}
        >
          HELPING PATIENTS FROM AROUND THE GLOBE!! <br />
          <Typography
            component="span"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "28px", md: "48px" },
              color: "#1B3C74",
            }}
          >
            Patient{" "}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "28px", md: "48px" },
              color: "#2AA7FF",
            }}
          >
            Caring
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
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </Typography>
        <List sx={{ fontSize: { xs: 12, md: 18 } }}>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Box component="img" src={tick} height={22} width={22} />
            </ListItemIcon>
            <ListItemText
              primary="Stay Updated About Your Health"
              primaryTypographyProps={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 500,
                color: "#1B3C74",
              }}
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Box component="img" src={tick} height={22} width={22} />
            </ListItemIcon>
            <ListItemText
              primary="Check Your Results Online"
              primaryTypographyProps={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 500,
                color: "#1B3C74",
              }}
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Box component="img" src={tick} height={22} width={22} />
            </ListItemIcon>
            <ListItemText
              primary="Manage Your Appointments"
              primaryTypographyProps={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 500,
                color: "#1B3C74",
              }}
            />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default PatientCaring;
