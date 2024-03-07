import { DeleteOutlined } from "@material-ui/icons";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { blue, green, pink, purple, yellow } from "@mui/material/colors";
const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "work") {
        return yellow[700];
      }
      if (note.category === "reminders") {
        return purple[600];
      }
      if (note.category === "todos") {
        return blue[500];
      }
      return green[600];
    },
  },
});

const getAvatarBgColor = ({ category }) =>
  ({
    work: yellow[700],
    money: green[500],
    todos: pink[500],
  }[category] || blue[500]);

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.test} sx={{ height: "400px" }}>
        <CardHeader
          avatar={
            <Avatar
              className={classes.avatar}
              sx={{ backgroundColor: getAvatarBgColor(note) }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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
