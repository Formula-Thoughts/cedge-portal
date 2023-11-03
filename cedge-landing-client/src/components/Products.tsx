import React from "react";
import Layout from "./layout/Layout";
import Text, { TextTypes } from "../cedge-library/components/Text";
import Image from "../cedge-library/components/Image";
import SummaryGeneratorImage from "./assets/summary-generator-logo.svg";
import PlaceholderImage from "./assets/placeholder-landing.svg";
import styled from "styled-components";

const Wrapper = styled.div``;

const Images = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Products = () => {
  return (
    <Wrapper>
      <Layout>
        <Text style={{ fontWeight: "bold" }} type={TextTypes.title}>
          we’re on a mission to help people find purpose
        </Text>
        <Text
          type={TextTypes.paragraph}
          style={{ marginTop: "0.2rem", marginBottom: "2rem" }}
        >
          and we’re starting <span style={{ fontSize: "1.05rem" }}>small</span>.
          follow us on our journey.{" "}
        </Text>
        <Images>
          <Image
            width={"250rem"}
            src={SummaryGeneratorImage}
            alt="summary generator image"
          />
          <Image
            width={"250rem"}
            src={PlaceholderImage}
            alt="placeholder image"
          />
          <Image
            width={"250rem"}
            src={PlaceholderImage}
            alt="placeholder image"
          />
          <Image
            width={"250rem"}
            src={PlaceholderImage}
            alt="placeholder image"
          />
        </Images>
      </Layout>
    </Wrapper>
  );
};

export default Products;
