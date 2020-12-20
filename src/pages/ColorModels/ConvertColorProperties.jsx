import React from 'react';
import {Formik, Form, Field} from 'formik';
import s from './ColorModels.module.scss';
import * as convert from 'color-convert';

const ConvertColorProperties = () => {
  return (
    <Formik
      initialValues={{
        r: '',
        g: '',
        b: '',
        h: '',
        s: '',
        l: ''
      }}
      onSubmit={({r, g, b}, {setFieldValue}) => {
        const [h, s, l] = convert.rgb.hsl(+r, +g, +b);

        setFieldValue('h', h)
        setFieldValue('s', s)
        setFieldValue('l', l)
      }}
    >
      <Form className={s.convertForm}>
        <div className={s.convertValuesContainer}>
          <div className={s.convertValuesColumn}>
            <div>
              <label htmlFor="r">R:</label>
              <Field id={'r'} name={'r'}/>
            </div>
            <div>
              <label htmlFor="g">G:</label>
              <Field id={'g'} name={'g'}/>
            </div>
            <div>
              <label htmlFor="b">B:</label>
              <Field id={'b'} name={'b'}/>
            </div>
          </div>
          <div className={s.convertValuesColumn}>
            <div>
              <label htmlFor="h">H:</label>
              <Field disabled id={'h'} name={'h'}/>
            </div>
            <div>
              <label htmlFor="s">S:</label>
              <Field disabled id={'s'} name={'s'}/>
            </div>
            <div>
              <label htmlFor="l">L:</label>
              <Field disabled id={'l'} name={'l'}/>
            </div>
          </div>
        </div>
        <button type={'submit'}>Convert</button>
      </Form>
    </Formik>
  );
};

export default ConvertColorProperties;