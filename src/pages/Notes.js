import React from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";

export default function Notes() {
  return (
    <div>
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
      >
        Submit
      </Button>
      {/* <ButtonGroup color="secondary">
        <Button>Save Draft</Button>
        <Button>Review</Button>
        <Button>Watch Later</Button>
      </ButtonGroup> */}
    </div>
  );
}
