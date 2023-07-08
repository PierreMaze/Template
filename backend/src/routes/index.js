const express = require("express");

const app = express();

const usersRoutes = require("./users.routes");

app.use("/users", usersRoutes);
module.exports = app;
