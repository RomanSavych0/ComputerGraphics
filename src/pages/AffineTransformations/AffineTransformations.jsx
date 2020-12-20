import React from 'react';
import {MainWrapper} from '../../layouts/MainWrapper';
import AffineTransformationsProperties from './AffineTransformationsProperties';
import AffineTransformationsView from './AffineTransformationsView';

export const AffineTransformations = () => {
  return (
    <MainWrapper
      Properties={<AffineTransformationsProperties/>}
      View={<AffineTransformationsView/>}
    />
  );
};
