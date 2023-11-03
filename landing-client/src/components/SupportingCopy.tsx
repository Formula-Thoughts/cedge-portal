import React from "react";
import styled from "styled-components";
import Text, { TextTypes } from "../cedge-library/components/Text";
import Layout from "./layout/Layout";
import { device } from "../cedge-library/util/mediaQueries";

const Wrapper = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${device.tablet} {
    align-items: flex-start;
    text-align: left;

    #supporting-copy-title,
    #supporting-copy-paragraph {
      max-width: 100% !important;
    }
  }
`;

const SupportingCopy = () => {
  return (
    <Layout>
      <Wrapper>
        <Text
          id="supporting-copy-title"
          style={{ maxWidth: "70%" }}
          type={TextTypes.title}
        >
          <span style={{ fontWeight: "bold", fontSize: "2.3rem" }}>49%</span> of
          unemployed job seekers do not think they will find a job soon.{" "}
          <span style={{ fontWeight: "bold" }}>
            Let’s change that right now
          </span>
          .
        </Text>
        <Text
          id="supporting-copy-paragraph"
          style={{ maxWidth: "50%", marginTop: "0.5rem" }}
          type={TextTypes.paragraph}
        >
          we're aiming to help you in every step of your career, from finding
          that job you want so badly, to grow as a professional and not lose
          your mind along the way.
        </Text>
      </Wrapper>
    </Layout>
  );
};

export default SupportingCopy;
