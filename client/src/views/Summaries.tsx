import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Text, { TextTypes } from "../cedge-library/components/Text";
import styled from "styled-components";
import Button from "../cedge-library/components/Button";
import Icon from "../cedge-library/components/Icon";

type Summary = {
  id: string;
  contents: string;
};

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
  const [activeSummary, setActiveSummary] = useState(0);
  const [summaries, setSummaries] = useState<Summary[]>([
    {
      id: "id",
      contents:
        "Friendly, motivated retail assistant with two years of professional experience. I won a coveted employee bonus for exceptional work four times over the past six months and am now keen to utilise my skills in communication, organisation and leadership to transition to a supervisory role within the same industry.",
    },
    {
      id: "id",
      contents:
        "Not Friendly :(, motivated retail assistant with two years of professional experience. I won a coveted employee bonus for exceptional work four times over the past six months and am now keen to utilise my skills in communication, organisation and leadership to transition to a supervisory role within the same industry.",
    },
  ]);
  const [copiedToClipboard, setCopyToClipboard] = useState(false);

  const copyToClipboard = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(summaries[activeSummary].contents);
    } else {
      document.execCommand("copy", true, summaries[activeSummary].contents);
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
      <Text key={summaries[activeSummary].id} type={TextTypes.paragraph}>
        {summaries[activeSummary].contents}
      </Text>
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
