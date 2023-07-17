import { useEffect, useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import Footer from "./FooterCard";

const Card = () => {
  const { usersData, loadUsers } = useContext(UsersContext);
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <ul className="box-card">
      {usersData &&
        usersData.map((user) => (
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
