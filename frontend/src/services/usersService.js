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
