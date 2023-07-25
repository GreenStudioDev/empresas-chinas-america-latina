import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "../../styles/CountryStyles.css";
import "../../styles/Global.css";
import { Link, useParams } from "react-router-dom";
import { countriesContext } from "../../context";

export function CompanyCards() {
  const { country_name } = useParams();
  const { countries_Companies } = useContext(countriesContext);
  const [countryFilterInfo, setCountryFilterInfo] = useState([]);

  useEffect(() => {
    const filetrInfo = countries_Companies.filter(
      (c) => c.COUNTRY_NAME_ENG === country_name
    );
    setCountryFilterInfo(filetrInfo);
  }, [countries_Companies, country_name]);

  return (
    <div className="era-margins">
      {countryFilterInfo.map((company) => {
        return (
          <Card sx={{backgroundColor:"#CACACA",border:"0",boxShadow:"0",borderRadius:"0"}}
            className="era-tarjeta-container" key={`com-card-key-${company?.COM_ID}`}>
            <CardMedia
              className="era-tarjeta-logo"
              component="img"
              image={company?.COMPANY_LOGO}
              alt="Company logo"
            />
            <Box>
              <CardContent>
                <Typography component="div" variant="h5">
                  {company?.COMPANY_NAME}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {company?.COMPANY_NAME_ZH}
                </Typography>
                <Typography  variant="subtitle2" color="red" component="div">
                  {company?.WEBPAGE}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  Sector: {company?.SECTOR_NAME_SPA} <img style={{height: "25px"}} src={company?.ICON} alt="sector icon" />
                </Typography>
                <Typography variant="subtitle2" color="red" component="div">
                  <Link to={`/empresas-region-andina/company/${company?.COMPANY_NAME}`}className="era-links">Ver perfil de la empresa</Link>
                </Typography>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </div>
  );
}
