import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "the-tooltip/dist/css/the-tooltip.css";
import "./style/index.scss";
import App from "./App";
import { AppProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppProvider>
      <App />
    </AppProvider>
  </>
);
