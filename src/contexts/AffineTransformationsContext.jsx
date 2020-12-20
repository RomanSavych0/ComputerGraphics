import React, {createContext} from 'react';

export const AffineTransformationsContext = createContext('color-models');

const AffineTransformationsProvider = ({children}) => {

  return (
    <AffineTransformationsContext.Provider value={{}}>
      {children}
    </AffineTransformationsContext.Provider>
  );
};

export default AffineTransformationsProvider;