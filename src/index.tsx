import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/base.scss";
import BaseRouter from "./router/BaseRouter";
import { QueryClientProvider, QueryClient } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BaseRouter />
    </QueryClientProvider>
  </React.StrictMode>
);
