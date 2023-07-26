// import React, { useEffect, useState } from "react";
import "../../styles/Global.css"
import "../../styles/HomeStyles.css"
// import { Link } from "react-router-dom";
// import { CompanyInfo } from "../../api";


export function Header() {
// const [companyData, setCompanyData] = useState()
// console.log("🚀 ~ file: Header.jsx:10 ~ Header ~ companyData:", companyData)

// useEffect(() => {
  
//     setCompanyData(CompanyInfo()?.CompaniesInfo?.companies)

// }, [])


  return (
    <section style={{zIndex: 1, position: "relative"}}>
      <div className="era-home-description-container">
        <span className="era-h1">Participación de empresas chinas en la región Andina</span>
        <p>
        La Fundación Andrés Bello presenta esta base de datos interactiva en la que encontrará información sobre las empresas de la República Popular China que operan en la región andina.
        </p>
        {/* <Link className="era-links">Comenzar a navegar</Link> */}
      </div>
    </section>
  );
}
