import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export enum TextTypes {
  paragraph = "paragraph",
}

const Paragraph = styled.p`
  font-size: 1.3rem;
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
    </>
  );
};

export default Text;
