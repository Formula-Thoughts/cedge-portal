import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sidepanel";
import { MemoryRouter } from "react-router-dom";
import AppProvider from "./context/AppProvider";

const root = document.createElement("div");
root.className = "container";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <MemoryRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </MemoryRouter>
  </React.StrictMode>
);
