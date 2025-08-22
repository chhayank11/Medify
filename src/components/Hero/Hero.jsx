import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/home.webp";
import SearchHospital from "../SearchHospital/SearchHospital";
import Ambulance from "../../assets2/Heroicons/Ambulance.png";
import Doctors from "../../assets2/Heroicons/Doctors.png";
import Hospitals from "../../assets2/Heroicons/Hospitals.png";
import Labs from "../../assets2/Heroicons/Labs.png";
import MedicalStore from "../../assets2/Heroicons/MedicalStore.png";

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
            fontSize: { md: "28px", xs: "20px" },
            lineHeight: { md: "68px" },
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
              fontSize: { md: "52px", xs: "31px" },
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
              fontSize: { md: "52px", xs: "31px" },
              lineHeight: "68px",
              letterSpacing: "1.12px",
              color: "#2AA7FF",
            }}
          >
            Centers
          </Typography>
        </Typography>
        <Typography
          my={2}
          sx={{
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: { md: "20px" },
            lineHeight: { md: "32px", xs: "25px" },
            letterSpacing: "0.4px", // 2% of 20px
            color: "#5C6169",
          }}
        >
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.{" "}
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#2AA8FF", borderRadius: "10px" }}
        >
          Find Centers
        </Button>
      </Container>
      <Box>
        <Box
          component={"img"}
          src={logo}
          width={{ xs: 1, md: "100%" }}
          px={2}
          sx={{ mt: { md: 1, xs: 5 } }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: { md: "88%", xs: "95%" },
          height: { md: "490px", xs: "700px" },
          width: { md: "92%", xs: "83%" },
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: "6px 6px 35px 0px #1028511C",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",

          p: { md: 2 },
        }}
      >
        <SearchHospital />

        <Box>
          <Typography
            component="h4"
            fontSize={20}
            color="#102851"
            fontWeight={500}
            textAlign="center"
            my={3}
          >
            You may be looking for
          </Typography>
          <Box p={2}>
            <Grid container>
              <Grid size={{ md: 2.4, xs: 4 }} py={4}>
                <Box component={"img"} src={Doctors} height={60} />
                <Typography color={"#ABB6C7"} fontSize={18} fontWeight={400}>
                  Doctors
                </Typography>
              </Grid>
              <Grid size={{ md: 2.4, xs: 4 }} py={4}>
                <Box component={"img"} src={Labs} height={60} />
                <Typography color={"#ABB6C7"} fontSize={18} fontWeight={400}>
                  Labs
                </Typography>
              </Grid>
              <Grid
                size={{ md: 2.4, xs: 4 }}
                borderRadius={2}
                bgcolor={"rgba(42,167,255,0.08)"}
                sx={{ border: "1px solid #2AA7FF" }}
                py={4}
              >
                <Box component={"img"} src={Hospitals} height={60} />
                <Typography color={"#2AA7FF"} fontSize={18} fontWeight={600}>
                  Hospitals
                </Typography>
              </Grid>
              <Grid size={{ md: 2.4, xs: 4 }} py={4}>
                <Box component={"img"} src={MedicalStore} height={60} />
                <Typography color={"#ABB6C7"} fontSize={18} fontWeight={400}>
                  Medical Store
                </Typography>
              </Grid>
              <Grid size={{ md: 2.4, xs: 4 }} py={4}>
                <Box component={"img"} src={Ambulance} height={60} />
                <Typography color={"#ABB6C7"} fontSize={18} fontWeight={400}>
                  Ambulance
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
