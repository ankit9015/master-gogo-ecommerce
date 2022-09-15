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

  const dummyData = {
    firstname: "Jane",
    lastname: "Doe",
    email: "janeDoe@gmail.com",
    password: "jane123",
    confirmPassword: "jane123",
    acceptTAndC: true,
  };

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
                    value={signupForm.password}
                    onChange={(e) => updateSignupForm(e)}
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
              <label className="flex-column">
                <span className="text-md socketui-label label-required">
                  Confirm Password:
                </span>
                {signupForm.password !== signupForm.confirmPassword && (
                  <p className="text-md text-red">Passwords are not matching</p>
                )}
                <div className="flex-row input-border">
                  <input
                    className="socketui-input password-input text-md"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    name="confirmPassword"
                    required
                    value={signupForm.confirmPassword}
                    onChange={(e) => updateSignupForm(e)}
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Enter matching password")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  ></input>
                </div>
              </label>

              <label>
                <input
                  type="checkbox"
                  name="acceptTAndC"
                  checked={signupForm.acceptTAndC}
                  onChange={(e) => updateSignupForm(e)}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Accept Terms and Conditions to Signup"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
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
              <button
                className="button-primary link-btn text-md text-center"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setSignupForm(dummyData);
                }}
              >
                Fill dummy data
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
