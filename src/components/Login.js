import React, { useState, useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const LoginForm = () => {
  const [data, setData] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  const { handleAuth } = useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();
    handleAuth(data);
  };

  const dataHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form">
      <form onSubmit={loginHandler}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="uname"
            required
            onChange={dataHandler}
            defaultValue={data.username}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            onChange={dataHandler}
            defaultValue={data.password}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
