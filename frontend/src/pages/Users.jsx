import { useContext } from "react";
import Card from "../components/card/Card";
import { UsersContext } from "../context/UsersContext";
import axios from "axios";

const Users = () => {
  // const [randomUser, setRandomUser] = useState(null);
  const { usersData, loadUsers } = useContext(UsersContext);
  console.log(usersData);
  // const HandleGetRandomUser = async () => {
  //   try {
  //     const response = loadRandomUserById();
  //     const users = response.data;
  //     if (users.length > 0) {
  //       const randomIndex = Math.floor(Math.random() * users.length);
  //       const randomUser = users[randomIndex];
  //       setRandomUser(randomUser);
  //     } else {
  //       throw new Error("No users found.");
  //     }
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleAddNewUser = async () => {
    try {
      const newUser = {
        fullname: "User",
        email: "david.wilson@example.com",
        gender: "User",
        phone: "0543210987",
        picture_profile:
          "https://avatars.dicebear.com/api/micah/DavidWilson.svg",
        is_admin: false,
        employment: "Lawyer",
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/register`,
        newUser
      );
      console.log(response.data); // Utilisez les données pour mettre à jour votre composant
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/users/update/{id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/users/delete/{id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <Card />

      <div className="box bg">
        <button
          className="button button--green button--border-thick button--size-s"
          onClick={() => loadUsers()}>
          Get New
        </button>
        <button
          className="button button--green button--pink button--border-thick button--size-s"
          onClick={handleAddNewUser}>
          Add New
        </button>
        <button
          className="button button--green button--blue button--border-thick button--size-s"
          onClick={handleUpdateUser}>
          Update
        </button>
        <button
          className="button button--green button--red button--border-thick button--size-s"
          onClick={handleDeleteUser}>
          Delete
        </button>
      </div>
      {/* <form>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <button type="submit" onClick={createUser}>
          Submit
        </button>
      </form> */}
    </main>
  );
};

export default Users;
