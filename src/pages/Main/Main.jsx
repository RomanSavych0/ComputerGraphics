import React from "react";
// import fractal from "../../images/fractal";
import colorModels from "../../images/colorModels.png";
import triangle from "../../images/triangle.png";
import fractal from "../../images/fractal.png";
import { NavLink } from "react-router-dom";
export const Main = () => {
  return (
    <div className="container">
      <div className="title"> Computer Graphics</div>
      <div className="cards">
        <NavLink to="/fractal">
          <div className="card">
            <img src={fractal} />
            <div className="card__description">Fractal</div>
          </div>
        </NavLink>
        <NavLink to="/models">
          <div className="card">
            <img src={colorModels} />
            <div className="card__description"> Color models</div>
          </div>
        </NavLink>
        <NavLink
          // @ts-ignore
          Navlink
          to="/triagnle"
        >
          <div className="card">
            <img src={triangle} />
            <div className="card__description"> Affine transformations</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
