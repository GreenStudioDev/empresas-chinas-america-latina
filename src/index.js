import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { App } from "./routes/App";
import {
  CompaniesProvider,
  CountriesProvider,
  ProjectsProvider,
} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CompaniesProvider>
      <CountriesProvider>
        <ProjectsProvider>
          <App />
        </ProjectsProvider>
      </CountriesProvider>
    </CompaniesProvider>
  </React.StrictMode>
);
