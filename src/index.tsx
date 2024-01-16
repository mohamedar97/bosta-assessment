import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import App from "./App";
import AppTheme from "./utils/AppTheme";

import "./utils/global.css";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./state/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={AppTheme}>
        <React.Suspense fallback="Loading...">
          <App />
        </React.Suspense>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
