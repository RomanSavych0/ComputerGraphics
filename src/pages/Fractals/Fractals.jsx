import { MainWrapper } from "layouts/MainWrapper";
import React, { useEffect, useState } from "react";

export const Fractals = () => {
  const [sliderValue, setSliderValue] = useState(0);
  useEffect(() => {
    console.log(document.body.classList);
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div>
      <MainWrapper>
        <div>
          <input
            type="range"
            min={1}
            max={20}
            value={sliderValue}
            onChange={(e) => {
              // @ts-ignore
              setSliderValue(e.target.value);
            }}
            className="slider"
            id="myRange"
          />
          <p>
            Value: <span id="demo"></span>
          </p>
        </div>
      </MainWrapper>
      <div>
        <canvas id="c" height="600" width="840"></canvas>
      </div>
    </div>
  );
};
