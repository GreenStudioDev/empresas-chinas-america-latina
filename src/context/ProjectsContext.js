import React, { createContext, useEffect, useState } from "react";
import { eraInstance } from "../api";

export const projectsContext = createContext();


export function ProjectsProvider({ children }) {
  const [projects, setprojects] = useState([]);
  const [keyPersons, setKeyPersons] = useState([]);
  const [irregCorrupt, setIrregCorrupt] = useState([]);
 
  useEffect(() => {
    async function getprojects() {
      try {
        const response = await eraInstance.get("/era-projects");
        setprojects(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getprojects();

    async function getKeyPersons() {
      try {
        const response = await eraInstance.get("/era-projects/key-persons");
        setKeyPersons(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getKeyPersons();

    async function getIrregCorrupt() {
      try {
        const response = await eraInstance.get("/era-projects/irreg-corrupt");
        setIrregCorrupt(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getIrregCorrupt();

		

  }, []);



  return (
    <projectsContext.Provider value={{
      projects: projects,
      projects_Key_persons: keyPersons,
      projects_Irreg_Corrupt: irregCorrupt,
    }}>
      {children}
    </projectsContext.Provider>
  );
}
