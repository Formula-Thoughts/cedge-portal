import React, { HTMLProps } from "react";
import Image from "./Image";

import Shape1 from "../assets/shape-1.svg";
import Shape2 from "../assets/shape-2.svg";
import Shape3 from "../assets/shape-3.svg";
import Shape4 from "../assets/shape-4.svg";
import Shape5 from "../assets/shape-5.svg";
import Shape6 from "../assets/shape-6.svg";
import Shape7 from "../assets/shape-7.svg";

const Shape = (props: {
  type?: number;
  style?: React.CSSProperties;
  id?: string;
  className?: string;
}) => {
  const renderShape = () => {
    if (props.type === 1) {
      return Shape1;
    } else if (props.type === 2) {
      return Shape2;
    } else if (props.type === 3) {
      return Shape3;
    } else if (props.type === 4) {
      return Shape4;
    } else if (props.type === 5) {
      return Shape5;
    } else if (props.type === 6) {
      return Shape6;
    } else if (props.type === 7) {
      return Shape7;
    }
    return Shape1;
  };

  return (
    <Image
      style={props.style}
      id={props.id}
      className={props.className}
      alt="Branding visual shape"
      src={renderShape()}
    />
  );
};

export default Shape;
