import React from "react";
import { Link } from "react-router-dom";
import { ArrowBack, LocalShipping } from "@mui/icons-material";
export function CountryTitle() {
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
        <h1>Colombia</h1>
        <img src="" alt="Flag" />
      </div>
      <div>
        <div>
          <span>N° Empresas: </span>
          <span>#01</span>
        </div>
        <div>
          <span>Sectores: </span>
          <span>
            Transporte <LocalShipping />{" "}
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elii.Lorem ipsum
          dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip.{" "}
        </p>
      </div>
    </section>
  );
}
