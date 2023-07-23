import React from "react";
import "../../styles/Global.css"
import "../../styles/HomeStyles.css"
import { Link } from "react-router-dom";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { MenuItem, TextField } from "@mui/material";

export function Footer() {
  const companyFilter = [
    {
      value: "comp1",
      label: "Empresa 1",
    },
    {
      value: "comp2",
      label: "Empresa 2",
    },
  ];
  const projectFilter = [
    {
      value: "proj1",
      label: "Proyecto 1",
    },
    {
      value: "proj2",
      label: "Proyecto 2",
    },
    {
      value: "proj3",
      label: "Proyecto 3",
    },
    {
      value: "proj4",
      label: "Proyecto 4",
    },
  ];
  return (
    <>
      <section>
        <div className="home-filters-container">
          <div style={{display: "flex", alignItems: "center"}}>
          <Link className="era-links">Ver mapa del Caribe</Link>
          <ImageSearchIcon style={{color:"#C52633"}}/>
          </div>
          <div style={{display: "flex", alignItems: "center", marginLeft:"25px"}}>
          <span>Buscar por: </span>
          <TextField
            id="outlined-select-currency"
            select
            label="empresas"
            defaultValue="comp1"
            helperText="Seleccione una empresa"
          >
            {companyFilter.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Proyectos"
            defaultValue="proj2"
            // SelectProps={{
            //   native: true,
            // }}
            helperText="Please select your currency"
          >
            {projectFilter.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          </div>
        </div>
      </section>
    </>
  );
}
