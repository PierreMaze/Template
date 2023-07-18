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
      setUserData(data[0]);
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
