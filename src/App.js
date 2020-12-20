import './main.scss';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Fractals} from './pages/Fractals/Fractals';
import {ColorModels} from './pages/ColorModels/ColorModels';
import {AffineTransformations} from './pages/AffineTransformations/AffineTransformations';
import {Main} from './pages/Main/Main';
import React from 'react';

function App() {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact render={() => <Main/>}/>
        <Route path="/fractals" exact render={() => <Fractals/>}/>
        <Route path="/color-models" exact render={() => <ColorModels/>}/>
        <Route path="/affine-transformations" exact render={() => <AffineTransformations/>}/>
        <Redirect to={'/'}/>
      </Switch>
    </div>
  );
}

export default App;
