import React, { createContext, useState, useContext } from "react";
import { getLinkedinJobContents } from "../utils/url";
import * as cheerio from "cheerio";
import { sendContentsToApi } from "../resources/api";
import { useNavigate } from "react-router-dom";

export type Props = {
  children: JSX.Element;
};

const AppContext = createContext<any>(undefined);

const AppProvider = (props: Props) => {
  const [activeUrl, setActiveUrl] = useState<{
    tabId: number;
    isJob: boolean;
    contents: string;
  } | null>(null); // Initialize state here
  const navigate = useNavigate();
  const [isLoadingSummaries, setIsLoadingSummaries] = useState(false);
  const [errorSummaries, setErrorSummaries] = useState(false);
  const [linkedinProfile, setLikedinProfile] = useState<null | string>(null);

  const getSummariesFromApi = async () => {
    const data = await getLinkedinJobContents(activeUrl?.tabId as number);
    setIsLoadingSummaries(true);
    if (data) {
      const $ = cheerio.load(JSON.stringify(data[0].result as any));
      console.log("data", $("span").text());

      try {
        const apiResponse: { summaries: Array<string> } =
          await sendContentsToApi($("span").text());
        if (apiResponse) {
          setIsLoadingSummaries(false);
          navigate("/summaries", {
            state: apiResponse.summaries,
          });
          console.log("apiResponse", apiResponse);
        }
      } catch (error) {
        setIsLoadingSummaries(false);
        setErrorSummaries(true);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeUrl,
        setActiveUrl,
        isLoadingSummaries,
        setIsLoadingSummaries,
        getSummariesFromApi,
        errorSummaries,
        linkedinProfile,
        setLikedinProfile,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context: {
    linkedinProfile: null | string;
    setLikedinProfile: any;
    errorSummaries: boolean;
    isLoadingSummaries: boolean;
    getSummariesFromApi(): void;
    activeUrl: {
      tabId: number;
      isJob: boolean;
      isLinkedinProfile: boolean;
      contents: string;
    };
    setActiveUrl: React.Dispatch<
      React.SetStateAction<{
        tabId: number | undefined;
        isJob: boolean | null;
        isLinkedinProfile: boolean | null;
        contents: string | null;
      } | null>
    >;
  } = useContext(AppContext);
  if (!context) {
    throw new Error("useApps must be used within a AppProvider");
  }
  return context;
};

export default AppProvider;
