import React, {useContext, useRef} from 'react';
import s from './ColorModels.module.scss';
import {ColorModelsContext} from '../../contexts/ColorModelsContext';

const FileProperties = () => {
  const {setFileSrc, setGreenSaturation, greenSaturation} = useContext(ColorModelsContext);
  const inputRef = useRef();
  const timerId = useRef();

  const handleUploadFile = () => {
    const file = inputRef.current.files[0];

    if (file) {
      const src = URL.createObjectURL(file);
      setFileSrc(src);
    }
  };

  const handleChangeGreenSaturation = ({target: {value}}) => {
    if (timerId) {
      clearTimeout(timerId)
    }

    setTimeout(() => {
      setGreenSaturation(value);
    }, 50)
  };

  return (
    <div className={s.fileForm}>
      <input type="file" ref={inputRef}/>
      <button onClick={handleUploadFile}>Upload</button>
      <div>
        <label htmlFor="greenSaturation">Green Saturation {greenSaturation}:</label>
      </div>
      <input style={{width: 200}} min={0} max={1} step={0.01}
             type="range" value={greenSaturation} onChange={handleChangeGreenSaturation}
      />
    </div>
  );
};

export default FileProperties;