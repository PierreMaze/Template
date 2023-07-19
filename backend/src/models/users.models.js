/* eslint-disable camelcase */
const connection = require("../services/db");

const getAllUsers = async () => {
  try {
    // Exécuter la requête SQL en utilisant la connexion à la base de données
    const [response] = await connection.promise().query("SELECT * FROM users");
    return response;
  } catch (error) {
    throw new Error("Failed to get all users");
  }
};

const addUser = async (user) => {
  const {
    fullname,
    email,
    gender,
    phone,
    picture_profile,
    is_admin = false,
    employment,
  } = user;
  try {
    const result = await connection
      .promise()
      .query(
        "INSERT INTO users (fullname, email, gender, phone, picture_profile, is_admin, employment) VALUES(?, ?, ?, ?, ?, ?, ?)",
        [fullname, email, gender, phone, picture_profile, is_admin, employment]
      );
    if (result.affectedRows === 1) {
      console.info(result);
      return result.insertId;
    }
    return user;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

const updateUser = async (user, id) => {
  const {
    fullname,
    email,
    gender,
    phone,
    picture_profile,
    is_admin = false,
    employment,
  } = user;
  try {
    const sql =
      "UPDATE users SET fullname = ?, email = ?, gender = ?, phone = ?, picture_profile = ?, is_admin = ?, employment = ? WHERE id = ?";

    const response = await connection
      .promise()
      .query(sql, [
        fullname,
        email,
        gender,
        phone,
        picture_profile,
        is_admin,
        employment,
        id,
      ]);

    if (response[0].affectedRows === 1) {
      return fullname;
    }
    return [id];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user");
  }
};

const deleteUser = async (id) => {
  try {
    const [response] = await connection
      .promise()
      .query("DELETE FROM users WHERE id = ?", id);
    if (response.affectedRows === 1) {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
};
