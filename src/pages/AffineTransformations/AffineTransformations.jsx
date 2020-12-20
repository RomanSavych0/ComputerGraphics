import React, { useEffect } from "react";
import { MainWrapper } from "../../layouts/MainWrapper";
import AffineTransformationsProperties from "./AffineTransformationsProperties";
import AffineTransformationsView from "./AffineTransformationsView";

export const AffineTransformations = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = "#0f3460";
    };
  }, []);
  return (
    <MainWrapper
      Properties={<AffineTransformationsProperties />}
      View={<AffineTransformationsView />}
    />
  );
};
