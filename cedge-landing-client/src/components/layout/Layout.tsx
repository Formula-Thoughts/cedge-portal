import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  max-width: 80rem;
  margin: auto;
  width: 100%;
`;

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Layout;
