import { ArrowBack, LocalShipping } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

export function CompanyTitle() {
  return (
    <section>
      <div>
        <img src="" alt="Company banner" />
        <div>
          <Link to={"/empresas-region-andina"}>
            <ArrowBack />
            Volver
          </Link>
        </div>
      </div>
      <div>
        <h1>China Harbour Engineering Company (CHEC)</h1>
        <span>公司: 中國港灣工程有限責任公司</span>
        <span>www.chec.bj.cn/pub/chec_pc/en/sy/</span>
      </div>
      <div>
        <div>
          <p>
            Tipo: Pública. Social Credit Code: 91110000710933796P. Ubicación:
            No. 9 Chunxiu Road, Dongcheng District. Beijing, China.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elii.Lorem ipsum
            dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>
        <div>
          <span>Países en los que tiene Presencia: </span>
          <span>#02</span>
        </div>
        <div>
          <img src="" alt="country flag" />
          <p>
            BOLIVIA. Participación: Proyectos - Inversión Directa Extranjera.
            Subsidiarias: China Harbour Engineering Company Ltd. Bolivia. Número
            de Intificación Fiscal: NIT:310214029. Año de Registro: N/D. Inicio
            de Operaciones: 2016 - Presente.
          </p>
        </div>
        <div>
          <img src="" alt="country flag" />
          <p>
            COLOMBIA. Participación: Proyectos - Inversión Directa Extranjera.
            Subsidiarias: China Harbour Engineering Company Limited Colombia.
            Número de Intificación Fiscal: NIT:9003676823. Año de Registro:
            2010. Inicio de Operaciones: 2015 - Presente.
          </p>
        </div>
        <span>Sectores </span>
          <span>Transporte <LocalShipping /></span>
      </div>
    </section>
  );
}
