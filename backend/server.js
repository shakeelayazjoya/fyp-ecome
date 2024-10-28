const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");
const cookieparser = require("cookie-parser");
// create database connecion ->
// create separate file for this connection

mongoose
  .connect("mongodb+srv://shakeelayazjoia:12345@cluster0.qom1a.mongodb.net/")
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.error("Error connecting to DB", error);
  });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Authorization",
      "pargma",
      "cache-control",
    ],
    credentials: true,
  })
);

app.use(cookieparser());

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // eslint-disable-line no-console
});
