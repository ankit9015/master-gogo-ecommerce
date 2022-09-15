import { createContext, useCallback, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "..";
import { loginHandlerService, signupHandlerService } from "../../services";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToast } = useToast();

  const [authState, setAuthState] = useState({
    authToken: JSON.parse(localStorage.getItem("AUTH-TOKEN")) ?? null,
    user: JSON.parse(localStorage.getItem("AUTH-USER")) ?? null,
  });

  const _loginHandler = async ({ email, password }) => {
    const res = await loginHandlerService({ email, password });
    console.log(res);
    if (res && res.status === 200) {
      const { data } = res;
      localStorage.setItem("AUTH-TOKEN", JSON.stringify(data.encodedToken));
      localStorage.setItem("AUTH-USER", JSON.stringify(data.foundUser));
      setAuthState({
        authToken: data.encodedToken,
        user: data.foundUser,
      });
      location.state
        ? navigate(location.state.from.pathname)
        : navigate("/products");
    } else {
      addToast({ content: "Incorrect Email or password", type: "ERROR" });
    }
  };

  const loginHandler = useCallback(_loginHandler, []);

  const signupHandler = async ({ firstname, lastname, email, password }) => {
    const res = await signupHandlerService({
      firstname,
      lastname,
      email,
      password,
    });
    if (res?.status === 201) {
      localStorage.setItem(
        "AUTH-TOKEN",
        JSON.stringify(res?.data.encodedToken)
      );
      localStorage.setItem("AUTH-USER", JSON.stringify(res?.data.createdUser));
      setAuthState({
        authToken: res.data.encodedToken,
        user: res.data.createdUser,
      });
      location.state ? navigate(location.state.from.pathname) : navigate("/");
    } else {
      addToast({
        content: "Signup Failed, email already exist",
        type: "ERROR",
      });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("AUTH-TOKEN");
    localStorage.removeItem("TRASH");
    setAuthState({ authToken: null, user: null });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        loginHandler,
        signupHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
