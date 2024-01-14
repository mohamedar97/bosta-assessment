import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import App from "./App";
import AppTheme from "./utils/AppTheme";

import "./utils/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
