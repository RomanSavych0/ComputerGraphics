import React, {useContext, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import style from './ColorModels.module.scss';
import * as convert from 'color-convert';
import {ColorModelsContext} from '../../contexts/ColorModelsContext';

const ConvertColorProperties = () => {
  const {pixels, imageSize} = useContext(ColorModelsContext);
  const [rgb, setRgb] = useState('');

  return (
    <Formik
      initialValues={{
        r: '', g: '', b: '',
        h: '', s: '', v: '',
        x: '', y: ''
      }}
      onSubmit={({x, y}, {setFieldValue}) => {
        x = +x;
        y = +y;

        if (x >= 0 && x < imageSize.width && y >= 0 && y < imageSize.height) {
          const offset = (imageSize.width * y + x) * 4;
          const [r, g, b] = pixels.slice(offset, offset + 3);
          const [h, s, v] = convert.rgb.hsv([r, g, b]);

          setRgb([r, g, b].join(','))

          setFieldValue('h', h);
          setFieldValue('s', s);
          setFieldValue('v', v);
          setFieldValue('r', r);
          setFieldValue('g', g);
          setFieldValue('b', b);
        }
      }}
    >
      <Form className={style.convertForm}>
        <div className={style.convertValuesContainer}>
          <div className={style.convertValuesColumn}>
            <div>
              <label htmlFor="r">R:</label>
              <Field disabled id={'r'} name={'r'}/>
            </div>
            <div>
              <label htmlFor="g">G:</label>
              <Field disabled id={'g'} name={'g'}/>
            </div>
            <div>
              <label htmlFor="b">B:</label>
              <Field disabled id={'b'} name={'b'}/>
            </div>
          </div>
          <div className={style.convertValuesColumn}>
            <div>
              <label htmlFor="h">H:</label>
              <Field disabled id={'h'} name={'h'}/>
            </div>
            <div>
              <label htmlFor="s">S:</label>
              <Field disabled id={'s'} name={'s'}/>
            </div>
            <div>
              <label htmlFor="v">V:</label>
              <Field disabled id={'v'} name={'v'}/>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="x">X:</label>
            <Field required id={'x'} name={'x'}/>
          </div>
          <div>
            <label htmlFor="y">Y:</label>
            <Field required id={'y'} name={'y'}/>
          </div>
        </div>
        <div className={style.colorPicker} style={{backgroundColor: `rgb(${rgb})`}}/>
        <button type={'submit'}>Show</button>
      </Form>
    </Formik>
  );
};

export default ConvertColorProperties;