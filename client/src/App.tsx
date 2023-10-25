import { Route, Routes, useNavigate } from "react-router-dom";
import AppProvider, { useAppContext } from "./context/AppProvider";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import theme from "./cedge-library/theme";
import GlobalStyle from "./cedge-library/globalStyle";
import Landing from "./views/Landing";
import Job from "./views/Job";
import { checkIfUrlIsJob } from "./utils/url";

function App() {
  const navigate = useNavigate();
  const state = useAppContext();

  const setActiveUrl = () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      if (url) {
        state.setActiveUrl({
          tabId: tabs[0].id,
          isJob: checkIfUrlIsJob(url),
          contents: url,
        });

        if (checkIfUrlIsJob(url)) {
          navigate("/job");
        } else {
          navigate("/");
        }
      }
    });
  };

  // Reads changes when active tab changes
  chrome.tabs.onUpdated.addListener(async () => {
    setActiveUrl();
  });
  chrome.tabs.onActivated.addListener(function () {
    setActiveUrl();
  });

  useEffect(() => {
    setActiveUrl();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/job" element={<Job />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
