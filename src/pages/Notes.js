import React from "react";
import { Button, Container, Typography } from "@mui/material";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Notes() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        noWrap
        gutterBottom
      >
        Create a new Note
      </Typography>
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        onClick={(e) => alert("Note created")}
        // startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
      {/* icons
      <br />
      <AcUnitIcon />
      <AcUnitIcon color="secondary" fontSize="large" />
      <AcUnitIcon color="secondary" fontSize="small" />
      <AcUnitIcon color="action" fontSize="small" />
      <AcUnitIcon color="error" fontSize="small" />
      <AcUnitIcon color="disabled" fontSize="large" /> */}
    </Container>
  );
}
