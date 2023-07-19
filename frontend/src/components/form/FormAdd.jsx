import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { UsersContext } from "../../context/UsersContext";

const FormAdd = ({ onSubmit, onClose }) => {
  const { createUserAndSetData } = useContext(UsersContext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [employment, setEmployment] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname,
      email,
      gender,
      phone,
      employment,
      picture_profile: getPictureProfile(gender),
    };

    try {
      await createUserAndSetData(newUser);
      onSubmit();
      onClose();
      console.log("message success : Is Created ! 🎉");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const getPictureProfile = (gender) => {
    switch (gender) {
      case "Men":
        return "https://avatars.dicebear.com/api/micah/Sheba.svg";
      case "Women":
        return "https://avatars.dicebear.com/api/micah/Rascal.svg";
      case "No-Specified":
        return "https://avatars.dicebear.com/api/micah/Garfield.svg";
      default:
        return "";
    }
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Men"
              checked={gender === "Men"}
              onChange={handleGenderChange}
            />
            Men
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Women"
              checked={gender === "Women"}
              onChange={handleGenderChange}
            />
            Women
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="No-Specified"
              checked={gender === "No-Specified"}
              onChange={handleGenderChange}
            />
            No-Specified
          </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="employment">Employment:</label>
        <input
          type="text"
          id="employment"
          value={employment}
          onChange={(e) => setEmployment(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="button button--green button--border-thick button--size-s">
          Create !
        </button>
        <button
          type="button"
          className="button button--green button--red button--border-thick button--size-s"
          onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

FormAdd.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

export default FormAdd;
