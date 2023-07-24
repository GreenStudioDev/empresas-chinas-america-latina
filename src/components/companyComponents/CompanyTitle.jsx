import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import "../../styles/Global.css";
import "../../styles/CompanyStyles.css";
import { Link, useParams } from "react-router-dom";
import { companiesContext, countriesContext } from "../../context";

export function CompanyTitle() {
  const { company_name } = useParams();
  const { countries_Companies } = useContext(countriesContext);
  const { companies_Subsidiaries } = useContext(companiesContext);
  const [companyInfo, setCompanyInfo] = useState([]);
  const [companyFilterInfo, setCompanyFilterInfo] = useState([]);
  const [subsidiaryInfo, setSubsidiaryInfo] = useState([]);

  useEffect(() => {
    const info = countries_Companies.find(
      (c) => c.COMPANY_NAME === company_name
    );
    const filetrInfo = countries_Companies.filter(
      (c) => c.COMPANY_NAME === company_name
    );
    const subsidiariesFiletrInfo = companies_Subsidiaries.filter(
      (c) => c.COMPANY_NAME === company_name
    );
    setCompanyInfo(info);
    setCompanyFilterInfo(filetrInfo);
    setSubsidiaryInfo(subsidiariesFiletrInfo);
  }, [countries_Companies, company_name, companies_Subsidiaries]);

  const SectorNames = [
    ...new Set(subsidiaryInfo?.map((sector) => sector?.SECTOR_NAME_SPA)),
  ];
  const sectorIcon = subsidiaryInfo.find((icon) =>
    SectorNames.includes(icon.SECTOR_NAME_SPA)
  );

  return (
    <section>
      <div>
        <img
          className="era-banner-img"
          src={companyInfo?.COMPANY_BANNER_PROFILE}
          alt="Company banner"
        />
      </div>
      <div className="era-margins">
        <div>
          <Link className="era-linkback" to={"/empresas-region-andina"}>
            <ArrowBack />
            Regresar a la página anterior
          </Link>
        </div>
        <div>
          <h1>{companyInfo?.COMPANY_NAME}</h1>
          <span>公司:</span>
          <span className="era-title-chinese">
            {companyInfo?.COMPANY_NAME_ZH}
          </span>
          <a className="era-as" href={companyInfo?.WEBPAGE} target="blank">
            {companyInfo?.WEBPAGE}
          </a>
        </div>
        <div>
          <div>
            <p>
              <span className="era-company-description">Tipo:</span>{" "}
              {companyInfo?.TYPE_SPA}
              <span className="era-company-description">
                Social Credit Code:
              </span>
              {companyInfo?.SOCIAL_CREDIT_CODE}
              <span className="era-company-description">Ubicación:</span>{" "}
              {companyInfo?.ADDRESS_RPCh + " " + companyInfo?.HEADQUARTERS_RPCh}
            </p>
            <p>{companyInfo?.COMPANY_DESCRIPTION_SPA}</p>
          </div>
          <div>
            <span className="era-company-description">
              Países en los que tiene Presencia:{" "}
            </span>
            <span>{companyFilterInfo.length}</span>
          </div>
          {companyFilterInfo.map((country) => {
            return (
              <div
                key={`countries-sub-key-${country?.COUNTRY_NAME_SPA}`}
                className="era-countries-container"
              >
                <Link to={`/empresas-region-andina/country/${country?.COUNTRY_NAME_ENG}`}>
                <img
                  className="era-countries-icon-container"
                  src={country?.COUNTRY_FLAG}
                  alt="country flag"
                />
                </Link>
                <div>
                  <span className="era-country-description">
                    {country?.COUNTRY_NAME_SPA}
                  </span>{" "}
                  {subsidiaryInfo
                    .filter(
                      (sub) =>
                        sub.COUNTRY_NAME_SPA === country?.COUNTRY_NAME_SPA
                    )
                    .map((sub) => {
                      return (
                        <div key={`sub-key${sub?.SUB_ID}`}>
                          <span
                            className="era-country-description"
                          >
                            {" "}
                            Subsidiaria:
                          </span>{" "}
                          {sub?.SUBSIDIARY_NAME + " "}
                          <span className="era-country-description">
                            Número de Intificación Fiscal:{" "}
                          </span>
                          {sub?.SUBSIDIARY_TAX_ID !== ""
                            ? sub?.SUBSIDIARY_TAX_ID
                            : "N/D"}
                          <span className="era-country-description">
                            {" "}
                            Año de Registro:
                          </span>{" "}
                          {sub?.SUBSIDIARY_REGISTRATION_YEAR !== ""
                            ? sub?.SUBSIDIARY_REGISTRATION_YEAR
                            : "N/D"}
                          <span className="era-country-description">
                            {" "}
                            Inicio de Operaciones:
                          </span>{" "}
                          {sub?.SUBSIDIARY_OPERATION_START_YEAR_SPA !== ""
                            ? sub?.SUBSIDIARY_OPERATION_START_YEAR_SPA
                            : "N/D"}{" "}
                          <br />
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
          <div className="era-sector-container">
            <span className="era-country-description">Sectores: </span>
            {" " + SectorNames}
            <span className="era-sector-icon">
              <img
                style={{ height: "25px" }}
                src={sectorIcon?.ICON}
                alt="sector icon"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
