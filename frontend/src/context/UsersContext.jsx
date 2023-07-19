import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { getUsers, createUser } from "../services/usersService";

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
      console.log(data[randomIndex]);
    } catch (error) {
      console.error(error);
    }
  };

  const createUserAndSetData = async (user) => {
    try {
      const data = await createUser(user);
      setUserData(data);
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
