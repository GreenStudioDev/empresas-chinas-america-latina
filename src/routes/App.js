import React from "react";
import "../styles/App.css";
// import { Home, CompanyPage, ProjectPage } from "../pages";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

// const router = createBrowserRouter([
//   {
//     path: "empresas-region-andina",
//     element: <Home />,
//     children: [
//       {
//         path: "company",
//         element: <CompanyPage />,
//       },
//       {
//         path: "project",
//         element: <ProjectPage />,
//       },
//     ],
//   },
// ]);

export function App() {
  return (
    // <RouterProvider router={router}>
    <AppRoutes />
    // </RouterProvider>;
  );
}
