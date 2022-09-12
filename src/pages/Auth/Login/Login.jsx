import { React, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "../auth.css";
import { Header } from "../../../components";
import { useAuth } from "../../../context";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberUser: false,
  });
  const { loginHandler } = useAuth();

  const guestInfo = {
    email: "ankitjoshi@gmail.com",
    password: "ankit123",
  };

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

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginForm);
  };

  return (
    <div>
      <Header />
      <div className="flex-row flex-center login-main">
        <div className="card-vertical form-card card-shadow ">
          <div className="card-body text-md">
            <h1 className="card-title text-lg m-m font-extrabold text-center">
              Login
            </h1>
            <form
              className="form-container "
              onSubmit={(e) => submitHandler(e)}
              autoComplete="true"
            >
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
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Email cannot be empty")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
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
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Password cannot be empty")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
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
              <button
                type="submit"
                className="button-primary link-btn text-md text-center"
              >
                Login
              </button>

              <button
                className="text-center text-md link-btn button-outline-secondary"
                onClick={() => loginHandler(guestInfo)}
              >
                Login as Guest
              </button>
              <Link
                className="text-center link-btn button-outline-secondary"
                to="../Signup"
              >
                Create new account{" "}
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
