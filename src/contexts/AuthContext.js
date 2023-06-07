import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContextProvider = ({ children }) => {
  const localStorageKey = "FSWEB0323";
  let history = useHistory();
  const [auth, setAuth] = useState({});
  let logIn = auth && auth.token;
  const handleAuth = (authData) => {
    axios
      .post("http://localhost:9000/api/login", authData)
      .then(function (response) {
        console.log(response);
        response.data && setAuth(response.data);
        localStorage.setItem(localStorageKey, response.data.token);
      })
      .catch(function (error) {
        window.alert("Please check your username and password!");
      });
  };

  const logOut = () => {
    localStorage.removeItem(localStorageKey);
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ handleAuth, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext();
export default AuthContextProvider;
