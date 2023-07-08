// create express app
const express = require("express");
const app = express();
app.use(express.json());

// import some node modules for later
const cors = require("cors");
const routes = require("./routes/index");

// use some application-level middlewares
const options = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "Authorization",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: process.env.BACKEND_URL,
  preflightContinue: false,
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(cors(options));

// import and mount the API routes
app.use("/", routes);

module.exports = app;
