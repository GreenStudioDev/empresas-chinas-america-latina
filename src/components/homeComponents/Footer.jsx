import "../../styles/Global.css"
import "../../styles/HomeStyles.css"
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { countriesContext, projectsContext } from "../../context";

export function Footer() {
  const { countries_Companies } = useContext(countriesContext);
  const { projects } = useContext(projectsContext);
  const [comapniesInfo, setComapniesInfo] = useState([]);
  // const [projectsInfo, setProjectsInfo] = useState([]);

  useEffect(() => {
    const filetrInfo = [
      ...new Set(
        countries_Companies?.map((companies) => companies?.COMPANY_NAME)
      ),
    ];
    setComapniesInfo(filetrInfo);
    // const projectsName = [
    //   ...new Set(projects?.map((project) => project?.PROJECT_NAME_SPA)),
    // ];
    // setProjectsInfo(projectsName);
  }, [countries_Companies, projects]);

  return (
    <section style={{ position: "relative", zIndex: "1"}}>
      <div className="era-home-filters-container"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <span style={{marginRight: "15px"}}>Buscar por empresa: </span>
        <TextField
          id="companies"
          select
          variant="standard"
          label="Empresa"
          defaultValue=""
          // helperText="Seleccione una empresa"
          sx={{width: "20%", marginRight: "15px"}}
        >
          {comapniesInfo.map((name) => ( 
            <Link className="era-links" to={`/empresas-region-andina/company/${name}`} key={name}>
              <MenuItem style={{fontWeight:"bold",}} value={name}>
                {name}
              </MenuItem>
            </Link>
          ))}
        </TextField>
        {/* <TextField
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
        </TextField> */}
      </div>
    </section>
  );
}
