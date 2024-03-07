import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/styles";

import { useHistory } from "react-router-dom";

export default function Notes() {
  //states
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const history = useHistory();

  //submit function
  function handleSubmit(e) {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  }

  const ButtonS = styled(Button)(() => ({
    fontSize: 16,
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "gray",
    },
  }));

  // const classes = useStyles();
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
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          color="primary"
          sx={{ marginTop: "20px", marginBottom: "20px", display: "block" }}
          fullWidth
          error={titleError}
        />
        <TextField
          multiline
          minRows={3}
          maxRows={7}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          color="primary"
          fullWidth
          sx={{ marginTop: "20px", marginBottom: "20px", display: "block" }}
          error={detailsError}
        />
        <FormControl
          sx={{ marginTop: "20px", marginBottom: "20px", display: "block" }}
        >
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            sx={{
              marginBottom: "20px",
            }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <ButtonS
          variant="contained"
          type="submit"
          color="primary"
          // startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </ButtonS>
      </form>
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
