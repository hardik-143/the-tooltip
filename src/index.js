import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/index.scss";
import "the-tooltip/dist/css/the-tooltip.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="app-container">
      <div className="inner">
        <App />
      </div>
    </div>
  </>
);
