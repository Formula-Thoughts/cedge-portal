import React from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import Shape from "../cedge-library/components/Shape";
import Text, { TextTypes } from "../cedge-library/components/Text";
import Button from "../cedge-library/components/Button";
import { useAppContext } from "../context/AppProvider";
import {
  getDomElementsFromActiveTab,
  getLinkedinProfileContents,
} from "../utils/url";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RoleInfo = styled.div`
  flex: 3.3;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1rem;
  border-radius: 1rem;
  gap: 0.5rem;
`;

const AddLinkedinProfile = () => {
  const { activeUrl, linkedinProfile, setLikedinProfile } = useAppContext();

  const getProfile = async () => {
    const data = await getLinkedinProfileContents(activeUrl.tabId);
    console.log("data", data);
    setLikedinProfile(data);
  };

  return (
    <MainLayout>
      <p>{JSON.stringify(linkedinProfile)}</p>
      <Wrapper>
        <RoleInfo>
          <Shape style={{ width: "4rem" }} type={8} />
          <Text type={TextTypes.paragraph}>your name</Text>
          <Text style={{ opacity: 0.7 }} type={TextTypes.paragraph}>
            your position
          </Text>
        </RoleInfo>
        <div
          style={{
            flex: "3.3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {activeUrl?.isLinkedinProfile ? (
            <Text type={TextTypes.title}>
              <span style={{ fontWeight: "bold" }}>click on the button</span> to
              load your LinkedIn Profile
            </Text>
          ) : (
            <Text type={TextTypes.title}>
              <span style={{ fontWeight: "bold" }}>
                go to your LinkedIn Profile
              </span>{" "}
              on your browser
            </Text>
          )}
          {activeUrl?.isLinkedinProfile ? (
            <Text
              style={{ opacity: 0.6, marginTop: "0.5rem" }}
              type={TextTypes.paragraph}
            >
              we need to know more about you if you want the coolest resume.
            </Text>
          ) : (
            <Text
              style={{ opacity: 0.6, marginTop: "0.5rem" }}
              type={TextTypes.paragraph}
            >
              It’s that simple. Visit your LinkedIn profile on your browser.
            </Text>
          )}
        </div>
        <div
          style={{
            flex: "3.3",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
        >
          <div style={{ position: "relative", width: "100%" }}>
            <Button
              onClick={getProfile}
              disabled={!activeUrl?.isLinkedinProfile}
              style={{ width: "100%" }}
              label="let's load my profile"
            />
            {/* <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: -1,
              }}
            >
              <Shape
                style={{ width: "5rem", rotate: "90deg", opacity: 0.5 }}
                type={1}
              />
            </div> */}
          </div>
        </div>
      </Wrapper>
    </MainLayout>
  );
};

export default AddLinkedinProfile;
