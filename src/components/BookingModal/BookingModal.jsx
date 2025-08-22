import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { closeSnackbar, useSnackbar } from "notistack";
import { format } from "date-fns";

export default function BookingModal({ isOpen, data, onClose }) {
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookings = localStorage.getItem("bookings") || "[]";

    const oldBookings = JSON.parse(bookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, { ...data, bookingEmail: email }])
    );
    setEmail("");
    onClose();
    enqueueSnackbar("Booking Successful", {
      variant: "success",
      action: (snackbarId) => (
        <IconButton
          size="small"
          color="inherit"
          onClick={() => closeSnackbar(snackbarId)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      ),
    });
  };
  const formatDate = (day) => {
    if (day) {
      const date = new Date(day);
      return format(date, "E, d LLL");
    } else {
      return null;
    }
  };
  return (
    <div>
      <Modal open={isOpen} onClose={onClose}>
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { md: 600, xs: "90%" },
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontSize: { xs: 20, md: 30 } }}
          >
            Confirm Booking
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            Please enter your email to confirm booking for{" "}
            <Box component="span" fontWeight={600}>
              {`${data.bookingTime} on ${formatDate(data.bookingDate)}`}
            </Box>
          </Typography>
          <TextField
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email*"
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              type="submit"
              sx={{
                mt: 2,
                background: "#2AA7FF",
                color: "white",
                textTransform: "none",
                borderRadius: "5px",
              }}
              variant="outlined"
            >
              Confirm
            </Button>
            <Button onClick={onClose} sx={{ mt: 2 }} variant="outlined">
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
