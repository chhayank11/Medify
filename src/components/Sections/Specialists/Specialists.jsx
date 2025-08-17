import { Box, Typography } from "@mui/material";
import React from "react";
import ankur from "../../../assets2/Specialists/Ankur.png";
import heena from "../../../assets2/Specialists/Heena.png";
import lesley from "../../../assets2/Specialists/LesleyHull.png";
import stevens from "../../../assets2/Specialists/AhmadStevens.png";
import khan from "../../../assets2/Specialists/AhmadKhan.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import SpecialistCard from "./SpecialistCard.jsx";

const specialists = [
  { name: "Ankur Sharma", position: "Medicine", img: ankur },
  { name: "Heena Sachdeva", position: "Orthopadics", img: heena },
  { name: "Lesley Hull", position: "Medicine", img: lesley },
  { name: "Ahmad Stevens", position: "Neurologist", img: stevens },
  { name: "Ahmad Khan", position: "Neurologist", img: khan },
];

const Specialists = () => {
  return (
    <Box>
      <Typography
        pt={6}
        pb={3}
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600, // SemiBold
          fontSize: { xs: "32px", md: "48px" },
          letterSpacing: "0em", // 0%
          textAlign: "center",
          verticalAlign: "middle",
          color: "#1B3C74",
        }}
      >
        Our Medical Specialist
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 4,
          },
        }}
      >
        {specialists.map((item, idx) => (
          <SwiperSlide>
            <SpecialistCard key={idx} item={item} />
          </SwiperSlide>
        ))}
        {specialists.map((item, idx) => (
          <SwiperSlide>
            <SpecialistCard key={idx} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Specialists;
