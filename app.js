const express = require("express");
const app = express();
const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/course");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
