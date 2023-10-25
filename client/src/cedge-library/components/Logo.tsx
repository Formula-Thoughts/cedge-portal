import React, { HTMLProps } from "react";
import Image from "./Image";
import styled from "styled-components";
import LogoSmall from "../assets/logo-small.png";

const Wrapper = styled.div`
  img {
    width: ${(props) => props.theme.sizes.logo.small};
  }
`;

enum LogoType {
  small = "small",
  standard = "standard",
}

interface LogoProps extends HTMLProps<HTMLImageElement> {
  type?: LogoType;
}

const Logo: React.FC<LogoProps> = ({ type }) => {
  return (
    <Wrapper>
      <Image alt="logo" src={LogoSmall} />
    </Wrapper>
  );
};

export default Logo;
