import React, {createContext, useState} from 'react';

export const ColorModelsContext = createContext('color-models');

const ColorModelsProvider = ({children}) => {
  return (
    <ColorModelsContext.Provider value={{}}>
      {children}
    </ColorModelsContext.Provider>
  );
};

export default ColorModelsProvider;