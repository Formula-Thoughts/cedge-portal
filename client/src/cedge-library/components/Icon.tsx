import React, { HTMLProps } from "react";

// List of icons for cedge - https://react-icons.github.io/react-icons/icons?name=fa
import { FaCheck } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

export enum IconType {
  check = "check",
  question = "question",
}

interface IconProps extends HTMLProps<HTMLImageElement> {
  type?: IconType;
  fill?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ type, fill, style, width, height }) => {
  if (type === IconType.check) {
    return <FaCheck fill={fill} style={style} size={width} height={height} />;
  }
  if (type === IconType.question) {
    return (
      <FaQuestion fill={fill} style={style} size={width} height={height} />
    );
  }
  return <FaCheck style={style} size={width} height={height} />;
};

export default Icon;
