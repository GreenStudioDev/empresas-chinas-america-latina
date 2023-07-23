import React from "react";
import "../../styles/Global.css"
import "../../styles/HomeStyles.css"
import { Link } from "react-router-dom";

export function Header() {
  return (
    <section>
      <div className="home-description-container">
        <h1>Participación de empresas chinas en la región Andina</h1>
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
