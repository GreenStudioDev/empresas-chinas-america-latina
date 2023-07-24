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
      <a className="era-pdf-link" href="http://" target="_blank" rel="noopener noreferrer">
        <div className="era-pdfcontainer">
          <img className="era-pdf-img" src="" alt="profile cover" />
          <div className="era-pdf-description">
            <h3 className="era-pdf-subheader">Descarga el perfil en PDF</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elii.Lorem ipsum
              dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
            </p>
          </div>
        </div>
      </a>
    </div>
  </section>
  );
}
