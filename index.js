const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();
var bodyParser = require("body-parser");

const ChartData = require("./mongoDB/ChartData");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected!"));

app.get("/", async (req, res) => {
 
    
    res.status(200).json("bimci");
 
});

app.listen(3000, () => {
  console.log("connected");
});
