import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../auth.css";
import { Header } from "../../../components";
import { useAuth } from "../../../context";

function Signup() {
  const { signupHandler } = useAuth();
  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTAndC: false,
  });

  const updateSignupForm = (e) => {
    e.target.name === "acceptTAndC"
      ? setSignupForm({
          ...signupForm,
          acceptTAndC: !signupForm.acceptTAndC,
        })
      : setSignupForm({
          ...signupForm,
          [e.target.name]: e.target.value,
        });
  };

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "Signup";
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Password doesn't match");
      return;
    }
    if (!signupForm.acceptTAndC) {
      alert("Accept Terms and Conditions");
      return;
    }
    signupHandler(signupForm);
  };

  return (
    <div>
      <Header />
      <div className="flex-row flex-center login-main">
        <div className="card-vertical form-card card-shadow ">
          <div className="card-body text-md">
            <h1 className="card-title text-lg m-m font-extrabold text-center">
              Signup
            </h1>
            <form
              className="form-container "
              onSubmit={(e) => submitHandler(e)}
            >
              <label className="flex-column">
                <span className="text-md socketui-label label-required">
                  Firstname:
                </span>
                <input
                  className="socketui-input text-md"
                  type="text"
                  name="firstname"
                  placeholder="Ankit"
                  required
                  value={signupForm.firstname}
                  onChange={(e) => updateSignupForm(e)}
                />
              </label>
              <label className="flex-column">
                <span className="text-md socketui-label label-required">
                  Lastname:
                </span>
                <input
                  className="socketui-input text-md"
                  type="text"
                  name="lastname"
                  placeholder="Joshi"
                  required
                  value={signupForm.lastname}
                  onChange={(e) => updateSignupForm(e)}
                />
              </label>
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
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </label>
              <label className="flex-column">
                <span className="text-md socketui-label label-required">
                  Confirm Password:
                </span>
                <div className="flex-row input-border">
                  <input
                    className="socketui-input password-input text-md"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    name="confirmPassword"
                    required
                    value={signupForm.confirmPassword}
                    onChange={(e) => updateSignupForm(e)}
                  ></input>
                </div>
              </label>

              <label>
                <input
                  type="checkbox"
                  name="acceptTAndC"
                  value={signupForm.acceptTAndC}
                  onChange={(e) => updateSignupForm(e)}
                />
                <span className="text-md label-required">
                  I accept all the Terms and Conditions
                </span>
              </label>

              <button
                type="submit"
                className="button-primary link-btn text-md text-center"
              >
                Create new account
              </button>

              <Link
                className="text-center link-btn button-outline-secondary"
                to="../Login"
              >
                Already have an account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
