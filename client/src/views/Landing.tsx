import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import Text, { TextTypes } from "../cedge-library/components/Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-align: left;

  p {
    margin-bottom: 0.5rem;
  }
`;

const DumbData = styled.div``;

const Landing = () => {
  return (
    <MainLayout step={1}>
      <Wrapper>
        <Text type={TextTypes.paragraph} style={{ marginTop: "2rem" }}>
          How to use Summary Generator?
        </Text>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Container>
            <div>image</div>
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
              fontSize: "2rem",
              lineHeight: "2.5rem",
            }}
            type={TextTypes.paragraph}
          >
            Find & Click <span style={{ fontWeight: "bold" }}>that job</span> in
            Linkedin Jobs
          </Text>
        </div>
      </Wrapper>
    </MainLayout>
  );
};

export default Landing;
