import React, { HTMLProps } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface LoaderProps extends HTMLProps<HTMLImageElement> {
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ style }) => {
  return <Wrapper style={style} />;
};

export default Loader;
