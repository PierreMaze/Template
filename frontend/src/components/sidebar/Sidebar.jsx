import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
        <ul className="navbar_links">
          <li className="navbar_item">
            <NavLink to="/" className="navbar_link">
              Home
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink to="/users" className="navbar_link">
              Users
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink to="/about" className="navbar_link">
              About Us
            </NavLink>
          </li>
        </ul>
        <button className="navbar_burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
        <div className="navbar_logo">
          <h2>Logo</h2>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
