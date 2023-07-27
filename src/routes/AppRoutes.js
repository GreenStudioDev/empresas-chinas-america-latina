import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, CompanyPage, ProjectPage, CountryPage } from "../pages";


export function AppRoutes() {

  return (
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
  );
}
