import React from "react";
import Logo, { LogoType } from "../cedge-library/components/Logo";
import styled from "styled-components";
import Button from "../cedge-library/components/Button";
import Layout from "./layout/Layout";
import { device } from "../cedge-library/util/mediaQueries";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    #navbar-button {
      display: none;
    }
  }
`;

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Wrapper>
        <div
          onClick={() => navigate("/")}
          style={{ flex: 1, cursor: "pointer" }}
        >
          <Logo type={LogoType.small} />
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
          <a href="#form-anchor">
            <Button id="navbar-button" label="i want to know more" />
          </a>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default NavBar;
