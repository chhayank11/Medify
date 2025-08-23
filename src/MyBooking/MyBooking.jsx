import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import searchAd from "../assets2/MedicalCenter/SearchAd.png";
import HospitalCard from "../components/HospitalCard/HospitalCard";

const MyBooking = () => {
  const [searchText, setSearchText] = useState("");
  const medicalCenters = JSON.parse(localStorage.getItem("bookings")) || null;
  let [filteredList, setFilteredList] = useState([...medicalCenters]);

  const handleSearch = () => {
    setFilteredList(
      medicalCenters.filter((item) =>
        item["Hospital Name"].toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

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

            height: { md: "115px", xs: "185px" },
          }}
        >
          <Typography
            component={"h1"}
            sx={{
              fontFamily: "Ubuntu",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "40px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: { xs: "center", md: "start" },
              verticalAlign: "middle",
              color: "white",
              pt: { xs: 4, md: 7 },
              pl: { xs: 0, md: 13 },
            }}
          >
            My Bookings
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: { md: "70px", xs: "130px" },
              left: { md: "64%", xs: "50%" },

              transform: "translateX(-50%)",
              height: { md: "100px", xs: "170px" },
              width: { md: "710px", xs: "90%" },
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: "6px 6px 35px 0px #1028511C",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",

              p: { md: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                gap: 2,
                p: { md: 1, xs: 2 },
              }}
            >
              <TextField
                type="text"
                sx={{
                  border: "1px solid #F0F0F0",
                  flex: 1,
                  backgroundColor: "white",
                  "& fieldset": { border: "none" },
                  borderRadius: "10px",
                }}
                placeholder="Search By Hospital"
                required
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                sx={{
                  py: "15px",
                  px: 8,
                  flexShrink: 0,
                  backgroundColor: "#2AA8FF",
                  textTransform: "none",
                  borderRadius: "10px",
                }}
                disableElevation
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: { md: "row", xs: "column" } }}
          px={{ md: "90px", xs: "8px" }}
          p={14}
        >
          <Box flex={"67%"}>
            {filteredList.length === 0 ? (
              <Box>
                <Typography
                  variant="h5"
                  sx={{ background: "white", borderRadius: 3 }}
                  p={3}
                  m={2}
                >
                  No Bookings Found!
                </Typography>
              </Box>
            ) : (
              <Box>
                {filteredList.map((item, idx) => (
                  <HospitalCard
                    key={idx}
                    name={item["Hospital Name"]}
                    state={item.City}
                    city={item.State}
                    type={item["Hospital Type"]}
                    rating={item["Hospital overall rating"]}
                    details={item}
                    booking={true}
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
      </Box>
    </Box>
  );
};

export default MyBooking;
