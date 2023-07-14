import React from "react";
import { Link } from "react-router-dom";
import { ArrowBack, LocalShipping } from "@mui/icons-material";
export function ProjectTitle() {
  return (
    <section>
      <div>
        <img src="" alt="Country banner" />
        <div>
          <Link to={"/empresas-region-andina"}>
            <ArrowBack />
            Volver
          </Link>
        </div>
      </div>
      <div>
        <h1>Carretera San Borja - San Ignacio de Moxos</h1>
        <p>
          Este proyecto hace referencia a la construcción de una carretera
          ubicada en la provincia de Beni y forma parte de la Vía Nacional NO.3
          de Bolivia. Cuenta con una longitud total de 140,78 kilómetros
        </p>
        <p>
          País / Ubicación: Beni, BOLIVIA{" "}
          <Link to={"/empresas-region-andina/country"}>
            Ver perfil del país <img src="" alt="Flag" />
          </Link>
        </p>
        <div>
          <span>Sectores: </span>
          <span>
            Transporte <LocalShipping />{" "}
          </span>
        </div>
      </div>
    </section>
  );
}
