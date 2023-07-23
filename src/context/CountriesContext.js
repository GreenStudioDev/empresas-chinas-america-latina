import React, { createContext, useEffect, useState } from "react";
import { eraInstance } from "../api";

export const countriesContext = createContext();

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [countriesCompanies, setCountriesCompanies] = useState([]);

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

    async function getCountriesCompanies() {
      try {
        const response = await eraInstance.get(
          "/era-countries/countries-companies"
        );
        setCountriesCompanies(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCountriesCompanies();
  }, []);

  return (
    <countriesContext.Provider
      value={{
        countries: countries,
        countries_Companies: countriesCompanies,
      }}
    >
      {children}
    </countriesContext.Provider>
  );
}
