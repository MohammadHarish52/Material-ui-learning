import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, { method: "DELETE" });
    const newNotes = notes.filter((n) => n.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container sx={{ backgroundColor: "#fafafa" }}>
      <Grid container spacing={3} sx={{ padding: "20px" }}>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} md={4} sm={6}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
