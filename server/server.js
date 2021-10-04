const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connection Successfully done"))
  .catch((err) => console.log(`DB Connection Error ${err}`));

// middlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// route

app.get("/api", (req, res) => {
  res.json({
    data: "ranjeet hinge",
  });
});

//port

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
