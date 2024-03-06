import { Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "green",
  },
});

export default function Create() {
  const cl = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary" className={cl.btn}>
        Hi
      </Button>
    </div>
  );
}
