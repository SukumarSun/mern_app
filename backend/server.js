const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middlewares/errormiddleware");
//

const app = express();
dotenv.config({ path: "./../.env" });
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("get is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/api/notes/:id", (req, res) => {
//   const { id } = req.params;
//   const note = notes.find((each) => each._id === id);
//   res.send(note);
// });

const PORT = process.env.PORT || 3001;
// app.listen(PORT, console.log(`Server is running on ${PORT}`));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  // console.log(process.env.PORT);
  // console.log(dotenv.config());
});
