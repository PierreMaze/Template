import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./FooterCard";

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
    <ul className="box-card">
      {users.map((user) => (
        <li key={user.id}>
          <div className="container">
            <div className="box-main">
              <div className="box-img">
                <img src={user.picture_profile} alt="picture" />
              </div>
            </div>
            <div className="box-secondary">
              <div className="box-title">
                <h1>Hello World!</h1>
                <h2>My name is {user.fullname}</h2>
              </div>
              <div className="box-subtitle">
                <p>
                  You can contact me by email :
                  <a href="https://www.linkedin.com/\in\pierremazelaygue">
                    <strong> {user.email}</strong>
                  </a>
                </p>
                <p>
                  <strong>Or by phone: </strong>
                  {user.phone}.
                </p>
                <p>
                  <strong>Gender : </strong>
                  {user.gender}.
                </p>
                <p>
                  <strong>Job : </strong>
                  {user.employment}.
                </p>
                <Footer />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
