import React from 'react';
import ConvertColorProperties from './ConvertColorProperties';
import FileProperties from './FileProperties';

const ColorModelsProperties = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
      <ConvertColorProperties/>
      <FileProperties/>
    </div>
  );
};

export default ColorModelsProperties;