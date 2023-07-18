import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const Button = () => {
  const { setUserData, usersData } = useContext(UsersContext);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * usersData.length);
    setUserData(usersData[randomIndex]);
  };
  return (
    <div className="box bg">
      <button
        className="button button--green button--border-thick button--size-s"
        onClick={handleClick}>
        Get New
      </button>
      <button className="button button--green button--pink button--border-thick button--size-s">
        Add New
      </button>
      <button className="button button--green button--blue button--border-thick button--size-s">
        Update
      </button>
      <button className="button button--green button--red button--border-thick button--size-s">
        Delete
      </button>
    </div>
  );
};

export default Button;
