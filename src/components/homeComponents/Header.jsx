// import React, { useEffect, useState } from "react";
import "../../styles/Global.css"
import "../../styles/HomeStyles.css"
import { Link } from "react-router-dom";
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elii.Lorem ipsum
          dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip
        </p>
        <Link className="era-links">Comenzar a navegar</Link>
      </div>
    </section>
  );
}
