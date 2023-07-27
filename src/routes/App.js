import React, { useContext } from "react";
import "../styles/App.css";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { countriesContext } from "../context";
import CircularProgress from "@mui/material/CircularProgress";

export function App() {
  const { countries } = useContext(countriesContext);
  console.log(
    "🚀 ~ file: App.js:9 ~ App ~ countries:",
    countries.length
  );

  return (
    <BrowserRouter>
    <div style={{display: "flex", fleDirection: "column", justifyContent: "center"}}>
    {countries.length < 4 ? <CircularProgress style={{width: "300px", height: "300px", margin: "150px"}} /> : <AppRoutes />}
    </div>
    </BrowserRouter>
  );
}
