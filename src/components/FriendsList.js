import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function FriendsLists(props) {
  const history = useHistory();
  const { logIn, auth } = useContext(AuthContext);

  const [friends, setFriends] = useState([]);
  useEffect(() => {
    if (!logIn) {
      history.push("/login");
    } else {
      axios
        .get("http://localhost9001/api/friends", {
          headers: {
            authorization: auth.token,
          },
        })
        .then((res) => setFriends(res.data))
        .catch((err) => window.alert("Error"));
    }
  }, []);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
