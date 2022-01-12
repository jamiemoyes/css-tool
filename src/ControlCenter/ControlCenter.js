import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../CodeSnippet/CodeSnippet";
import { useGlobalContext } from "../context/GlobalContext";
import RangeSlider from "../RangeSlider/RangeSlider";
import {
  ControlCenterContainer,
  ControlContainer,
  Tabs,
  Tab,
  SliderContainer,
} from "./ControlCenter.styles";

import { constants } from "../contants";

const {
  GRADIENT,
  GLASSMORPHISM,
  NEUMORPHISM,
  SHADOW,
  CLAYMORPHISM,
  GRADIENT_TYPES,
} = constants;

// const { LINEAR, RADIAL, CONIC } = GRADIENT_TYPES;

export const ControlCenter = () => {
  const { activeMode, changeMode, modes, changeModeStyles } =
    useGlobalContext();

  const generateControls = (mode) => {
    switch (mode) {
      case GRADIENT:
        return [
          {
            title: "Primary",
            type: "color",
            value: activeMode.primary,
            onChange: (event) =>
              changeModeStyles({
                id: GRADIENT,
                payload: {
                  primary: event.target.value,
                  secondary: activeMode.secondary,
                  angle: activeMode.angle,
                },
              }),
          },
          {
            title: "Secondary",
            type: "color",
            value: activeMode.secondary,
            onChange: (event) =>
              changeModeStyles({
                id: GRADIENT,
                payload: {
                  primary: activeMode.primary,
                  secondary: event.target.value,
                  angle: activeMode.angle,
                },
              }),
          },
          {
            title: "Angle",
            type: "range",
            value: activeMode.angle,
            min: 0,
            max: 360,
            step: 1,
            onChange: (event) =>
              changeModeStyles({
                id: GRADIENT,
                payload: {
                  primary: activeMode.primary,
                  secondary: activeMode.secondary,
                  angle: event.target.value,
                },
              }),
          },
        ];
      case GLASSMORPHISM:
        return [
          {
            title: "Blur",
            type: "range",
            min: 0,
            max: 40,
            step: 1,
            value: activeMode.blur,
            onChange: (event) => {
              changeModeStyles({
                id: GLASSMORPHISM,
                payload: {
                  blur: event.target.value,
                  opacity: activeMode.opacity,
                  noise: activeMode.noise,
                },
              });
            },
          },
          {
            title: "Opacity",
            type: "range",
            min: 0,
            max: 1,
            step: 0.1,
            value: activeMode.opacity,
            onChange: (event) => {
              changeModeStyles({
                id: GLASSMORPHISM,
                payload: {
                  blur: activeMode.blur,
                  opacity: event.target.value,
                  noise: activeMode.noise,
                },
              });
            },
          },
          {
            title: "Noise",
            type: "checkbox",
            checked: activeMode.noise,
            onChange: (event) => {
              changeModeStyles({
                id: GLASSMORPHISM,
                payload: {
                  blur: activeMode.blur,
                  opacity: activeMode.opacity,
                  noise: event.target.checked,
                },
              });
            },
          },
        ];
      case NEUMORPHISM:
        return [
          {
            title: "Blur",
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: activeMode.blur,
            onChange: (event) => {
              changeModeStyles({
                id: NEUMORPHISM,
                payload: {
                  blur: event.target.value,
                  radius: activeMode.radius,
                },
              });
            },
          },
          {
            title: "Radius",
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: activeMode.radius,
            onChange: (event) => {
              changeModeStyles({
                id: NEUMORPHISM,
                payload: {
                  blur: activeMode.blur,
                  radius: event.target.value,
                },
              });
            },
          },
        ];
      case SHADOW: {
        return [
          {
            title: "Offset X",
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: activeMode.x,
            onChange: (event) => {
              changeModeStyles({
                id: SHADOW,
                payload: {
                  x: event.target.value,
                  y: activeMode.y,
                  blur: activeMode.blur,
                  spread: activeMode.spread,
                  color: activeMode.color,
                },
              });
            },
          },
          {
            title: "Offset Y",
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: activeMode.y,
            onChange: (event) => {
              changeModeStyles({
                id: SHADOW,
                payload: {
                  x: activeMode.x,
                  y: event.target.value,
                  blur: activeMode.blur,
                  spread: activeMode.spread,
                  color: activeMode.color,
                },
              });
            },
          },
          {
            title: "Blur",
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: activeMode.blur,
            onChange: (event) => {
              changeModeStyles({
                id: SHADOW,
                payload: {
                  x: activeMode.x,
                  y: activeMode.y,
                  blur: event.target.value,
                  spread: activeMode.spread,
                  color: activeMode.color,
                },
              });
            },
          },
          {
            title: "Spread",
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: activeMode.spread,
            onChange: (event) => {
              changeModeStyles({
                id: SHADOW,
                payload: {
                  x: activeMode.x,
                  y: activeMode.y,
                  blur: activeMode.blur,
                  spread: event.target.value,
                  color: activeMode.color,
                },
              });
            },
          },
          {
            title: "Colour",
            type: "color",
            value: activeMode.color,
            onChange: (event) => {
              console.log(event.target.value);
              changeModeStyles({
                id: SHADOW,
                payload: {
                  x: activeMode.x,
                  y: activeMode.y,
                  blur: activeMode.blur,
                  spread: activeMode.spread,
                  color: event.target.value,
                },
              });
            },
          },
        ];
      }
      case CLAYMORPHISM:
        return [
          {
            title: "Colour",
            type: "color",
            value: activeMode.color,
            onChange: (event) => {
              changeModeStyles({
                id: CLAYMORPHISM,
                payload: { ...activeMode, ...{ color: event.target.value } },
              });
            },
          },
          {
            title: "Intensity",
            type: "range",
            min: 0,
            max: 1,
            step: 0.1,
            value: activeMode.intensity,
            onChange: (event) => {
              changeModeStyles({
                id: CLAYMORPHISM,
                payload: {
                  ...activeMode,
                  ...{ intensity: event.target.value },
                },
              });
            },
          },
          {
            title: "Noise",
            type: "checkbox",
            value: activeMode.noise,
            onChange: (event) => {
              changeModeStyles({
                id: CLAYMORPHISM,
                payload: {
                  ...activeMode,
                  ...{ noise: event.target.checked },
                },
              });
            },
          },
        ];

      default:
        return [];
    }
  };

  const [controls, setControls] = useState([]);

  useEffect(() => {
    console.log("changing activemode");
    setControls(generateControls(activeMode.id));
  }, [activeMode, modes]);

  return (
    <ControlCenterContainer>
      <Tabs numberOfTabs={modes?.length}>
        {modes?.map((mode) => (
          <Tab
            key={mode}
            onClick={() => changeMode(mode.id)}
            active={mode.id === activeMode.id}
          >
            {mode.label}
          </Tab>
        ))}
      </Tabs>
      <ControlContainer>
        <SliderContainer>
          {controls?.map((props) => (
            <RangeSlider {...props} />
          ))}
        </SliderContainer>
        <CodeSnippet styles={activeMode.styles} />
      </ControlContainer>
    </ControlCenterContainer>
  );
};
