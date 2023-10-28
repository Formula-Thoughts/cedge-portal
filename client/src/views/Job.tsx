import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppProvider";
import {
  getDomElementsFromActiveTab,
  getLinkedinJobContents,
  linkedinJobHeaderDetails,
} from "../utils/url";

const Job = () => {
  const [jobInfo, setJobInfo] = useState<
    { target: string; data: string | [] }[] | null
  >(null);
  const state = useAppContext();

  const getContentsOfUrl = async () => {
    const data = await getLinkedinJobContents(state.activeUrl.tabId);
    console.log("data", data);
  };

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
      <div>
        <p>activeUrl {JSON.stringify(state.activeUrl.contents)}</p>
        <p>Job title : {jobInfo[0].data}</p>
        Job <button onClick={getContentsOfUrl}>See contents page</button>
      </div>
    );
  }
  return <div />;
};

export default Job;
