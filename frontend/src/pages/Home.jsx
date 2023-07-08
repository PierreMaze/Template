import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users/");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Hello!</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.fullname}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
