const express = require("express");

const router = express.Router();

// Controllers
const {
  GetUsers,
  AddUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/users.controllers");

// Routes
router.get("/", GetUsers);
router.post("/add", AddUser);
router.put("/update/:id", UpdateUser);
router.delete("/delete/:id", DeleteUser);

module.exports = router;
