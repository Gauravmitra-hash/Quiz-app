import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks";

const Register = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useUserContext();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(target.value, target.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    navigate("/login");
  };

  // isLoggedIn = true;
  useEffect(() => {
    if (isLoggedIn) navigate("/");

    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const { email, password, confirmPassword } = userInfo;

  return (
    <form onSubmit={handleSubmit} className="container-login">
      <div className="login-heading">Register</div>
      <div className="login-card">
        <input
          type="text"
          value={email}
          onChange={handleChange}
          name="email"
          placeholder="John@gmail.com"
        />
        <input
          value={password}
          onChange={handleChange}
          name="password"
          placeholder="********"
          type="password"
        />
        <input
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          placeholder="********"
          type="password"
        />
      </div>

      <div className="login-btn">
        <button type="submit">Register</button>
      </div>
      <div className="register-text">
        <p>Already have an account ?</p>
        <Link className="register-text-link" to="/login">
          Login
        </Link>
      </div>
    </form>
  );
};

export default Register;
