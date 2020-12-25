import React, { useContext, useRef } from "react";
import s from "./ColorModels.module.scss";
import { ColorModelsContext } from "../../contexts/ColorModelsContext";

const FileProperties = () => {
  // @ts-ignore
  const { setFileSrc, setGreenSaturation, greenSaturation } = useContext(
    ColorModelsContext
  );
  const inputRef = useRef();

  const handleUploadFile = () => {
    // @ts-ignore
    const file = inputRef.current.files[0];

    if (file) {
      const src = URL.createObjectURL(file);
      setFileSrc(src);
      console.log(file);
    }
  };

  const handleChangeGreenSaturation = (e) => {
    setGreenSaturation(e.target.value);
  };

  return (
    <div className={s.fileForm}>
      <input type="file" ref={inputRef} />
      <button onClick={handleUploadFile}>Upload</button>
      <div>
        <label htmlFor="greenSaturation">
          Green Saturation {greenSaturation}:
        </label>
      </div>
      <input
        style={{ width: 200 }}
        min={0}
        max={1}
        step={0.01}
        type="range"
        value={greenSaturation}
        onChange={handleChangeGreenSaturation}
      />
    </div>
  );
};

export default FileProperties;
