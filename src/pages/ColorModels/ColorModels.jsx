import React from 'react';
import {MainWrapper} from '../../layouts/MainWrapper';
import ColorModelsProperties from './ColorModelsProperties';
import ColorModelsView from './ColorModelsView';

export const ColorModels = () => {
  return (
    <MainWrapper
      Properties={<ColorModelsProperties/>}
      View={<ColorModelsView/>}
    />
  );
};
