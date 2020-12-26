import React, { createContext, useState } from "react";

export const ColorModelsContext = createContext("color-models");

const ColorModelsProvider = ({ children }) => {
  const [pixels, setPixels] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
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
        pixels,
        setPixels,
        imageSize,
        setImageSize,
      }}
    >
      {children}
    </ColorModelsContext.Provider>
  );
};

export default ColorModelsProvider;
