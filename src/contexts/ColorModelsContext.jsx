import React, { createContext, useState } from "react";

export const ColorModelsContext = createContext("color-models");

const ColorModelsProvider = ({ children }) => {
  const [fileSrc, setFileSrc] = useState("");
  const [greenSaturation, setGreenSaturation] = useState("1");

  return (
    <ColorModelsContext.Provider
      // @ts-ignore
      value={{
        fileSrc,
        setFileSrc,
        greenSaturation,
        setGreenSaturation,
      }}
    >
      {children}
    </ColorModelsContext.Provider>
  );
};

export default ColorModelsProvider;
