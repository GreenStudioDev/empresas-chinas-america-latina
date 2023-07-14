
import { LocalShipping } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export function CompanyCards() {

  return (
    <>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image=""
          alt="Company logo"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
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
              <Link>Ver perfil de la empresa</Link>
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "1 0 auto" }}>
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
              <Link>Ver perfil de la empresa</Link>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
