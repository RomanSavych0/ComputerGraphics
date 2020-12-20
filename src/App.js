import './main.scss';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Fractals} from './pages/Fractals/Fractals';
import {ColorModels} from './pages/ColorModels/ColorModels';
import {AffineTransformations} from './pages/AffineTransformations/AffineTransformations';
import {Main} from './pages/Main/Main';
import React from 'react';
import FractalsProvider from './contexts/FractalsContext';
import ColorModelsProvider from './contexts/ColorModelsContext';
import AffineTransformationsProvider from './contexts/AffineTransformationsContext';

function App() {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact render={() => <Main/>}/>
        <Route path="/fractals" exact render={() => (
          <FractalsProvider>
            <Fractals/>
          </FractalsProvider>
        )}/>
        <Route path="/color-models" exact render={() => (
          <ColorModelsProvider>
            <ColorModels/>
          </ColorModelsProvider>
        )}/>
        <Route path="/affine-transformations" exact render={() => (
          <AffineTransformationsProvider>
            <AffineTransformations/>
          </AffineTransformationsProvider>
        )}/>
        <Redirect to={'/'}/>
      </Switch>
    </div>
  );
}

export default App;
