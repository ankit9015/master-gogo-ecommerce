import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../auth.css";

function Signup({ signupInfo }) {
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
    acceptTAndC: false,
  });

  useEffect(() => console.log(signupForm));

  const updateSignupForm = (e) => {
    e.target.name === "acceptTAndC"
      ? setSignupForm({
          ...signupForm,
          rememberUser: !signupForm.acceptTAndC,
        })
      : setSignupForm({
          ...signupForm,
          [e.target.name]: e.target.value,
        });
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-row flex-center login-main">
      <div className="card-vertical form-card card-shadow ">
        <div className="card-body text-md">
          <h1 className="card-title text-lg m-m font-extrabold text-center">
            Signup
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
                value={signupForm.email}
                onChange={(e) => updateSignupForm(e)}
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
                  value={signupForm.password}
                  onChange={(e) => updateSignupForm(e)}
                ></input>
                <span
                  className="text-blue password-show"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  show
                </span>
              </div>
            </label>

            <label>
              <input
                type="checkbox"
                name="rememberUser"
                value={signupForm.acceptTAndC}
                onChange={(e) => updateSignupForm(e)}
              />
              <span className="text-md">
                I accept all the Terms and Conditions
              </span>
            </label>

            <Link
              to="../Products"
              className="button-primary link-btn text-md text-center"
              onClick={() => signupInfo.setIsSignup(true)}
            >
              Create new account
            </Link>

            <Link
              className="text-center link-btn button-outline-secondary"
              to="../Login"
            >
              Already have an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
