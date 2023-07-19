import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import Footer from "./FooterCard";

const Card = () => {
  const { userData } = useContext(UsersContext);

  return (
    <ul className="box-card">
      <li key={userData?.id}>
        <div className="container">
          <div className="box-main">
            <div className="box-img">
              <img src={userData?.picture_profile} alt="picture" />
            </div>
          </div>
          <div className="box-secondary">
            <div className="box-title">
              <h1>Hello World!</h1>
              <h2>My name is {userData?.fullname}</h2>
            </div>
            <div className="box-subtitle">
              <p>
                You can contact me by email:
                <a href="http://localhost:3000/">
                  <strong> {userData?.email}</strong>
                </a>
              </p>
              <p>
                <strong>Or by phone: </strong>
                {userData?.phone}.
              </p>
              <p>
                <strong>Gender: </strong>
                {userData?.gender}.
              </p>
              <p>
                <strong>Job: </strong>
                {userData?.employment}.
              </p>
              <Footer />
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Card;
