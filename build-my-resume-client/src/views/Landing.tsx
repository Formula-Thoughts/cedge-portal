import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import Text, { TextTypes } from "../cedge-library/components/Text";
import Image from "../cedge-library/components/Image";
import LandingProfileShape from "../cedge-library/assets/shape-profile-landing.svg";
import Shape from "../cedge-library/components/Shape";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  gap: 1rem;

  p {
    margin-bottom: 0.5rem;
  }
`;

const DumbData = styled.div``;

const Landing = () => {
  return (
    <MainLayout>
      <Wrapper>
        <Text type={TextTypes.paragraph} style={{ marginTop: "2rem" }}>
          How to use Summary Generator?
        </Text>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Shape
              type={5}
              style={{
                height: "4rem",
                marginRight: "-2rem",
              }}
            />
          </div>
          <Container>
            <div>
              <Image
                src={LandingProfileShape}
                style={{ width: "6rem" }}
                alt="Profile image visual branding"
              />
            </div>
            <DumbData>
              <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                Job title
              </Text>
              <Text style={{ opacity: 0.8 }} type={TextTypes.paragraph}>
                Company
              </Text>
              <Text style={{ opacity: 0.4 }} type={TextTypes.paragraph}>
                London, United Kingdom
              </Text>
              <Text style={{ opacity: 0.4 }} type={TextTypes.paragraph}>
                £90K/yr - £100K/yr
              </Text>
              <Text style={{ opacity: 0.4 }} type={TextTypes.paragraph}>
                3 days ago | Easy Apply
              </Text>
            </DumbData>
          </Container>
          <Text
            style={{
              marginTop: "2rem",
            }}
            type={TextTypes.title}
          >
            Find & Click <span style={{ fontWeight: "bold" }}>that job</span> in
            Linkedin Jobs
          </Text>
          <Shape
            type={6}
            style={{ height: "4rem", marginLeft: "-2rem", marginTop: "1rem" }}
          />
        </div>
      </Wrapper>
    </MainLayout>
  );
};

export default Landing;
