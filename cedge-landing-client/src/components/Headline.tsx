import React from "react";
import styled from "styled-components";
import Image from "../cedge-library/components/Image";
import PromoImage from "../cedge-library/assets/promo.svg";
import Logo, { LogoType } from "../cedge-library/components/Logo";
import Text, { TextTypes } from "../cedge-library/components/Text";
import Button from "../cedge-library/components/Button";
import Shape from "../cedge-library/components/Shape";
import { device } from "../cedge-library/util/mediaQueries";
import Layout from "./layout/Layout";

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    height: 100%;

    #promo-image {
      display: none;
    }

    #first-block {
      flex: 1;
      text-align: left !important;
    }

    #second-block {
      flex: 9;
    }

    #shape-1 {
      position: relative !important;
      height: 7rem;
    }

    #headline-paragraph {
      max-width: 100% !important;
    }
  }
`;

const Block = styled.div`
  flex: 1;
`;

const Headline = () => {
  return (
    <Layout>
      <Wrapper>
        <Block
          id="first-block"
          style={{ textAlign: "right", position: "relative" }}
        >
          <Image
            id="promo-image"
            style={{ width: "40rem" }}
            src={PromoImage}
            alt="Promo image"
          />
          <Shape
            id="shape-1"
            type={1}
            style={{ position: "absolute", left: "-3rem" }}
          />
        </Block>
        <Block id="second-block" style={{ position: "relative" }}>
          <Logo style={{ width: "15rem" }} type={LogoType.standard} />
          <Text
            id="headline-paragraph"
            style={{ marginTop: "1rem", maxWidth: "50%" }}
            type={TextTypes.paragraph}
          >
            your AI-powered career companion, for every step of the way. We help
            you get that job you want so badly and be the best version of
            yourself.
          </Text>
          <a href="#form-anchor">
            <Button style={{ marginTop: "2rem" }} label="i want to know more" />
          </a>
          <Shape
            type={7}
            style={{ position: "absolute", right: "-10rem", zIndex: -1 }}
          />
        </Block>
      </Wrapper>
    </Layout>
  );
};

export default Headline;
