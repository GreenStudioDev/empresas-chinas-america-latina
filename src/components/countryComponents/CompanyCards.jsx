
import { LocalShipping } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import "../../styles/CountryStyles.css"
import "../../styles/Global.css"
import { Link } from "react-router-dom";

export function CompanyCards() {

  return (
    <div className="era-margins">
    <>
      <Card className="era-tarjeta-container" >
        <CardMedia className="era-tarjeta-logo"
          component="img"
          image="https://lh3.googleusercontent.com/pw/AIL4fc_xxNyPqxkAYyINmvFF6nLIUlWPyHowoDXW-nikI7aOP5imYpCRU2-MFf3E2qYmfqh9mvYBb25u6Ia9VMoKyfdhG_35n6x8Q4O0NRxJw0ZVzuYIV-Lk9ITdSk0crn0EjQUxUaQ7IlkjzykhHODSnZPXyd-fLkuenIQv0nuScA5KL0ObsOBeGiMDtuXy3oVwAUxrIdiGW0NzmZ-51by7HJQBeSRx8AF7IDB_t8hDi4BFkGE5KblhWuTl5611_H2EwKeHWIB1roPBcrqeJ2SRcpbJFG8MIGslqbV5Xuf3DI5XH5cGl2fVsJvMkxgkZFU0r1XbvLa3eNbc_G8-OfkvuBS-JLi-O3Scxe83Lyv2fVeWRbtRJxWWgtWp2ejw3JOVtrsbk53Ft4IIU5E26CRJlcQWJ2zSWhGVGR9AxETKyE6oZPIdixv-GHFuiSasvBkclASNjc8pX9-C31wNtGdgtXN0FVLEK5qacb0qn3Enl4tLWWLGM-mekg-7YHCSJzMTXAmRWYI-C0Qw8kTuXyBNk3K1bzWcbvHNlCPxRJ3p9mzmUfwpM9Wvd-Gp0dMfCSFIgIW-qAjqmZLsnm_bM_ffdZCj_saado1Z9ncYb-irXQhtTf7l_wsfWjhIEOVsE0UIeesJnUnz7ucsPkzyE-2tB9FyCarVSwsFrD0kXNOtGgmTYMI9UJUwwJX7nWGSGMM9OyJ4zai9fisH4vjt5teHDrk7GNxWHE7Diib3unYPHA5XJo-bUBfZeY5R2qOPi8P7ETdIozyNv_4mioWShbCq4UlWLMjXt80KapRu-QNHBGsi-wcMv_OhWkY-d-xQtM8yxaO-dP2EYe3BQmbeWAuasHj4TMByl8LlcL2SLVL6it3zNqanVZ1dbBoa04wWJeXQIfIysmPqsUH-b967T0x2l2WFwFsSUl9SfZrYWyYoiluEgPcIHv2L3CgVzCeW0eop7uEyLT3NvwstTo7Pf6w0kofg2mvZr-keYw=w1102-h834-s-no?authuser=0"
          alt="Company logo"
        />
        <Box >
          <CardContent>
            <Typography component="div" variant="h5">
              China Harbour Engineering Company (CHEC)
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              公司: 中國港灣工程有限責任公司
            </Typography>
            <Typography variant="subtitle2" color="red" component="div">
              www.chec.bj.cn/pub/chec_pc/en/sy/
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              Sector: Transporte <LocalShipping />
            </Typography>
            <Typography variant="subtitle2" color="red" component="div">
              <Link className="era-links">Ver perfil de la empresa</Link>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
    </div>
  );
}
