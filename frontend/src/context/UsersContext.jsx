import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import {
  getUsers,
  GetRandomUserId,
  AddUser,
  deleteUser,
  updateUserById,
} from "../services/usersService";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [usersData, setUsersData] = useState([]);
  const [userData, setUserData] = useState();

  async function loadUsers() {
    const data = await getUsers();
    setUsersData(data);
    console.info(data);
  }

  async function loadRandomUserById() {
    const data = await GetRandomUserId();
    setUserData(data);
  }

  async function postNewUser(user) {
    const data = await AddUser(user);
    setUsersData((prevData) => [...prevData, data]);
    return data;
  }

  async function deleteUserById(id) {
    try {
      await deleteUser(id);
      setUsersData((prevData) => prevData.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  async function updateUser(id, updatedUser) {
    try {
      const data = await updateUserById(id, updatedUser);
      setUsersData((prevData) =>
        prevData.map((user) => (user.id === id ? data : user))
      );
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const value = useMemo(
    () => ({
      usersData,
      userData,
      loadUsers,
      loadRandomUserById,
      postNewUser,
      deleteUserById,
      updateUser,
    }),
    [usersData, userData]
  );

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
