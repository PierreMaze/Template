const jwt = require("jsonwebtoken");

/* eslint-disable camelcase */
const {
  getAllUsers,
  registerUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByFullName,
} = require("../models/users.models");

const GetUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).message("no users found");
    }
  } catch (error) {
    res.status(500).send("All Users not found");
  }
};

// Obtenir un utilisateur par son ID;
const GetUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send({ message: "no user found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Rechercher un utilisateur par son nom_complet
const GetUserByFullName = async (req, res) => {
  try {
    const { name } = req.params;
    const user = await getUserByFullName(name);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send({ message: "no user found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Créer un utilisateur
const RegisterUser = async (req, res) => {
  try {
    const create = await registerUser(req.body);
    res.status(201).json({ create });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Log un utilisateur
const LoginUser = async (req, res) => {
  const { id, is_admin } = req.body;
  try {
    const payload = { id, is_admin };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update un utilisateur
const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await updateUser(req.body, id);
    if (response) {
      res.status(200).send({ message: "user updated" });
    } else {
      res.status(404).send({ message: "user not updated" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un utilisateur
const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteUser(id);
    if (response) {
      res.status(200).send({ message: "user deleted" });
    }
    res.status(404).send({ message: "user not deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  GetUsers,
  GetUserById,
  GetUserByFullName,
  RegisterUser,
  LoginUser,
  UpdateUser,
  DeleteUser,
};
