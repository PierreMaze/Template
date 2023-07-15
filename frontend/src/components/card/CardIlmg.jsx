import axios from "axios";
import { useEffect, useState } from "react";

const CardIlmg = () => {
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
    <div className="box-main">
      {users.map((user) => (
        <div className="box-img" key={user.id}>
          <img src={user.picture_profile} alt="picture" />
        </div>
      ))}
    </div>
  );
};

export default CardIlmg;
