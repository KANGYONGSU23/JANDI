import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/base.scss";
import App from "./App";
import BaseRouter from "./router/BaseRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BaseRouter></BaseRouter>
  </React.StrictMode>
);
