import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import Game from "./components/tic-tac-toe/Game";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <div className="layout">
        <Game />
      </div> */}
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
