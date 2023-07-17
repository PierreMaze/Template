import { useContext, useEffect } from "react";
import { UsersContext } from "../context/UsersContext";
import Card from "../components/card/Card";
import Button from "../components/Button";

const Users = () => {
  const { loadRandomUserById } = useContext(UsersContext);

  useEffect(() => {
    loadRandomUserById();
  }, []);

  return (
    <main>
      <Card />
      <Button />
    </main>
  );
};

export default Users;
