import React, { useContext, useEffect, useState } from "react";
import "../../styles/CountryStyles.css";
import "../../styles/Global.css";
import { Link, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { countriesContext } from "../../context";

export function CountryTitle() {
  const { country_name } =useParams()
  const { countries_Companies } = useContext(countriesContext);
  const [countryInfo, setCountryInfo] = useState([]);
  const [countryFilterInfo, setCountryFilterInfo] = useState([]);


  useEffect(() => {
    const info = countries_Companies.find(
      (c) => c.COUNTRY_NAME_ENG === country_name
    );
    const filetrInfo = countries_Companies.filter(
      (c) => c.COUNTRY_NAME_ENG === country_name
    );
    setCountryInfo(info);
    setCountryFilterInfo(filetrInfo);
  }, [countries_Companies, country_name]);


  return (
    <section>
      <div>
        <img className="era-banner-img" src={countryInfo?.COUNTRY_BANNER_PROFILE} alt="Country banner" />
      </div>
      <div className="era-margins">
        <Link to={"/empresas-region-andina"} className="era-link-back">
          <ArrowBack />
          Regresar a la página anterior
        </Link>
        <div className="era-title-container">
          <h1 className="era-h1">{countryInfo?.COUNTRY_NAME_SPA}</h1>
          <img className="era-title-flag" src={countryInfo?.COUNTRY_FLAG} alt="Flag" />
        </div>
        <div>
          <div>
            <p>N° Empresas:<span className="era-p-bold"> #{countryFilterInfo.length}</span> </p>
          </div>
          <div className="era-sector-container">
            {countryFilterInfo.map((info) => {
              return (
                <p key={`sectors-${info?.COM_ID}`}>
                  sectores: <span className="era-p-bold">{info?.SECTOR_NAME_SPA}</span>
                  <img className="era-sector-icon"
                    src={info?.ICON}
                    alt="sector-logo"
                  />
                </p>
              );
            })}
          </div>
          <div>
            <span>Estatus de la relación bilateral: </span>
            <span className="era-p-bold">
              {countryInfo?.BILATERAL_RELATIONS_STATUS_SPA}*
            </span>
            <p className="era-status">
              *La República Popular China ha desarrollado un modelo de cuatro
              niveles para clasificar su relación con otros países de acuerdo
              con el nivel de importancia y profundidad de sus relacionales
              bilaterales. Estos son, de menor a mayor profundidad: 1.
              Asociación Cooperativa; 2. Asociación Cooperativa Integral; 3.
              Asociación Estratégica; y, 4. Asociación Estratégica Integral.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
