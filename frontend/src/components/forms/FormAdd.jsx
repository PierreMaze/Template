import { useState, useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

const FormAdd = (onSubmit) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [employment, setEmployment] = useState("");

  const { createUser } = useContext(UsersContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      fullname,
      email,
      gender,
      phone,
      employment,
    };

    createUser(newUser)
      .then(() => {
        onSubmit(newUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Fullname:
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Gender:
        <div>
          <label>
            <input
              type="radio"
              value="Men"
              checked={gender === "Men"}
              onChange={(e) => setGender(e.target.value)}
            />
            Men
          </label>
          <label>
            <input
              type="radio"
              value="Women"
              checked={gender === "Women"}
              onChange={(e) => setGender(e.target.value)}
            />
            Women
          </label>
          <label>
            <input
              type="radio"
              value="No-Specified"
              checked={gender === "No-Specified"}
              onChange={(e) => setGender(e.target.value)}
            />
            No-Specified
          </label>
        </div>
      </label>
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Employment:
        <input
          type="text"
          value={employment}
          onChange={(e) => setEmployment(e.target.value)}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default FormAdd;
