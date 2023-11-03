import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Logo, { LogoType } from "../cedge-library/components/Logo";
import Text, { TextTypes } from "../cedge-library/components/Text";

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
`;

type Props = {
  children: React.ReactNode;
  step: number;
};

const MainLayout = (props: Props) => {
  return (
    <Wrapper>
      <Header>
        <Logo type={LogoType.small} />
        <Text
          style={{ opacity: "0.5", flex: 1, textAlign: "right" }}
          type={TextTypes.paragraph}
        >
          Step ({props.step}/3)
        </Text>
      </Header>
      {props.children}
    </Wrapper>
  );
};

export default MainLayout;
