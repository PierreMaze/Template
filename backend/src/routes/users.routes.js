const express = require("express");

const router = express.Router();

// Controllers
const {
  GetUsers,
  GetUserById,
  GetRandomUserId,
  GetUserByFullName,
  RegisterUser,
  LoginUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/users.controllers");

// Middlewares
const { hashPassword } = require("../middleware/Auth");
const { VerifyMail } = require("../middleware/VerifyMail");
const { VerifyAccount } = require("../middleware/VerifyAccount");

// Publics Routes
router.get("/", GetUsers);
router.get("/user/:id", GetUserById);
router.get("/random", GetRandomUserId);

router.get("/name/:name", GetUserByFullName);
router.post("/register", VerifyMail, hashPassword, RegisterUser);
router.post("/login", VerifyAccount, LoginUser);
router.put("/update/:id", UpdateUser);
router.delete("/delete/:id", DeleteUser);

module.exports = router;
