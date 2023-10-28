import React, { createContext, useState, useContext } from "react";

export type Props = {
  children: JSX.Element;
};

const AppContext = createContext<any>(undefined);

const AppProvider = (props: Props) => {
  const [activeUrl, setActiveUrl] = useState(null); // Initialize state here

  return (
    <AppContext.Provider value={{ activeUrl, setActiveUrl }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context: {
    activeUrl: {
      tabId: number;
      isJob: boolean;
      contents: string;
    };
    setActiveUrl: React.Dispatch<
      React.SetStateAction<{
        tabId: number | undefined;
        isJob: boolean | null;
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
