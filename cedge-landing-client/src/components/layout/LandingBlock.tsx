import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
`;

type Props = {
  children: React.ReactNode;
};

const LandingBlock = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default LandingBlock;
