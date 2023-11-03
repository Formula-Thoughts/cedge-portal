import React from "react";
import MainLayout from "../layouts/MainLayout";
import Text, { TextTypes } from "../cedge-library/components/Text";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Error = () => {
  return (
    <MainLayout>
      <Wrapper>
        <div>
          <Text style={{ fontWeight: "bold" }} type={TextTypes.title}>
            Oops. There's been an error.
          </Text>
          <Text
            style={{ opacity: 0.6, marginTop: "1rem" }}
            type={TextTypes.paragraph}
          >
            Reload the extension and try again.
          </Text>
        </div>
      </Wrapper>
    </MainLayout>
  );
};

export default Error;
