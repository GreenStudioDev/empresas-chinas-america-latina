import { useEffect, useState } from "react";
import { eraInstance } from "./";

export const CompanyInfo = () => {

  const [companies, setCompanies] = useState([]);
  const [foreingInvestment, setForeingInvestment] = useState([]);
  const [oilLoans, setOilLoans] = useState([]);
  const [subsidiaries, setSubsidiaries] = useState([]);
  const [compOperations, setCompOperations] = useState([]);
  const [conglomerates, setConglomerates] = useState([]);
  const [govInstRelationship, setGovInstRelationship] = useState([]);
  const [govRepRelationship, setGovRepRelationship] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [sales, setSales] = useState([]);
  const [services, setServices] = useState([]);
  const [shareholders, setShareholders] = useState([]);
  const [linkedPeopleByCountry, setLinkedPeopleByCountry] = useState([]);
  
  useEffect(() => {
    async function getCompanies() {
      try {
        const response = await eraInstance.get("/era-companies");
        setCompanies(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCompanies();

    async function getForeingInvestment() {
      try {
        const response = await eraInstance.get("/era-companies/foreing-invesment");
        setForeingInvestment(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getForeingInvestment();

    async function getOilLoans() {
      try {
        const response = await eraInstance.get("/era-companies/oil-loans");
        setOilLoans(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getOilLoans();

		async function getSubsidiaries() {
      try {
        const response = await eraInstance.get("/era-companies/subsidiaries");
        setSubsidiaries(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSubsidiaries();

		async function getCompOperations() {
      try {
        const response = await eraInstance.get("/era-companies/Comp-operations");
        setCompOperations(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCompOperations();

		async function getConglomerates() {
      try {
        const response = await eraInstance.get("/era-companies/conglomerates");
        setConglomerates(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getConglomerates();

		async function getGovInstRelationship() {
      try {
        const response = await eraInstance.get("/era-companies/gov-inst-relationship");
        setGovInstRelationship(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getGovInstRelationship();

		async function getGovRepRelationship() {
      try {
        const response = await eraInstance.get("/era-companies/gov-rep-relationship");
        setGovRepRelationship(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getGovRepRelationship();

		async function getPurchases() {
      try {
        const response = await eraInstance.get("/era-companies/purchases");
        setPurchases(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPurchases();

		async function getSales() {
      try {
        const response = await eraInstance.get("/era-companies/sales");
        setSales(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSales();

		async function getServices() {
      try {
        const response = await eraInstance.get("/era-companies/services");
        setServices(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getServices();

		async function getShareholders() {
      try {
        const response = await eraInstance.get("/era-companies/shareholders");
        setShareholders(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getShareholders();

		async function getLinkedPeopleByCountry() {
      try {
        const response = await eraInstance.get("/era-companies/linked-people-by-country");
        setLinkedPeopleByCountry(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getLinkedPeopleByCountry();


  }, []);

  return {
    CompaniesInfo: {
      companies: companies,
      companies_Foreing_Investment: foreingInvestment,
      companies_Oil_Loans: oilLoans,
			companies_Subsidiaries: subsidiaries,
			companies_Comp_Operations: compOperations,
			companies_Conglomerates: conglomerates,
			companies_Gov_Inst_Relationship: govInstRelationship,
			companies_Gov_Rep_Relationship: govRepRelationship,
			companies_Purchases: purchases,
			companies_Sales: sales,
			companies_Services: services,
			companies_Shareholders: shareholders,
			companies_LinkedPeopleByCountry: linkedPeopleByCountry,
    },
  };
};
