import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "../auth.css";
import Header from "../../../components/Header/Header";

function Login({ loginInfo }) {
  const [loginForm, setLoginForm] = useState({
    username: "",
    email: "",
    password: "",
    rememberUser: false,
  });

  useEffect(() => {
    document.title = "Login";
  }, []);

  const updateLoginForm = (e) => {
    e.target.name === "rememberUser"
      ? setLoginForm({
          ...loginForm,
          rememberUser: !loginForm.rememberUser,
        })
      : setLoginForm({
          ...loginForm,
          [e.target.name]: e.target.value,
        });
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Header />
      <div className="flex-row flex-center login-main">
        <div className="card-vertical form-card card-shadow ">
          <div className="card-body text-md">
            <h1 className="card-title text-lg m-m font-extrabold text-center">
              Login
            </h1>
            <div className="form-container ">
              <label className="flex-column">
                <span className="text-md socketui-label label-required">
                  Email:
                </span>
                <input
                  className="socketui-input text-md"
                  type="email"
                  name="email"
                  placeholder="xyz@abc.com"
                  required
                  value={loginForm.email}
                  onChange={(e) => updateLoginForm(e)}
                />
              </label>
              <label className="flex-column">
                <span className="text-md socketui-label label-required">
                  Password:
                </span>
                <div className="flex-row input-border">
                  <input
                    className="socketui-input password-input text-md"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="******"
                    required
                    value={loginForm.password}
                    onChange={(e) => updateLoginForm(e)}
                  ></input>
                  <span
                    className="text-blue password-show"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </label>

              <label>
                <input
                  type="checkbox"
                  name="rememberUser"
                  value={loginForm.rememberUser}
                  onChange={(e) => updateLoginForm(e)}
                />
                <span className="text-md">Remember me</span>
              </label>

              <Link className="text-blue" to="../PageNotFound">
                Forgot your Password?
              </Link>
              <Link
                to="../Products"
                className="button-primary link-btn text-md text-center"
                onClick={() => loginInfo.setIsLogin(true)}
              >
                Login
              </Link>

              <Link
                className="text-center link-btn button-outline-secondary"
                to="../Signup"
              >
                Create new account{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
