import "../../styles/Global.css"
import "../../styles/HomeStyles.css"
import { Link } from "react-router-dom";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { MenuItem, TextField } from "@mui/material";
import { countriesContext, projectsContext } from "../../context";

export function Footer() {
  const { countries_Companies } = useContext(countriesContext);
  const { projects } = useContext(projectsContext);
  const [comapniesInfo, setComapniesInfo] = useState([]);
  const [projectsInfo, setProjectsInfo] = useState([]);

  useEffect(() => {
    const filetrInfo = [
      ...new Set(
        countries_Companies?.map((companies) => companies?.COMPANY_NAME)
      ),
    ];
    const projectsName = [
      ...new Set(projects?.map((project) => project?.PROJECT_NAME_SPA)),
    ];
    setComapniesInfo(filetrInfo);
    setProjectsInfo(projectsName);
  }, [countries_Companies, projects]);

  return (
    <section>
      <div className="era-home-filters-container"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span>Buscar por: </span>
        <TextField className="era-home-filters-label"
          id="companies"
          select
          variant="standard"
          label="Empresa"
          defaultValue=""
          // helperText="Seleccione una empresa"
          sx={{ width: "20%" }}
        >
          {comapniesInfo.map((name) => (
            <Link to={`/empresas-region-andina/company/${name}`} key={name}>
              <MenuItem  value={name}>
                {name}
              </MenuItem>
            </Link>
          ))}
        </TextField>
        <TextField
          id="projects"
          select
          label="Proyecto"
          variant="standard"
          defaultValue=""
          // SelectProps={{
          //   native: true,
          // }}
          // helperText="Please select your currency"
          sx={{ width: "20%" }}
        >
          {projectsInfo.map((name) => (
            <Link to={`/empresas-region-andina/project/${name}`} key={name}>
              <MenuItem value={name}>
                {name}
              </MenuItem>
            </Link>
          ))}
        </TextField>
      </div>
    </section>
  );
}
