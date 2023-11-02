import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Text, { TextTypes } from "../cedge-library/components/Text";
import styled from "styled-components";
import Button from "../cedge-library/components/Button";
import Icon from "../cedge-library/components/Icon";
import { useLocation } from "react-router-dom";

type Summary = string;

const Pill = styled.div<{ isActive: boolean }>`
  background: ${(props) => {
    if (props.isActive) {
      return props.theme.colors.primary;
    }
    props.theme.colors.primaryDark;
  }};

  border-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const Summaries = () => {
  const { state } = useLocation();
  const [activeSummary, setActiveSummary] = useState(0);
  const [summaries, setSummaries] = useState<Summary[]>(state);
  const [copiedToClipboard, setCopyToClipboard] = useState(false);

  const copyToClipboard = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(summaries[activeSummary]);
    } else {
      document.execCommand("copy", true, summaries[activeSummary]);
    }
    setCopyToClipboard(true);
  };

  return (
    <MainLayout step={3}>
      <Text
        style={{ opacity: 0.8, marginBottom: "0.8rem", marginTop: "1rem" }}
        type={TextTypes.paragraph}
      >
        we’ve generated 3 options...
      </Text>
      <div style={{ display: "flex", gap: 5, marginBottom: "1rem" }}>
        {summaries.map((summary: Summary, index: number) => {
          return (
            <Pill
              onClick={() => {
                setActiveSummary(index);
                setCopyToClipboard(false);
              }}
              isActive={activeSummary === index}
            >
              <Text type={TextTypes.paragraph}>{index + 1}</Text>
            </Pill>
          );
        })}
      </div>
      <Text type={TextTypes.paragraph}>{summaries[activeSummary]}</Text>
      <div>
        <Button
          onClick={copyToClipboard}
          style={{ marginTop: "1rem" }}
          label="copy to clipboard"
        />
        {copiedToClipboard ? (
          <Icon width={20} style={{ marginLeft: "1rem" }} />
        ) : null}
      </div>
    </MainLayout>
  );
};

export default Summaries;
