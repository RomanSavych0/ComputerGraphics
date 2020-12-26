// @ts-nocheck
import React, { useContext, useRef, useEffect, useState } from "react";
import s from "./ColorModels.module.scss";
import { ColorModelsContext } from "../../contexts/ColorModelsContext";
import convert from "color-convert";

const ColorModelsView = () => {
  const { fileSrc, greenSaturation, setPixels, setImageSize } = useContext(
    ColorModelsContext
  );
  const canvasRef = useRef();
  const imageRef = useRef();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageData = useRef();

  const onLoadImage = () => {
    setIsImageLoaded(true);
    setInitialCanvas();
  };
  let canvasUrl = "";

  if (fileSrc) {
    let canvas = document.getElementById("canvass");
    if (canvas) {
      canvasUrl = canvas.toDataURL();
    }
  }
  console.log(canvasUrl);
  const setInitialCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = imageRef.current;
    const width = image.clientWidth;
    const height = image.clientHeight;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0, width, height);
    setImageSize({ width, height });
  };

  const getPixels = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  };

  const filter = () => {
    for (let i = 0; i < imageData.current.data.length; i += 4) {
      let rgb = imageData.current.data.slice(i, i + 4);
      let hsl = convert.rgb.hsl(rgb);

      hsl[0] = 120;
      hsl[1] = greenSaturation * 100;

      rgb = convert.hsl.rgb(hsl);

      imageData.current.data[i] = rgb[0];
      imageData.current.data[i + 1] = rgb[1];
      imageData.current.data[i + 2] = rgb[2];
    }
  };

  useEffect(() => {
    if (fileSrc) {
      setIsImageLoaded(false);
      imageRef.current.onload = onLoadImage;
    }
  }, [fileSrc]);

  useEffect(() => {
    if (isImageLoaded) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      imageData.current = getPixels();
      filter();
      ctx.putImageData(imageData.current, 0, 0);
      setPixels(imageData.current.data);
    }
  }, [isImageLoaded, greenSaturation]);

  return (
    <div style={{ height: "100%" }}>
      <div className={s.IOContainer}>
        {fileSrc && (
          <img
            ref={imageRef}
            src={fileSrc}
            className={s.IOImage}
            alt={"initImage"}
          />
        )}
      </div>
      <div className={s.IOContainer}>
        {fileSrc && <canvas ref={canvasRef} id="canvass" />}
      </div>
      <a href={canvasUrl} download>
        Click to download
      </a>
    </div>
  );
};

export default ColorModelsView;
