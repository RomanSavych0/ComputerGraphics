import React, { useContext } from "react";
import { AffineTransformationsContext } from "../../contexts/AffineTransformationsContext";
import { Field, FieldArray, Form, Formik } from "formik";
import c from "./AffineTransformations.module.scss";
const AffineTransformationsProperties = () => {
  // @ts-ignore
  const { properties, setProperties } = useContext(
    AffineTransformationsContext
  );
  const axis = ["X:", "Y:"];
  const pointsName = ["A", "B", "C"];

  const handleClear = () => {
    setProperties((prev) => ({
      ...prev,
      points: [
        [0, 0],
        [0, 0],
        [0, 0],
      ],
    }));
  };

  return (
    <Formik
      initialValues={{
        ...properties,
        rotationPoint: pointsName[properties.rotationPoint],
      }}
      onSubmit={({
        rotationInDegrees,
        points,
        rotationPoint,
        xScale,
        yScale,
      }) => {
        setProperties({
          rotationInDegrees: +rotationInDegrees,
          points: points.map((p) => [+p[0], +p[1]]),
          rotationPoint: pointsName.indexOf(rotationPoint),
          xScale: +xScale,
          yScale: +yScale,
        });
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name={"points"}>
            {() =>
              values.points.map((point, pointIndex) => (
                <div key={pointIndex} className={c.flex}>
                  <label htmlFor={pointsName[pointIndex]}>
                    Point {pointsName[pointIndex]}:
                  </label>
                  <FieldArray
                    // @ts-ignore
                    id={pointsName[pointIndex]}
                    key={pointIndex}
                    name={`points.${pointIndex}`}
                  >
                    {() =>
                      point.map((coordinate, coordinateIndex) => {
                        const fieldId = `${pointsName[pointIndex]}-${axis[coordinateIndex]}`;

                        return (
                          <div key={fieldId}>
                            <label htmlFor={fieldId}>
                              {axis[coordinateIndex]}
                            </label>
                            <Field
                              key={coordinateIndex}
                              id={fieldId}
                              name={`points.${pointIndex}.${coordinateIndex}`}
                              label={`${pointsName[pointIndex]}${axis[coordinateIndex]}`}
                              type="number"
                            />
                          </div>
                        );
                      })
                    }
                  </FieldArray>
                </div>
              ))
            }
          </FieldArray>
          <div>
            <div>
              <label htmlFor="rotationInDegrees">
                Rotation in degrees {values.rotationInDegrees}
              </label>
            </div>
            <Field
              type={"range"}
              min={0}
              max={360}
              step={1}
              style={{ width: 200 }}
              name={"rotationInDegrees"}
              id={"rotationInDegrees"}
            />
            <div>
              <div>
                <label htmlFor="rotationPoint">
                  Rotation Point {values.rotationPoint}
                </label>
              </div>
              <Field name={"rotationPoint"} id={"rotationPoint"} />
            </div>
          </div>
          <div>
            <label htmlFor="xScale">xScale {values.xScale}</label>
          </div>
          <Field
            type={"range"}
            min={0}
            max={2}
            step={0.05}
            style={{ width: 200 }}
            name={"xScale"}
            id={"xScale"}
          />
          <div>
            <label htmlFor="yScale">yScale {values.yScale}</label>
          </div>
          <Field
            type={"range"}
            min={0}
            max={2}
            step={0.05}
            style={{ width: 200 }}
            name={"yScale"}
            id={"yScale"}
          />
          <div>
            <button type={"submit"}>Draw</button>
            <button type={"button"} onClick={handleClear}>
              Clear
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AffineTransformationsProperties;
