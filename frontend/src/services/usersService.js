import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/users`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/users/add`,
      user
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
};

export const updateUser = async (id) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/users/update/${id}`,
      id
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user");
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/users/delete/${id}`
    );
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete user");
  }
};
