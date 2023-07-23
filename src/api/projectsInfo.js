import { useEffect, useState } from "react";
import { eraInstance } from "./apiInstace";

export const ProjectsInfo = () => {
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

  return {
    projectsInfo: {
      projects: projects,
      projects_Key_persons: keyPersons,
      projects_Irreg_Corrupt: irregCorrupt,
    },
  };
};
