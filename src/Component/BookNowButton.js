import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

//src
import "./BookNowButton.scss";

export default function BookNowButton() {
  return (
    <div className="book-now">
      <Button
        sx={{ bgcolor: "#D52A29" }}
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Book Now
      </Button>
    </div>
  );
}
