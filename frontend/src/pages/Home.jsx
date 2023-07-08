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
      <h2>Hello World!</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="box-img">
              <img src={user.picture_profile} alt="picture" />
            </div>
            <h1>Salut! Je m&apos;appelle {user.fullname}</h1>
            <h2>Tu peux me contacter avec ce mail: {user.email}</h2>
            <h3>Ou alors par ce numéro: {user.phone}</h3>
            <h4>je suis une {user.gender}</h4>
            <h5>
              Je suis Cheffe de chantier Pays-Urbain dans le {user.employment}
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
