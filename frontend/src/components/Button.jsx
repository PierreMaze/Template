import { useState, useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import FormAdd from "./forms/FormAdd";

const Button = () => {
  const { setUserData, usersData, createUser } = useContext(UsersContext);
  const [showForm, setShowForm] = useState(false);

  const handleGetNew = () => {
    const randomIndex = Math.floor(Math.random() * usersData.length);
    setUserData(usersData[randomIndex]);
  };

  const handleAddNew = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (user) => {
    await createUser(user);
    setShowForm(false);
  };

  return (
    <div className="box bg">
      <button
        className="button button--green button--border-thick button--size-s"
        onClick={handleGetNew}>
        Get New
      </button>
      <button
        className="button button--green button--pink button--border-thick button--size-s"
        onClick={handleAddNew}>
        Add New
      </button>
      <button className="button button--green button--blue button--border-thick button--size-s">
        Update
      </button>
      <button className="button button--green button--red button--border-thick button--size-s">
        Delete
      </button>
      {showForm && <FormAdd onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default Button;
