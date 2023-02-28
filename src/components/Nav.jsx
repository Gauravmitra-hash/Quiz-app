import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const isLogged = JSON.parse(localStorage.getItem("isLoggedIn"));
  console.log(isLogged);

  const logoutBtn = () => {
    localStorage.setItem("isLoggedIn", false);
  };

  if (isLogged)
    return (
      <div className="navMain">
        <div>
          <p>
            QUI<span style={{ color: "red" }}>Z</span>
          </p>
        </div>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/quiz">
              Play
            </Link>
          </li>
          <li>
            <Link onClick={logoutBtn} className="nav-link" to="/login">
              logout
            </Link>
          </li>
        </ul>
      </div>
    );

  return (
    <div className="navMain">
      <div>
        <p>
          QUI<span style={{ color: "red" }}>Z</span>
        </p>
      </div>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
