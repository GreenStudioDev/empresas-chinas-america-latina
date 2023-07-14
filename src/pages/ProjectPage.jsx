import React from "react";
import { ProjectCompanyInfo, ProjectCorruption, ProjectProfileSection, ProjectTitle } from "../components";

export function ProjectPage() {
  return <section>
    <ProjectTitle />
    <ProjectCompanyInfo />
    <ProjectProfileSection />
    <ProjectCorruption />
  </section>;
}
