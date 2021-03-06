const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const Route = require("./routes");

// setup the express app
const app = express();

//Log requests to the console
app.use(logger("dev"));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Route);

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res
    .status(200)
    .send({ message: "Welcome to Population Management System", status: 200 });
});

app.get("*", (req, res) => {
  res
    .status(400)
    .send({ message: "This action cannot be executed. Got to /api to see all available routes" });
});

app.listen(port, () => console.log(`Server started on port ${port}`));


module.exports = app;
