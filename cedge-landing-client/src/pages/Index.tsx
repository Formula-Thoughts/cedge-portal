import React from "react";
import NavBar from "../components/NavBar";
import Headline from "../components/Headline";
import SupportingCopy from "../components/SupportingCopy";
import Form from "../components/Form";
import Products from "../components/Products";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
`;

const LandingBlocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Index = () => {
  return (
    <Wrapper>
      <LandingBlocks>
        <Headline />
        <SupportingCopy />
        <Products />
        <Form />
      </LandingBlocks>
    </Wrapper>
  );
};

export default Index;
