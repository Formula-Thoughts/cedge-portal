import React from "react";
import { useAppContext } from "../context/AppProvider";
import { getContentsOfUrl as _getContentsOfUrl } from "../utils/url";

const Job = () => {
  const state = useAppContext();

  const getContentsOfUrl = async () => {
    const data = await _getContentsOfUrl(state.activeUrl.tabId);
    console.log("data", data);
  };

  return (
    <div>
      <p>test url: {state.activeUrl.contents}</p>
      Job <button onClick={getContentsOfUrl}>See contents page</button>
    </div>
  );
};

export default Job;
