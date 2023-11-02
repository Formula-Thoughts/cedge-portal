import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sidepanel";
import { MemoryRouter } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import theme from "./cedge-library/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./cedge-library/globalStyle";

const root = document.createElement("div");
root.className = "container";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <MemoryRouter>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </AppProvider>
    </MemoryRouter>
  </React.StrictMode>
);
