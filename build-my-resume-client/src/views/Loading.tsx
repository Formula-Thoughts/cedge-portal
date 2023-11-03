import React from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import Shape from "../cedge-library/components/Shape";
import Text, { TextTypes } from "../cedge-library/components/Text";
import Loader from "../cedge-library/components/Loader";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  flex: 3.3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Loading = () => {
  return (
    <MainLayout>
      <Wrapper>
        <ImageWrapper>
          <Shape
            type={1}
            style={{
              height: "11rem",
            }}
          />
        </ImageWrapper>
        <div>
          <Loader style={{ marginBottom: "1rem" }} />
          <Text
            style={{ fontWeight: "bold", marginBottom: "1rem" }}
            type={TextTypes.title}
          >
            generating...
          </Text>
          <Text style={{ opacity: 0.6 }} type={TextTypes.paragraph}>
            we're creating the best summary for you*. It might take a while.
          </Text>
          <Text
            style={{ opacity: 0.6, fontSize: "0.8rem" }}
            type={TextTypes.paragraph}
          >
            *with the help of AI.
          </Text>
        </div>
        <ImageWrapper>
          <Shape
            type={2}
            style={{
              height: "12rem",
              marginLeft: "5rem",
            }}
          />
        </ImageWrapper>
      </Wrapper>
    </MainLayout>
  );
};

export default Loading;
