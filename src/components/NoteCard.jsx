import { DeleteOutlined } from "@material-ui/icons";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "work") return "1px solid red";
      if (note.category === "reminders") return "1px solid green";
      if (note.category === "todos") return "1px solid blue";
      if (note.category === "money") return "1px solid purple";
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="gray">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
