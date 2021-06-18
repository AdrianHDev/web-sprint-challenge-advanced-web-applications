import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import "./styles.scss";

function App() {
  const handleLogout = () => {
    // axiosWithAuth().post('http://localhost:5000/api/logout')
    // No way to log out according to API docs, and MSW doesn't have a way either.
    localStorage.removeItem("token");
  };
  return (
    <Router>

      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={handleLogout} data-testid="logoutButton" href="#">
            logout
          </a>
        </header>

        <Route exact path="/" component={Login} />
      <Switch>
        <PrivateRoute path="/bubbles">
          <BubblePage />
        </PrivateRoute>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
