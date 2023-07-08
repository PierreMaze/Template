import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./FooterCard";

const CardBody = () => {
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
    <div className="box-secondary">
      {users.map((user) => (
        <>
          <div className="box-title" key={user.id}>
            <h1>Hello World!</h1>
            <h2>Je m&apos;appelle {user.fullname}</h2>
          </div>
          <div className="box-subtitle">
            <p>
              Tu peux me contacter avec ce mail:{" "}
              <a href="https://www.linkedin.com/\in\pierremazelaygue">
                {user.email}
              </a>
            </p>
            <p>Ou alors par ce numéro: {user.phone}</p>
            <p>je suis une {user.gender}</p>
            <p>
              Je suis Cheffe de chantier Pays-Urbain dans le {user.employment}
            </p>
            <Footer />
          </div>
        </>
      ))}
    </div>
  );
};

export default CardBody;
