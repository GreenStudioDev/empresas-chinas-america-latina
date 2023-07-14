import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export function MapView() {

  const geoUrl =
  "https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json"
  

  return (
    <section>
      <ComposableMap
        // height={windowSize.height ? windowSize.height * 0.98 : 500}
        // width={windowSize.width ? windowSize.width * 0.98 : 500}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [77, 12, 0],
          scale: 300,
        }}
        // onClick={handleOnClick}
        // onWheelCapture={closeOnZoomIn}
      >
        {/* <Graticule stroke="#ccc" step={[27, 9]} /> */}

        <Geographies geography={geoUrl} style={{ cursor: "pointer" }}>
          {({ geographies }) =>
            geographies
              .filter(
                (d) =>
                  d.properties.SUBREGION === "South America" ||
                  d.properties.SUBREGION === "Central America"
              )
              .map((geo) => {
                return (
                  <Geography
                    className="geo"
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#999999"
                    value={geo.properties.COUNTRY_ID}
                    stroke="#D6D6DA"
                    strokeWidth="0.4"
                  />
                );
              })
          }
        </Geographies>
      </ComposableMap>
    </section>
  );
}
