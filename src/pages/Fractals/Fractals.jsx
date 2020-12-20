import { SecondLayout } from "layouts/SecondLayout";
import React, { useEffect, useRef, useState } from "react";
import { drawCanvas, drawCanvas2 } from "./fractal/fractal";
import c from "./Fractal.module.scss";
import cn from "classnames";
// import "./fractal/fractal.js";
export const Fractals = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [animationActive, setAnimationActive] = useState(false);
  const [canvasTSelected, setCanvasTSelected] = useState(false);
  const [selectedColor, setSelectedColor] = useState("black");
  const canvas = useRef(null);
  // const context = canvas.current.getContext("2d");

  useEffect(() => {
    document.body.style.backgroundColor = "white";
    const context = canvas.current.getContext("2d");
    if (canvasTSelected) {
      drawCanvas2(canvas.current, context, sliderValue, animationActive);
    } else {
      drawCanvas(canvas.current, context, sliderValue, animationActive);
    }
    return () => {
      document.body.style.backgroundColor = "#0f3460";
    };
  }, []);

  return (
    <div className={c.fractalWrapper}>
      <SecondLayout>
        <div className={c.content}>
          <div className={c.buttons}>
            <div
              className={cn(c.button, canvasTSelected && c.active)}
              onClick={() => {
                setCanvasTSelected(true);
                drawCanvas2(
                  canvas.current,
                  canvas.current.getContext("2d"),
                  sliderValue,
                  selectedColor,
                  animationActive
                );
              }}
            >
              T-square
            </div>
            <div
              className={cn(c.button, !canvasTSelected && c.active)}
              onClick={() => {
                setCanvasTSelected(false);
                if (canvasTSelected) {
                  drawCanvas(
                    canvas.current,
                    canvas.current.getContext("2d"),
                    sliderValue,
                    selectedColor,
                    animationActive
                  );
                } else {
                  drawCanvas2(
                    canvas.current,
                    canvas.current.getContext("2d"),
                    sliderValue,
                    selectedColor,
                    animationActive
                  );
                }
              }}
            >
              H-tree
            </div>
          </div>
          <div className={c.iterations}>
            <div className={c.title}>Iterations:</div>
            <div className={c.count}>{sliderValue}</div>
          </div>
          <div className="slidecontainer">
            <input
              type="range"
              min={1}
              max={10}
              value={sliderValue}
              onChange={(e) => {
                // @ts-ignore
                setSliderValue(e.target.value);
                if (canvasTSelected) {
                  drawCanvas2(
                    canvas.current,
                    canvas.current.getContext("2d"),
                    sliderValue,
                    selectedColor,
                    animationActive
                  );
                } else {
                  drawCanvas(
                    canvas.current,
                    canvas.current.getContext("2d"),
                    sliderValue,
                    selectedColor,
                    animationActive
                  );
                }
              }}
              className="slider"
              id="myRange"
            />
          </div>

          <div className={c.animation}>
            <div
              className={cn(c.checkbox, animationActive && c.active)}
              onClick={() => {
                setAnimationActive(!animationActive);
              }}
            ></div>
            <div className={c.title}> Step by step animation</div>
          </div>
          <div className={c.color}>
            <div className={c.color__title}>Color</div>
            <div className={c.color__selectWrapper}>
              <select
                onChange={(e) => {
                  setSelectedColor(e.target.value);
                }}
              >
                <option value="purple">Purple</option>
                <option value="green">Green</option>
                <option selected value="black">
                  Black
                </option>
                <option value="red">Red</option>
              </select>
            </div>
          </div>
        </div>
      </SecondLayout>
      <div className={c.main}>
        <canvas ref={canvas} id="c" height="600" width="840"></canvas>
        {/* <canvas id="d" height="600" width="840"></canvas> */}
      </div>
    </div>
  );
};
