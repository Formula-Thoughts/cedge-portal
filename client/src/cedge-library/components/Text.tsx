import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export enum TextTypes {
  paragraph = "paragraph",
  title = "title",
}

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fonts.types.medium.size};
  font-weight: ${(props) => props.theme.fonts.types.medium.fontWeight};
  line-height: ${(props) => props.theme.fonts.types.medium.lineHeight};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fonts.types.large.size};
  font-weight: ${(props) => props.theme.fonts.types.large.fontWeight};
  line-height: ${(props) => props.theme.fonts.types.large.lineHeight};
`;

type Props = {
  type: TextTypes;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Text = (props: Props) => {
  return (
    <>
      {props.type === TextTypes.paragraph && (
        <Paragraph style={props.style}>{props.children}</Paragraph>
      )}
      {props.type === TextTypes.title && (
        <Title style={props.style}>{props.children}</Title>
      )}
    </>
  );
};

export default Text;
