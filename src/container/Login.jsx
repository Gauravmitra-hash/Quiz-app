import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useUserContext();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("userInfo"));
    console.log(data);
    if (
      userInfo["email"].toLowerCase() === data["email"].toLowerCase() &&
      userInfo["password"].toLowerCase() === data["password"].toLowerCase()
    ) {
      console.log("Successs");
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      console.log("Fail");
    }
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  return (
    <form onSubmit={handleSubmit} className="container-login">
      <div className="login-heading">Login</div>
      <div className="login-card">
        <input
          value={userInfo.email}
          onChange={handleChange}
          name="email"
          placeholder="john@gmail.com"
        />
        <input
          value={userInfo.password}
          onChange={handleChange}
          name="password"
          placeholder="********"
          type="password"
        />
      </div>

      <div className="login-btn">
        <button>Login</button>
      </div>
      <div className="register-text">
        <p>Don't have an account ?</p>
        <Link className="register-text-link" to="/register">
          {" "}
          Register{" "}
        </Link>
      </div>
    </form>
  );
};

export default Login;
