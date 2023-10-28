import React, { HTMLProps } from "react";
import Image from "./Image";
import styled from "styled-components";
import LogoSmall from "../assets/logo-small.svg";
import LogoStandard from "../assets/logo.svg";

const Wrapper = styled.div`
  img {
    width: ${(props) => props.theme.sizes.logo.small};
  }
`;

export enum LogoType {
  small = "small",
  standard = "standard",
}

interface LogoProps extends HTMLProps<HTMLImageElement> {
  type?: LogoType;
  style?: React.CSSProperties;
}

const Logo: React.FC<LogoProps> = ({ type, style }) => {
  const renderLogo = () => {
    if (type === LogoType.small) {
      return LogoSmall;
    }
    return LogoStandard;
  };

  return (
    <Wrapper>
      <Image style={style} alt="logo" src={renderLogo()} />
    </Wrapper>
  );
};

export default Logo;
