import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import medcenter from "../../assets2/MedicalCenter/MedicalCenter.png";
import thumb from "../../assets2/MedicalCenter/Thumb.png";
import Calendar from "../Calendar/Calendar";
import BookingModal from "../BookingModal/BookingModal";
import { format } from "date-fns";

const availableSlots = {
  morning: ["11:30 AM"],
  afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
  evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
};

const HospitalCard = ({
  name,
  state,
  city,
  type,
  rating,
  details,
  booking = false,
}) => {
  const [clicked, setClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const onClose = () => {
    setIsModalOpen(false);
  };
  const handleBooking = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };
  return (
    <Box m={2}>
      <Box
        sx={{
          display: "flex",
          background: "white",

          borderRadius: "8px",
          flexDirection: { md: "row", xs: "column" },
          p: { md: 4, xs: 2 },
          gap: { md: 3, xs: 1 },
        }}
      >
        <Box
          component={"img"}
          alt="medcenter"
          src={medcenter}
          sx={{ width: "20%", height: "20%" }}
        />
        <Box
          sx={{
            flex: "40%",
            display: "flex",
            flexDirection: "column",
            gap: { md: 1, xs: 0.5 },
          }}
        >
          <Typography
            component={"h1"}
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600, // SemiBold = 600
              fontStyle: "normal", // "SemiBold" is not a valid CSS value
              fontSize: { md: "20px", xs: "17px" },
              lineHeight: "28px",
              letterSpacing: "0",
              verticalAlign: "middle",
              color: "#14BEF0",
              textTransform: "capitalize",
            }}
          >
            {name.toLowerCase()}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600, // SemiBold = 600
              fontStyle: "normal", // "SemiBold" is not a valid CSS value
              fontSize: { md: "14px", xs: "14px" },
              letterSpacing: "0",
              verticalAlign: "middle",
              color: "#414146",
              textTransform: "capitalize",
            }}
          >
            {`${city.toLowerCase()}, ${state.toLowerCase()}`}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontStyle: "normal", // "SemiBold" is not a valid CSS value
              fontSize: { md: "13px", xs: "13px" },
              letterSpacing: "0",
              verticalAlign: "middle",

              textTransform: "capitalize",
            }}
          >
            {type.toLowerCase()}
          </Typography>
          <Stack direction="column" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              textTransform="uppercase"
              color="#02A401"
            >
              Free{" "}
              <Typography
                component={"span"}
                sx={{ textDecoration: "line-through", color: "#787887" }}
              >
                ₹500
              </Typography>
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>
          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="#02A401"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component={"img"}
              src={thumb}
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {rating == "Not Available" ? 0 : rating}
            </Typography>
          </Stack>
        </Box>
        {booking ? (
          <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
            <Chip
              label={details.bookingTime}
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: 1,
                fontSize: 14,
              }}
            />
            <Chip
              label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
              variant="outlined"
              color="success"
              sx={{
                borderRadius: 1,
                fontSize: 14,
              }}
            />
          </Stack>
        ) : (
          <Box
            sx={{
              pt: { md: 23, xs: 1 },
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{ color: "#01A400", fontSize: "14px", textAlign: "center" }}
            >
              Available Today
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                background: "#2AA7FF",
                fontSize: "14px",
                width: "100%",
              }}
              variant="contained"
              onClick={() => setClicked(!clicked)}
            >
              {clicked ? "Hide Booking Calendar" : "Book FREE Center Visit"}
            </Button>
          </Box>
        )}
      </Box>
      {clicked && (
        <Box
          sx={{
            background: "white",

            borderRadius: "8px",
            flexDirection: { md: "row", xs: "column" },
            p: { md: 4, xs: 2 },
          }}
        >
          <Calendar
            details={details}
            availableSlots={availableSlots}
            handleBooking={handleBooking}
          />
        </Box>
      )}
      <BookingModal
        isOpen={isModalOpen}
        data={bookingDetails}
        onClose={onClose}
      />
    </Box>
  );
};

export default HospitalCard;
