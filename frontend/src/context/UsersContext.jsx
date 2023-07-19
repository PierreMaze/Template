import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/UsersService";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [usersData, setUsersData] = useState([]);
  const [userData, setUserData] = useState();

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsersData(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      setUserData(data[randomIndex]);
      console.log("This is data GET :", data[randomIndex]);
    } catch (error) {
      console.error(error);
    }
  };

  const createUserAndSetData = async (user) => {
    try {
      const data = await createUser(user);
      setUserData(data);
      console.log("This is data POST :", data, user);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserAndSetData = async (user) => {
    try {
      const data = await updateUser(user);
      setUserData(data);
      console.log("This is data PUT :", data, user);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUserAndSetData = async (id) => {
    try {
      await deleteUser(id);
      setUserData(null);
      console.log("This is data PUT :", id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const value = useMemo(
    () => ({
      usersData,
      userData,
      setUserData,
      createUserAndSetData,
      updateUserAndSetData,
      deleteUserAndSetData,
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
