import { useState, useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import FormAdd from "./form/FormAdd";
import FormPut from "./form/FormPut";

const Button = () => {
  const {
    setUserData,
    usersData,
    createUserAndSetData,
    updateUserAndSetData,
    deleteUser,
  } = useContext(UsersContext);
  const [showFormAdd, setShowFormAdd] = useState(false);
  const [showPutForm, setShowPutForm] = useState(false);

  const handleGetNew = () => {
    const randomIndex = Math.floor(Math.random() * usersData.length);
    setUserData(usersData[randomIndex]);
  };

  const handleAddNew = () => {
    setShowFormAdd(true);
    setShowPutForm(false);
  };

  const handleUpdate = () => {
    setShowPutForm(true);
    setShowFormAdd(false);
  };

  const handleFormSubmit = async (user) => {
    if (showPutForm) {
      await updateUserAndSetData(user);
    } else {
      await createUserAndSetData(user);
    }
    showFormAdd(false);
    setShowPutForm(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser();
    }
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
      <button
        className="button button--green button--blue button--border-thick button--size-s"
        onClick={handleUpdate}>
        Update
      </button>
      <button
        className="button button--green button--red button--border-thick button--size-s"
        onClick={handleDelete}>
        Delete
      </button>
      {showFormAdd && (
        <FormAdd
          onSubmit={handleFormSubmit}
          onClose={() => setShowFormAdd(false)}
        />
      )}
      {showPutForm && (
        <FormPut
          onSubmit={handleFormSubmit}
          onClose={() => setShowPutForm(false)}
        />
      )}
    </div>
  );
};

export default Button;
