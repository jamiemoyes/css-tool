import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { animate } from "motion";
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

  const circle1 = useRef(null);
  const circle2 = useRef(null);
  console.log(activeMode);
  useEffect(() => {
    if (activeMode.id === GLASSMORPHISM) {
      animate(
        circle1.current,
        {
          x: "41em",
          y: "-29em",
          opacity: 1,
        },
        {
          duration: 0.5,
        }
      );

      animate(
        circle2.current,
        {
          x: -100,
          x: "-31em",
          y: "17.5em",
          opacity: 1,
        },
        {
          duration: 0.5,
        }
      );
    }
  }, [activeMode]);

  return (
    <PreviewContainer>
      {activeMode.id === GLASSMORPHISM && <Circle1 ref={circle1} />}
      {activeMode.id === GLASSMORPHISM && <Circle2 ref={circle2} />}
      <Preview style={activeMode.styles}></Preview>
    </PreviewContainer>
  );
};

export default PreviewBox;
