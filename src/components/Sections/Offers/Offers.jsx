import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import styles from "./Offers.module.css";
import { Box, Container } from "@mui/material";

import img1 from "../../../assets/offer1.jpg";
import img2 from "../../../assets/offer2.jpg";

export default function Offers() {
  return (
    <Container sx={{ paddingTop: "220px" }}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
          className={`custom-swiper ${styles.slider}`}
        >
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "50px",
              }}
            >
              <Box className={styles.img} component={"img"} src={img1} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className={styles.img} component={"img"} src={img2} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className={styles.img} component={"img"} src={img1} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className={styles.img} component={"img"} src={img2} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className={styles.img} component={"img"} src={img1} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className={styles.img} component={"img"} src={img2} />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Container>
  );
}
