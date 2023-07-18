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
