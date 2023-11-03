import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Logo, { LogoType } from "../cedge-library/components/Logo";
import Image from "../cedge-library/components/Image";
import BuildMyResumeLogo from "../cedge-library/assets/build-my-resume-logo.svg";

const Wrapper = styled.div`
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <Wrapper>
      <Header>
        <Logo type={LogoType.small} />
        <Image
          src={BuildMyResumeLogo}
          style={{ width: "4rem", marginLeft: "0.5rem" }}
          alt="Logo build my resume "
        />
      </Header>
      {props.children}
    </Wrapper>
  );
};

export default MainLayout;
