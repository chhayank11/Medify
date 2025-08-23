import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Box, Stack, Typography } from "@mui/material";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import FAQs from "../components/Sections/FAQs/FAQs.jsx";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import HospitalCard from "../components/HospitalCard/HospitalCard.jsx";
import tick from "../assets2/MedicalCenter/Tick.png";
import searchAd from "../assets2/MedicalCenter/SearchAd.png";

const Search = () => {
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const city = searchParams.get("city");

  useEffect(() => {
    const fetchMedicalCenters = async () => {
      if (state && city) {
        setLoading(true);
        try {
          const data = await axios.get(
            `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
          );
          console.log(data.data);
          setMedicalCenters(data.data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchMedicalCenters();
  }, [city, state]);

  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          background:
            "linear-gradient(81deg, #EFF5FE 9.01%, rgba(241, 247, 255, 0.47) 89.11%)",
          minHeight: "500px",
          height: "auto",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            background:
              "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
            borderRadius: "0 0 16px 16px",

            height: { md: "105px", xs: "280px" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { md: "25%", xs: "17%" },
              left: "50%",
              transform: "translateX(-50%)",
              height: { md: "200px", xs: "280px" },
              width: { md: "90%", xs: "90%" },
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
          </Box>
        </Box>

        <Box
          sx={{ mb: 2 }}
          pt={{ md: "200px", xs: "120px" }}
          px={{ md: "110px", xs: "20px" }}
        >
          {!state || !city ? (
            <></>
          ) : loading ? (
            <h2>Loading...</h2>
          ) : (
            <Box>
              <Typography
                component="h1"
                fontSize={20}
                lineHeight={1.1}
                mb={2}
                fontWeight={500}
              >
                {`${medicalCenters.length} medical centers available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLocaleLowerCase()}
                </span>
              </Typography>
              <Stack direction="row" spacing={2}>
                <img src={tick} height={24} width={24} alt="icon" />
                <Typography color="#787887" lineHeight={1.4}>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
            </Box>
          )}
        </Box>
        {!loading && (
          <Box
            sx={{ display: "flex", flexDirection: { md: "row", xs: "column" } }}
            px={{ md: "90px", xs: "8px" }}
          >
            <Box flex={"67%"}>
              {!state || !city ? (
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ background: "white", borderRadius: 3 }}
                    p={3}
                    m={2}
                  >
                    Please select a state and city
                  </Typography>
                </Box>
              ) : (
                <Box>
                  {medicalCenters.map((item, idx) => (
                    <HospitalCard
                      key={idx}
                      name={item["Hospital Name"]}
                      state={state}
                      city={city}
                      type={item["Hospital Type"]}
                      rating={item["Hospital overall rating"]}
                      details={item}
                    />
                  ))}
                </Box>
              )}
            </Box>
            <Box flex={"33%"}>
              <Box
                component={"img"}
                src={searchAd}
                sx={{ width: "100%" }}
                p={2}
              />
            </Box>
          </Box>
        )}
      </Box>
      <FAQs />
    </Box>
  );
};

export default Search;
