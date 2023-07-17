import { LocalShipping } from "@mui/icons-material";
import {
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from "@mui/material";
import React from "react";

export function CompanyProjects() {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#cc6666",
      color: "#fff",
      border: "1px solid #fff",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border: "1px solid #cc6666",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      //   border: 0,
    },
  }));

  function createData(
    country,
    projectName,
    sector,
    subsidiary,
    location,
    begeningYear,
    currentStatus,
    projectAmmount
  ) {
    return {
      country,
      projectName,
      sector,
      subsidiary,
      location,
      begeningYear,
      currentStatus,
      projectAmmount,
    };
  }

  const rows = [
    createData(
      "Bolivia",
      "Carretera San Borja - San Ignacio de Moxos",
      "Transporte",
      "China Harbour Engineering Company Ltd. Bolivia",
      "Beni",
      "2016",
      "Concluido",
      "210.000.000"
    ),
    createData(
      "Bolivia",
      "Carretera dual Sucre - Yamparáez",
      "Transporte",
      "China Harbour Engineering Company Ltd. Bolivia",
      "Chuquisaca",
      "2022",
      "En curso",
      "65.000.000"
    ),
    createData(
      "Bolivia",
      "Rehabilitación de la carretera Santa Cruz - Trinidad - San Javier y Puerto Varador - Trinidad",
      "Transporte",
      "China Harbour Engineering Company Ltd. Bolivia",
      "Santa Cruz, Beni",
      "2018",
      "En curso",
      "71.000.000"
    ),
  ];

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
    <section>
      <h3>Proyectos en Colombia</h3>
      <div>
        <span>Filtrar por: </span>
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
          label="Proyecto"
          defaultValue="proj2"
          // SelectProps={{
          //   native: true,
          // }}
          helperText="Seleccione un proyecto"
        >
          {projectFilter.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "720px", maxWidth:"1080px"}} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">País</StyledTableCell>
                <StyledTableCell align="center">
                  Nombre del proyecto
                </StyledTableCell>
                <StyledTableCell align="center">Sector/es</StyledTableCell>
                <StyledTableCell align="center">
                  Empresa filial, subisidiaria o empresa mixta
                </StyledTableCell>
                <StyledTableCell align="center">Ubicación</StyledTableCell>
                <StyledTableCell align="center">Año de inicio</StyledTableCell>
                <StyledTableCell align="center">Estado actual</StyledTableCell>
                <StyledTableCell align="center">
                  Monto del proyecto (US$)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.projectName}>
                  <StyledTableCell align="center">
                    {row.country}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.projectName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <LocalShipping />
                    {row.sector}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.subsidiary}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.location}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.begeningYear}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.currentStatus}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.projectAmmount}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
}
