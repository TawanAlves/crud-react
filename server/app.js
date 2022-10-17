const express = require("express");
const app = express();
const port = 3333;
const cors = require("cors");
const studentRoute = require("./src/routes/studentRoute");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/student", studentRoute);

app.listen(port, () => {
  console.log("Estamos rodando em http://localhost:" + port);
});
