import React, { useContext, useEffect, useState } from "react";
import "../../styles/Global.css"
import "../../styles/ProjectStyles.css"
import { useParams } from "react-router";
import { projectsContext } from "../../context";

export function ProjectProfileSection() {
  const { project_name } = useParams();
  const { projects } = useContext(projectsContext);
  const [projectInfo, setProjectInfo] = useState([]);

  
  useEffect(() => {
    const info = projects.find((c) => c.PROJECT_NAME_SPA === project_name);
    setProjectInfo(info);
  }, [project_name, projects]);

  return (
    <section>
    <div className="era-margins">
      <a className="era-pdf-link" href={projectInfo?.PROJECT_PROFILE_LINK} target="_blank" rel="noopener noreferrer">
        <div className="era-pdfcontainer">
          <img className="era-pdf-img" src="https://fundacionandresbello.org/era-pdf-project-v2/" alt="profile cover" />
          <div className="era-pdf-description">
            <h3 className="era-h3">Descarga el perfil en PDF</h3>
            <p>
            Para mayor información sobre los proyectos realizados por las empresas chinas en la región puede descargar el siguiente documento
            </p>
          </div>
        </div>
      </a>
    </div>
  </section>
  );
}
