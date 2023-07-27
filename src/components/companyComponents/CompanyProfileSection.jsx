import React, { useContext, useEffect, useState } from "react";
import "../../styles/Global.css"
import { countriesContext } from "../../context";
import { useParams } from "react-router";

export function CompanyProfileSection() {
    const { company_name } = useParams();
    const { countries_Companies } = useContext(countriesContext);
    const [companyInfo, setCompanyInfo] = useState([]);

    useEffect(() => {
        const info = countries_Companies.find(
            (c) => c.COMPANY_NAME === company_name
          );
          setCompanyInfo(info);

    }, [company_name, countries_Companies])
    

  return (
    <section>
      <div className="era-margins">
        <a className="era-pdf-link" href={companyInfo?.COMPANY_PROFILE} target="_blank" rel="noopener noreferrer">
          <div className="era-pdfcontainer">
            <img className="era-pdf-img" src={companyInfo?.COMPANY_BANNER_PDF} alt="profile cover" />
            <div className="era-pdf-description">
              <h3 className="era-h3">Descarga el perfil en PDF</h3>
              <p>
              Para mayor información sobre las empresas chinas y su presencia en los países de la región puede descargar el siguiente documento
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
