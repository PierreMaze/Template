import axios from "axios";
import { useEffect, useState } from "react";
import CardBody from "./CardBody";
import CardImage from "./CardIlmg";
const Card = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/users/`
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="box">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="container">
              <CardImage />
              <CardBody />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
