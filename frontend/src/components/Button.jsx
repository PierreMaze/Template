import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const Button = () => {
  const { loadRandomUserById, postNewUser, deleteUserById, userData } =
    useContext(UsersContext);

  const handleGetNew = () => {
    loadRandomUserById();
  };

  const handleAddNew = () => {
    const newUser = {
      // Remplacez les valeurs ci-dessous par les valeurs du formulaire d'ajout
      fullname: "John Smith",
      email: "john.smith@example.com",
      gender: "Men",
      phone: "1234567890",
      employment: "Developer",
    };
    postNewUser(newUser);
  };

  const handleUpdate = () => {
    // Ouvrez le composant de formulaire pour la mise à jour
  };

  const handleDelete = () => {
    const userId = userData.id;
    deleteUserById(userId);
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
    </div>
  );
};

export default Button;
