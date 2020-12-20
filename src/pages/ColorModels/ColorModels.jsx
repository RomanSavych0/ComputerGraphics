import React, { useEffect } from "react";
import { MainWrapper } from "../../layouts/MainWrapper";
import ColorModelsProperties from "./ColorModelsProperties";
import ColorModelsView from "./ColorModelsView";

export const ColorModels = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = "#0f3460";
    };
  }, []);
  return (
    <MainWrapper
      Properties={<ColorModelsProperties />}
      View={<ColorModelsView />}
    />
  );
};
