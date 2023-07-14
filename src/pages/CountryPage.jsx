import React from "react";
import { CompanyCards, CountryProjects, CountryTitle } from "../components";

export function CountryPage() {
  return (
    <section>
      <CountryTitle />
      <CompanyCards />
      <CountryProjects />
    </section>
  );
}
