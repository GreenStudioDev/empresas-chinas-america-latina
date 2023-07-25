import React, { useContext, useEffect, useState } from "react";
import "../../styles/Global.css"
import "../../styles/ProjectStyles.css"
import { useParams } from "react-router";
import { projectsContext } from "../../context";

export function ProjectCompanyInfo() {
    const { project_name } = useParams();
    const { projects } = useContext(projectsContext);
    const [projectInfo, setProjectInfo] = useState([]);

    
    useEffect(() => {
      const info = projects.find((c) => c.PROJECT_NAME_SPA === project_name);
      setProjectInfo(info);
    }, [project_name, projects]);

  return (
    <section className="era-margins">
      <div className="era-company-container">
        <div>
          <img className="era-company-logo" src={projectInfo?.COMPANY_LOGO} alt="company logo" />
        </div>
        <div className="era-company-card-description">
          <p className="era-h2">Empresa RPCh: {projectInfo?.COMPANY_NAME}</p>
          <p>
            公司: <span className="era-company-text">{projectInfo?.COMPANY_NAME_ZH}</span>
          </p>
          <p>
            <span className="era-company-text">Tipo:</span> {projectInfo?.TYPE_SPA}
            <span className="era-company-text"> Social Credit Code:</span> {projectInfo?.SOCIAL_CREDIT_CODE}
            <span className="era-company-text"> Subsidiaria:</span> {projectInfo?.SUBSIDIARY_NAME}
            <span className="era-company-text"> Número de Intificación Fiscal subsidiaria:</span> {projectInfo?.SUBSIDIARY_TAX_ID}
            <span className="era-company-text"> Año de Registro subsidiaria:</span> {projectInfo?.SUBSIDIARY_REGISTRATION_YEAR !== "" ? projectInfo?.SUBSIDIARY_REGISTRATION_YEAR : "N/D"} 
            <span className="era-company-text"> Inicio de Operaciones subsidiaria:</span> {projectInfo?.SUBSIDIARY_OPERATION_START_YEAR_SPA}
          </p>
        </div>
      </div>
      <div>
          <p>
            Año de Inicio: <span className="era-company-text">{projectInfo?.YEAR_OF_BEGENING}</span> | Estado Actual: <span className="era-company-text">{projectInfo?.CURRENT_STATUS_SPA}</span>
          </p>
          <p>
             Monto del Proyecto (US$): <span className="era-company-text">{parseInt(projectInfo?.PROJECT_AMMOUNT).toLocaleString("en-US")}</span>
          </p>
          <p>
            Vínculo Ministerial: <span className="era-company-text">{projectInfo?.MINISTERIES_IN_RECIEVING_COUNTRY_SPA}</span>
          </p>
          <p>
            Ente u órgano ejecutor: <span className="era-company-text">{projectInfo?.CONTRACTOR_IN_RECEIVING_COUNTRY}</span>
          </p>
        </div>
    </section>
  );
}
