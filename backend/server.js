const express = require("express");

const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("get is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  const note = notes.find((each) => each._id === id);
  res.send(note);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));
