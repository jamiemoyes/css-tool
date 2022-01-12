import React from "react";
import { SliderContainer, SliderDetails } from "./RangeSlider.styles";

const RangeSlider = ({ title, value, type, ...rest }) => {
  return (
    <SliderContainer>
      <SliderDetails>
        <span>{title}</span>
        <span>{value}</span>
      </SliderDetails>
      <input type={type} value={value} {...rest} />
    </SliderContainer>
  );
};

export default RangeSlider;
