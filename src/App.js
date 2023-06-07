import "./App.css";
import LoginForm from "./components/Login";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/friends-list/">
            <FriendsList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
