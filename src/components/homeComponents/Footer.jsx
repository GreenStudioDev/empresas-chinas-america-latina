import React from "react";
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
        <Link>Ver mapa del Caribe</Link>
        <ImageSearchIcon />
      </section>
      <section>
        <div>
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
      </section>
    </>
  );
}
