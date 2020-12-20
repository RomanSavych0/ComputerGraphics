import React, {useContext} from 'react';
import s from './ColorModels.module.scss';
import {ColorModelsContext} from '../../contexts/ColorModelsContext';

const ColorModelsView = () => {
  const {fileSrc, greenSaturation} = useContext(ColorModelsContext);

  const dynamicInputImageStyle = {
    backgroundImage: `url(${fileSrc})`,
  }

  const dynamicOutputImageStyle = {
    backgroundImage: `linear-gradient(green, green), url(${fileSrc})`,
    backgroundBlendMode: 'color',
    filter: `saturate(${+greenSaturation})`
  }

  return (
    <div style={{height: '100%'}}>
      <div className={s.IOContainer}>
        {fileSrc && <div style={dynamicInputImageStyle} className={s.IOImage}/>}
      </div>
      <div className={s.IOContainer}>
        {fileSrc &&
        <div className={s.IOImage}
             style={dynamicOutputImageStyle}
        />
        }
      </div>
    </div>
  );
};

export default ColorModelsView;