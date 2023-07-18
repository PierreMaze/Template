import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { getUsers } from "../services/usersService";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [usersData, setUsersData] = useState([]);
  const [userData, setUserData] = useState();

  async function loadUsers() {
    try {
      const data = await getUsers();
      setUsersData(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      setUserData(data[randomIndex]);
      console.info(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const value = useMemo(
    () => ({
      usersData,
      userData,
      setUserData,
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
