// Depuis le fichier <users.controllers.js> dans le dossier "controllers" dans le dossier "src" dans le dossier "backend"

/* eslint-disable camelcase */
const {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
} = require("../models/users.models");

const GetUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get all users" });
  }
};

// Créer un utilisateur
const AddUser = async (req, res) => {
  try {
    const createdUser = await addUser(req.body);
    res.status(201).json({ user: createdUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Mettre à jour un utilisateur
const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await updateUser(req.body, id);
    if (updatedUser) {
      res.status(200).json({ message: "User updated" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Supprimer un utilisateur
const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    if (deletedUser) {
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};

module.exports = {
  GetUsers,
  AddUser,
  UpdateUser,
  DeleteUser,
};
