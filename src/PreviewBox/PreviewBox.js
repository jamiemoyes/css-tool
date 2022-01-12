import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import {
  Preview,
  PreviewContainer,
  Circle1,
  Circle2,
} from "./PreviewBox.styles";
import { constants } from "../contants";

const { GLASSMORPHISM } = constants;

const PreviewBox = () => {
  const { activeMode } = useGlobalContext();
  return (
    <PreviewContainer>
      {activeMode.id === GLASSMORPHISM && <Circle1 />}
      {activeMode.id === GLASSMORPHISM && <Circle2 />}
      <Preview style={activeMode.styles}></Preview>
    </PreviewContainer>
  );
};

export default PreviewBox;
