// @ts-nocheck
import React, {useContext, useRef, useEffect, useState} from 'react';
import s from './ColorModels.module.scss';
import {ColorModelsContext} from '../../contexts/ColorModelsContext';
import convert from 'color-convert';
import {files} from 'd3/dist/package';

const ColorModelsView = () => {
  const {fileSrc, greenSaturation, setPixels, setImageSize} = useContext(
    ColorModelsContext
  );
  const filterImageCanvasRef = useRef();
  const initImageCanvasRef = useRef();
  const imageRef = useRef();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [canvasUrl, setCanvasUrl] = useState('');
  const imageData = useRef();

  const onLoadImage = () => {
    setIsImageLoaded(true);
    setInitImageCanvas();
    setFilterImageCanvas();
  };

  const setInitImageCanvas = () => {
    const canvas = initImageCanvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = imageRef.current;
    const width = image.clientWidth;
    const height = image.clientHeight;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0, width, height);
    setImageSize({width, height});
    setPixels(getPixels(initImageCanvasRef).data);
  };

  const setFilterImageCanvas = () => {
    const canvas = filterImageCanvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = imageRef.current;
    const width = image.clientWidth;
    const height = image.clientHeight;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0, width, height);
  };

  const getPixels = (ref) => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
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
      const canvas = filterImageCanvasRef.current;
      const ctx = canvas.getContext('2d');
      imageData.current = getPixels(filterImageCanvasRef);
      filter();
      ctx.putImageData(imageData.current, 0, 0);
      setCanvasUrl(canvas.toDataURL());
    }
  }, [isImageLoaded, greenSaturation]);

  return (
    <div style={{height: '100%'}}>
      <div className={s.IOContainer}>
        {fileSrc && (
          <>
            <canvas ref={initImageCanvasRef}/>
            <img src={fileSrc} ref={imageRef} className={s.IOImage} alt="initImage"/>
          </>
        )}
      </div>
      <div className={s.IOContainer}>
        {fileSrc && <canvas ref={filterImageCanvasRef}/>}
      </div>
      <a href={canvasUrl} download>
        Click to download
      </a>
    </div>
  );
};

export default ColorModelsView;
