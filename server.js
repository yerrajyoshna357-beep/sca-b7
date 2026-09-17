const express = require("express");
const mongoose = require("mongoose");
const { student } = require("./models/studentModel.js");
const {
  getstudents,
  getstudent,
  create_student,
  create_students,
  studentById,
  updateo,
  updatem,
  deleteo,
  deletem,
  deleteById,
  deleteId,
} = require("./controllers/studentController.js");
const app = express();
app.use(express.json());
const port = 5500;
mongoose
  .connect("mongodb://localhost:27017/csea_athidi")
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((e) => {
    console.log(`error is ${e}`);
  });

app.post("/create_student", create_student);
app.post("/create_students", create_students);
app.get("/students", getstudents);
app.get("/student", getstudent);
app.get("/student/:id", studentById);
app.put("/updateo", updateo);
app.put("/updatem", updatem);
app.delete("/deleteo", deleteo);
app.delete("/deletem", deletem);
app.delete("/delete/:stid", deleteById);
app.delete("/deleteid", deleteId);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});