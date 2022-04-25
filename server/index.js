const db = require("./data/db");
const NoteDao = require("./data/NoteDao");

const notes = new NoteDao();
db.connect();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/notes", async (req, res) => {
  const { query } = req.query;
  const data = await notes.readAll(query);
  res.json({ data });
});

app.get("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const data = await notes.read(id);
  console.log(data);
  res.json({ data: data ? data : [] });
});

app.delete("/api/notes/:id", async (req, res) => {
  console.log(req);
  try {
    const { id } = req.params;
    const data = await notes.delete(id);
    res.json({ data });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

app.post("/api/notes", async (req, res) => {
  try {
    const { title, text } = req.body;
    const data = await notes.create({ title, text });
    res.status(201).json({ data });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

app.put("/api/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const data = await notes.update(id, { title, text });
    res.json({ data });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("QuickNote API!");
});

app.listen(port, () => {
  console.log(`Express app listening at port: http://localhost:${port}/`);
});
