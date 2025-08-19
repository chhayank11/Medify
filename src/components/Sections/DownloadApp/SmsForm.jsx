import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React from "react";

const SmsForm = () => {
  return (
    <Box
      component={"form"}
      onSubmit={(e) => e.preventDefault()}
      sx={{
        display: "flex",
        justifyContent: { md: "space-between", xs: "center" },
        gap: "10px",
        flexDirection: { xs: "column", md: "row" },
        pr: { md: 8, xs: 0 },
      }}
    >
      <TextField
        sx={{
          border: "1px solid #F0F0F0",
          flex: 1,
          backgroundColor: "white",
        }}
        placeholder="Enter phone number"
        InputProps={{
          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
        }}
        required
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#2AA8FF",
          textTransform: "none",
          borderRadius: "8px",
        }}
      >
        Send SMS
      </Button>
    </Box>
  );
};

export default SmsForm;
