import React, { useContext, useEffect, useState } from "react";
import "../../styles/Global.css";
import "../../styles/ProjectStyles.css";
import { useParams } from "react-router";
import { projectsContext } from "../../context";

export function ProjectCorruption() {
  const { project_name } = useParams();
  const { projects } = useContext(projectsContext);
  const [projectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
    const info = projects.find((c) => c.PROJECT_NAME_SPA === project_name);
    setProjectInfo(info);
  }, [project_name, projects]);

  return (
    <section className="era-margins">
      <h3 className="era-subheader">Corrupción e Irregularidades</h3>
      <div className="era-project-description">
        <p>
        {projectInfo?.SUMMARY_OF_IRREGULARITIES_SPA !== ""
          ? projectInfo?.SUMMARY_OF_IRREGULARITIES_SPA
          : "No hay información"}
        </p>
      </div>
    </section>
  );
}
