import { useState } from "react";

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
            <a href="/" className="navbar_link">
              Accueil
            </a>
          </li>
          <li className="navbar_item">
            <a href="/heros" className="navbar_link">
              Users
            </a>
          </li>
          <li className="navbar_item">
            <a href="/about" className="navbar_link">
              A Propos
            </a>
          </li>
        </ul>
        <button className="navbar_burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
        <div className="navbar_logo">
          <h2>Logo</h2>
        </div>
        {/* <a className="navbar_login">
          <img src="src\assets\image\loginToken.png" alt="Token Login" />
        </a> */}
      </nav>
    </>
  );
};

export default Sidebar;
