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
}

const Icon: React.FC<IconProps> = ({ type, fill }) => {
  if (type === IconType.check) {
    return <FaCheck fill={fill} />;
  }
  if (type === IconType.question) {
    return <FaQuestion fill={fill} />;
  }
  return <FaCheck />;
};

export default Icon;
