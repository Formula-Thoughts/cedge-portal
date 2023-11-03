import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppProvider";
import {
  getDomElementsFromActiveTab,
  getLinkedinJobContents,
} from "../utils/url";
import MainLayout from "../layouts/MainLayout";
import styled from "styled-components";
import Text, { TextTypes } from "../cedge-library/components/Text";
import Button from "../cedge-library/components/Button";
import { linkedinJobHeaderDetails } from "../utils/linkedin";
import Shape from "../cedge-library/components/Shape";
import { sendContentsToApi } from "../resources/api";
import * as cheerio from "cheerio";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  flex: 3.3;
`;

const ImageWrapper = styled.div`
  flex: 3.3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Job = () => {
  const [jobInfo, setJobInfo] = useState<
    { target: string; data: string | [] }[] | null
  >(null);
  const state = useAppContext();

  useEffect(() => {
    (async () => {
      const getJobInfo = await getDomElementsFromActiveTab(
        state.activeUrl.tabId,
        linkedinJobHeaderDetails
      );
      setJobInfo(getJobInfo as any);
      console.log("setting job info");
    })();
  }, [state.activeUrl.contents]);

  if (jobInfo) {
    return (
      <MainLayout step={2}>
        <Wrapper>
          <ImageWrapper>
            <Shape type={3} style={{ height: "4rem", marginLeft: "-2rem" }} />
          </ImageWrapper>
          <Info>
            <Text
              style={{ opacity: 0.8, marginBottom: "0.8rem" }}
              type={TextTypes.paragraph}
            >
              generate summary for...
            </Text>
            <Text type={TextTypes.title}>{jobInfo[0].data}</Text>
            <Text
              type={TextTypes.paragraph}
              style={{ opacity: 0.5, marginTop: "1rem" }}
            >
              {jobInfo[1].data[0]}
            </Text>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Button
                onClick={() => state.getSummariesFromApi()}
                style={{
                  marginTop: "1rem",
                  zIndex: 1,
                }}
                label="generate"
              />
              <Shape
                type={4}
                style={{
                  height: "4rem",
                  position: "absolute",
                  right: "-1.8rem",
                  bottom: "-2rem",
                  zIndex: -1,
                }}
              />
            </div>
          </Info>
          <ImageWrapper />
        </Wrapper>
      </MainLayout>
    );
  }
  return <div />;
};

export default Job;
