import axios from "axios";

export async function getUsers() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/users`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function GetRandomUserId() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/users/random`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function postUser(user) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/users/register-admin`,
      user
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/users/delete/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateUserById(id, updatedUser) {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/users/update/${id}`,
      updatedUser
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
