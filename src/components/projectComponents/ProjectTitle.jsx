import React, { useContext, useEffect, useState } from "react";
import "../../styles/Global.css"
import "../../styles/ProjectStyles.css"
import { Link, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { projectsContext } from "../../context";



export function ProjectTitle() {
    const { project_name } = useParams();
    const { projects } = useContext(projectsContext);
    const [projectInfo, setProjectInfo] = useState([]);

    
    useEffect(() => {
      const info = projects.find((c) => c.PROJECT_NAME_SPA === project_name);
      setProjectInfo(info);
    }, [project_name, projects]);

  return (
    <section>
     <img className="era-banner-img" src="https://fundacionandresbello.org/era-banner-placeholder/" alt="Project banner" />
      <div className="era-margins">
        <div>
            <Link className="era-link-back" to={"/empresas-region-andina"}>
              <ArrowBack /> Regresar a la página anterior
            </Link>
          </div>
        <div>
          <h1 className="era-h1">{projectInfo?.PROJECT_NAME_SPA}</h1>
          <p>
            {projectInfo?.PROJECT_DESCRIPTION_SPA}
          </p>
          <div style={{display: "flex", alignItems: "center"}}>
            Ubicación / País: <span className="era-project-description"> {projectInfo?.LOCATION}, {projectInfo?.COUNTRY_NAME_SPA}</span>
            <Link className="era-links" to={`/empresas-region-andina/country/${projectInfo?.COUNTRY_NAME_ENG}`}>
              Ver perfil del país <img className="era-flag-icon" src={projectInfo?.COUNTRY_FLAG} alt="Flag" />
            </Link>
          </div>
          <div className="era-sector-container">
            <span>
              Sector:
            </span>
            <span className="era-p-bold">
              {projectInfo?.SECTOR_NAME_SPA}
            </span>
            <span className="era-sector-icon">
              <img style={{height: "25px"}} src={projectInfo?.ICON} alt="sector icon" />
            </span>
          </div>
        </div>
      </div> 
    </section>
  );
}
