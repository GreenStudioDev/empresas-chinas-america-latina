import React, { useContext, useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import "../../styles/mapStyles.css";
import { countriesContext } from "../../context";
import { Link } from "react-router-dom";

export function MapView({ setTooltipContent }) {
  const { countries_Companies } = useContext(countriesContext);
  const [projectionConfig, setProjectionConfig] = useState({
    rotate: [70, 10, 0],
    scale: 380,
  });
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState([0, 0]);
  const [countryName, setCountryName] = useState("");
  const [countryNameSpa, setCountryNameSpa] = useState("");
  const [countryInfo, setCountryInfo] = useState([]);
  console.log("🚀 ~ file: MapView.jsx:22 ~ MapView ~ countries_Companies:", countries_Companies)
  const [countryFilterInfo, setCountryFilterInfo] = useState([]);
  const [mapStyle, setMapStyle] = useState({
    width: "100%",
    marginTop: "-260px",
    position: "relative",
  });
  const [infoStyle, setInfoStyle] = useState({
    display: "none",
  });

  const geoUrl =
    "https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json";

  useEffect(() => {
    const info = countries_Companies.find(
      (c) => c.COUNTRY_NAME_ENG === countryName
    );
    const filetrInfo = countries_Companies.filter(
      (c) => c.COUNTRY_NAME_ENG === countryName
    );
    setCountryInfo(info);
    setCountryFilterInfo(filetrInfo);
  }, [countries_Companies, countryName]);

  const countryNames = [
    ...new Set(
      countries_Companies?.map((country) => country?.COUNTRY_NAME_ENG)
    )]
  console.log("🚀 ~ file: MapView.jsx:51 ~ MapView ~ countryNames:", countryNames)

  const handleClick = (geo, projection, path, geoProps, geoPropsSpa) => () => {
    const centroid = projection.invert(path.centroid(geo));
    setCountryName(geoProps);
    setCountryNameSpa(geoPropsSpa)
    setCenter(centroid);
    setZoom(12);
    setProjectionConfig({
      rotate: [70, 0, 0],
      scale: 65,
    });
    setMapStyle({ width: "50%", marginTop: "-55px", position: "relative" });
    setInfoStyle({ width: "50%", position: "relative" });
  };

  const handleClose = () => {
    setInfoStyle({ width: "50%", position: "relative", display: "none" });
    setCenter([-70, -10]);
    setZoom(1);
    setProjectionConfig({
      rotate: [70, 10, 0],
      scale: 380,
    });
    setMapStyle({ width: "100%", marginTop: "-260px", position: "relative" });
  };

  const handleFilter = (evt) => {
    return evt.type === "wheel" ? false : true;
  };

  return (
    <section
      style={{
        width: "auto",
        zIndex: 0,
        position: "relative",
        display: "flex",
      }}
    >
      <div style={mapStyle}>
        <ComposableMap
          // height={windowSize.height ? windowSize.height * 0.98 : 500}
          // width={windowSize.width ? windowSize.width * 0.98 : 500}
          projection="geoAzimuthalEqualArea"
          projectionConfig={projectionConfig}
        >
          <ZoomableGroup
            center={center}
            zoom={zoom}
            filterZoomEvent={handleFilter}
          >
            <Geographies geography={geoUrl} style={{ cursor: "pointer" }}>
              {({ geographies, projection, path }) =>
                geographies
                  .filter(
                    (d) =>
                      d.properties.SUBREGION === "South America" ||
                      d.properties.SUBREGION === "Central America"
                  )
                  .map((geo) => {
                    return (
                      <Geography
                        className="geo era-geo-fill"
                        key={geo.rsmKey}
                        geography={geo}
                        fill={countryNames.includes(geo.properties.NAME_EN) ? "#cc3333" : "#999999"}

                        value={geo.properties.COUNTRY_ID}
                        stroke="#D6D6DA"
                        strokeWidth="0.1"
                        onClick={handleClick(
                          geo,
                          projection,
                          path,
                          geo.properties.NAME_EN,
                          geo.properties.NAME_ES
                        )}
                      />
                    );
                  })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <div style={infoStyle}>
        <div className="era-link-back" style={{ cursor: "pointer" }} onClick={handleClose}>
          X
        </div>
        <img src="" alt="banner pais click" />
        <div>
          <div style={{display:"flex",alignItems:"center"}}>
            <h3 className="era-h1">{countryNameSpa}</h3>
            <img src="" alt="country-flag" />
          </div>
          <div>
            <p>Número de empresas: {countryFilterInfo.length}</p>
            {countryFilterInfo.map((info) => {
              return (
                <div className="era-home-sector-container">
                <p key={`sectors-${info?.COM_ID}`}>
                  sectores: {info?.SECTOR_NAME_SPA}
                  <img className="era-home-sector-icon"
                    src={info?.ICON}
                    alt="sector-logo"
                  />
                </p>
                </div>
              );
            })}
            <p>
              Principales Importaciones: {countryInfo?.MAIN_IMPORTS_SPA}{" "}
            </p>
            <p>
              Principales Exportaciones: {countryInfo?.MAIN_EXPORTS_SPA}{" "}
            </p>
          </div>
          <Link className="era-links" to={`/empresas-region-andina/country/${countryInfo?.COUNTRY_NAME_ENG}`}>
            Visitar el perfil del país{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
