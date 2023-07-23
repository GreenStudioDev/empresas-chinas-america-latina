import { useEffect, useState } from "react";
import { eraInstance } from "./";

export const CountriesInfo = () => {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    async function getCountries() {
      try {
        const response = await eraInstance.get("/era-countries");
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCountries();		
    
  }, []);
  
  return countries
};
