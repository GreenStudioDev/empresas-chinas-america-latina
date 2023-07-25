import {
//   MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
//   TextField,
  styled,
  tableCellClasses,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "../../styles/CountryStyles.css";
import "../../styles/Global.css";
import { projectsContext } from "../../context";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function CountryProjects() {
  const { country_name } = useParams();
  const { projects } = useContext(projectsContext);
  const [projectInfo, setProjectInfo] = useState([]);
  const [projectFilterInfo, setProjectFilterInfo] = useState([]);

  useEffect(() => {
    const info = projects.find((c) => c.COUNTRY_NAME_ENG === country_name);
    const filetrInfo = projects.filter(
      (c) => c.COUNTRY_NAME_ENG === country_name
    );
    setProjectInfo(info);
    setProjectFilterInfo(filetrInfo);
  }, [country_name, projects]);

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
    sector,
    companyRpch,
    subsidiary,
    projectName,
    location,
    begeningYear,
    currentStatus,
    projectAmmount
  ) {
    return {
      sector,
      companyRpch,
      subsidiary,
      projectName,
      location,
      begeningYear,
      currentStatus,
      projectAmmount,
    };
  }

  const rows = projectFilterInfo.map((project) =>
    createData(
      <div>
        <img style={{ height: "40px" }} src={project?.ICON} alt="sector icon" />
        {project?.SECTOR_NAME_SPA}
      </div>,
      <Link className="era-links-table" to={`/empresas-region-andina/company/${project?.COMPANY_NAME}`}>
        {project?.COMPANY_NAME}
      </Link>,
      project?.SUBSIDIARY_NAME,
      <Link className="era-links-table" to={`/empresas-region-andina/project/${project?.PROJECT_NAME_SPA}`}>{project?.PROJECT_NAME_SPA}</Link>,
      project?.LOCATION,
      project?.YEAR_OF_BEGENING,
      project?.CURRENT_STATUS_SPA,
      project?.PROJECT_AMMOUNT === "N/D" ? "N/D" : `US$ ${parseInt(project?.PROJECT_AMMOUNT).toLocaleString("en-US")}`
    )
  );

//   const companyFilter = [
//     {
//       value: "comp1",
//       label: "Empresa 1",
//     },
//     {
//       value: "comp2",
//       label: "Empresa 2",
//     },
//   ];

//   const projectFilter = [
//     {
//       value: "proj1",
//       label: "Proyecto 1",
//     },
//     {
//       value: "proj2",
//       label: "Proyecto 2",
//     },
//     {
//       value: "proj3",
//       label: "Proyecto 3",
//     },
//     {
//       value: "proj4",
//       label: "Proyecto 4",
//     },
//   ];

  return (
    <section className="era-margins">
      <h3 className="era-subheader">
        Proyectos en {projectInfo?.COUNTRY_NAME_SPA}
      </h3>
      {/* <div className="era-filtros-container">
        <span>Filtrar por: </span>
        <TextField className="era-filtros-box" select defaultValue="comp1">
          {companyFilter.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField className="era-filtros-box" select defaultValue="proj2">
          {projectFilter.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div> */}
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Sector/es</StyledTableCell>
                <StyledTableCell align="center">Empresa RPCh</StyledTableCell>
                <StyledTableCell align="center">
                  Empresa filial, subisidiaria o empresa mixta
                </StyledTableCell>
                <StyledTableCell align="center">
                  Nombre del proyecto
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
                <StyledTableRow key={`countries-row-${projectInfo.PR_ID++}`}>
                  <StyledTableCell align="center">{row.sector}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.companyRpch}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.subsidiary}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.projectName}
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
