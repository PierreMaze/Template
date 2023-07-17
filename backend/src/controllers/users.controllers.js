/* eslint-disable camelcase */
const {
  getAllUsers,
  getUserRandomById,
  addUser,
  updateUser,
  deleteUser,
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

const GetRandomUserId = async (req, res) => {
  try {
    const randomUser = await getUserRandomById();

    if (randomUser) {
      res.status(200).json(randomUser);
    } else {
      res.status(404).send({ message: "no Random User found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Créer un utilisateur
const AddUser = async (req, res) => {
  try {
    const create = await addUser(req.body);
    res.status(201).json({ create });
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
  GetRandomUserId,
  AddUser,
  UpdateUser,
  DeleteUser,
};
