import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, CompanyPage, ProjectPage, CountryPage } from '../pages'

export function AppRoutes () {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/empresas-region-andina"
        element={<Home />}
      />
      <Route
        path={'/empresas-region-andina/company'}
        element={<CompanyPage />}
      />
      <Route
        path={'/empresas-region-andina/project'}
        element={<ProjectPage />}
      />
      <Route
        path={'/empresas-region-andina/country'}
        element={<CountryPage />}
      />
    </Routes>
  </BrowserRouter>
  )
}