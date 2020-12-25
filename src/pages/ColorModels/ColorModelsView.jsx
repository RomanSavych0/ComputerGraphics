import React, { useContext, useEffect, useRef } from "react";
import s from "./ColorModels.module.scss";
import { ColorModelsContext } from "../../contexts/ColorModelsContext";

const ColorModelsView = () => {
  // @ts-ignore
  const { fileSrc, greenSaturation } = useContext(ColorModelsContext);
  const canvasImage = useRef(null);
  const image = useRef(null);
  const dynamicInputImageStyle = {
    backgroundImage: `url(${fileSrc})`,
  };

  const dynamicOutputImageStyle = {
    backgroundImage: `linear-gradient(green, green), url(${fileSrc})`,
    backgroundBlendMode: "color",
    filter: `saturate(${+greenSaturation})`,
  };
  useEffect(() => {}, []);

  return (
    <div style={{ height: "100%" }}>
      <div className={s.IOContainer}>
        {fileSrc && (
          <div style={dynamicInputImageStyle} className={s.IOImage} />
        )}
      </div>
      <div className={s.IOContainer}>
        {fileSrc && (
          <div className={s.IOImage} style={dynamicOutputImageStyle} />
        )}
      </div>
      <img src={fileSrc} ref={image} id="my-image" />
      <canvas
        ref={canvasImage}
        id="canvasImage"
        height="600"
        width="840"
      ></canvas>
    </div>
  );
};

export default ColorModelsView;
