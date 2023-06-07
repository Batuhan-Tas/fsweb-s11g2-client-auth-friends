import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import FriendsLists from "./FriendsList";

function Header() {
  const { logOut, logIn } = useContext(AuthContext);

  let history = useHistory();

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {!logIn && (
            <button onClick={() => history.push("/login")}>LOGIN</button>
          )}

          {logIn && (
            <>
              <button onClick={() => history.push("/friends-list/")}>
                FRIENDLIST
              </button>
              <button onClick={() => history.push("/friends/add")}>
                ADDFRIEND
              </button>
              <button onClick={logOut}>LOGOUT</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
