import { Route, Routes, useNavigate } from "react-router-dom";
import AppProvider, { useAppContext } from "./context/AppProvider";
import { useEffect, useState } from "react";
import Landing from "./views/Landing";
import Job from "./views/Job";
import { checkIfUrlIsJob, checkIfUrlIsLinkedinProfile } from "./utils/url";
import Summaries from "./views/Summaries";
import Loading from "./views/Loading";
import Error from "./views/Error";
import AddLinkedinProfile from "./views/AddLinkedinProfile";

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
          isLinkedinProfile: checkIfUrlIsLinkedinProfile(url),
          contents: url,
        });

        if (checkIfUrlIsLinkedinProfile(url)) {
          navigate("/add-linkedin-profile");
          return;
        }

        if (checkIfUrlIsJob(url)) {
          navigate("/job");
          return;
        }

        navigate("/");
      }
    });
  };

  useEffect(() => {
    // Reads changes when active tab changes
    chrome.tabs.onUpdated.addListener(async () => {
      console.log("[Performance] onUpdated");
      setActiveUrl();
    });
    chrome.tabs.onActivated.addListener(function () {
      setActiveUrl();
    });
  }, []);

  if (state.isLoadingSummaries) {
    return <Loading />;
  }

  if (state.errorSummaries) {
    return <Error />;
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/job" element={<Job />} />
      <Route path="/summaries" element={<Summaries />} />
      <Route path="/add-linkedin-profile" element={<AddLinkedinProfile />} />
    </Routes>
  );
}

export default App;
