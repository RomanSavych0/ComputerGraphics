import React from 'react';
import colorModels from '../../images/colorModels.png';
import triangle from '../../images/triangle.png';
import fractal from '../../images/fractal.png';
import {NavLink} from 'react-router-dom';

export const Main = () => {
  return (
    <div className="container">
      <div className="title">Computer Graphics</div>
      <div className="cards">
        <NavLink to="/fractals">
          <div className="card">
            <img src={fractal} alt={'fractal'}/>
            <div className="card__description">Fractal</div>
          </div>
        </NavLink>
        <NavLink to="/color-models">
          <div className="card">
            <img src={colorModels} alt={'color-models'}/>
            <div className="card__description">Color models</div>
          </div>
        </NavLink>
        <NavLink to="/affine-transformations">
          <div className="card">
            <img src={triangle} alt={'triangle'}/>
            <div className="card__description">Affine transformations</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
