import logo from "./logo.svg";
// import "./App.css";
import "./main.scss";

import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Fractal } from "./pages/Fractals/Fractal";
import { Models } from "./pages/Models/Models";
import { Triangles } from "./pages/Triangles/Triangles";
import { Main } from "./pages/Main/Main";
import React from "react";

function App() {
  return (
    <div className="main">
      <Switch>
        <Route path="/fractal" exact render={() => <Fractal />} />
        <Route path="/" exact render={() => <Main />} />
        <Route path="/models" exact render={() => <Models />} />
        <Route path="/triangle" exact render={() => <Triangles />} />
      </Switch>
    </div>
  );
}

export default App;
