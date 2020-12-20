import React, {createContext, useState} from 'react';

export const AffineTransformationsContext = createContext('color-models');

const AffineTransformationsProvider = ({children}) => {
  const [properties, setProperties] = useState({
    rotationInDegrees: 0,
    points: [[0, 0], [0, 0], [0, 0]],
    rotationPoint: 0,
    xScale: 1,
    yScale: 1
  });

  return (
    <AffineTransformationsContext.Provider value={{properties, setProperties}}>
      {children}
    </AffineTransformationsContext.Provider>
  );
};

export default AffineTransformationsProvider;