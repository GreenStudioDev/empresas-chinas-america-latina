import React from "react";
import { CompanyProfileSection, CompanyProjects, CompanyTitle } from "../components";

export function CompanyPage() {
  return (
    <section>
      <CompanyTitle />
      <CompanyProfileSection />
      <CompanyProjects />
    </section>
  );
}
