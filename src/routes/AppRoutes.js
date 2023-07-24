import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CompanyPage, ProjectPage, CountryPage } from "../pages";
import {
  CompaniesProvider,
  CountriesProvider,
  ProjectsProvider,
} from "../context";

export function AppRoutes() {
  return (
    <CompaniesProvider>
      <CountriesProvider>
        <ProjectsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/empresas-region-andina" element={<Home />} />
              <Route
                path={"/empresas-region-andina/company/:company_name"}
                element={<CompanyPage />}
              />
              <Route
                path={"/empresas-region-andina/project/:project_name"}
                element={<ProjectPage />}
              />
              <Route
                path={"/empresas-region-andina/country/:country_name"}
                element={<CountryPage />}
              />
            </Routes>
          </BrowserRouter>
        </ProjectsProvider>
      </CountriesProvider>
    </CompaniesProvider>
  );
}
