import React, {createContext} from 'react';

export const FractalsContext = createContext('color-models');

const FractalsProvider = ({children}) => {


  return (
    <FractalsContext.Provider value={{}}>
      {children}
    </FractalsContext.Provider>
  );
};

export default FractalsProvider;