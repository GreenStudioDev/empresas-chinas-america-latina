import { ArrowBack, LocalShipping } from "@mui/icons-material";
import React from "react";
import "../../styles/Global.css"
import "../../styles/CompanyStyles.css"
import { Link } from "react-router-dom";

export function CompanyTitle() {
  return (
    <section>
      <div>
      <img className="era-banner-img" src="https://lh3.googleusercontent.com/pw/AIL4fc8MwoXSymAovYFEIwE7QPBaJmtyWhFm35qtOF6ahRvlaJUTQvvrVZmm1ZURJO6YUyBvIqK7RbDxoWmdzQZbSV7U6S7GIXPpZoqvivYORRDYnpVxNpZM0m4LFb28FD0IemGAT5H6UWGLt50UJ0xunCr9x9FaTXpA5kE_r2d9fzdDvBNwjckWyoiI_BnVH1XFbDofw6V2601Jjd73YoIM1Tc04lx8zwSmzDSLWo4iX7EclZNk0JD5QdV6F3xJKEuTm6fIThCRNVQf3jZBUiPUea02qMrQwJsqw8v6qclwXlX_Rfu-ITGQ26irjLPDCVnzrHR4OmfxODxskFZBPjfSU7fhMYqblQegZZFpVJHE74yLGtKru53KpeH6peTaghJUQkZ0DcLqWxC4IZlYVEHub4U8TDv3MmTK9qFbIJmjz5bauc_0LbRq9Ag3N78R_A2nm_rDT-TQFoevdB9MQXHCKpdR7FTKj6uupgdTbhDHBngpYPcnx7Lr-YcWY11t52vzuwlUtwfJ0gxWjEZGXAQhSQRlTSyIf_YVJgIC3_Ev9CVQFAztb9mK20GcrBmWvDA7ka3Gb8K4WtnDagePwhyRqLxfjpzGH348ZwNGZt8rLkziHuj3EEOHrvyXdHVdIhBGv2LbWczuRDV5cIlldb-TXV7iqau57RwwkqqvHhtZX-NUnFZ9OyCll4Xt7yC5zl93-HAnqbCGKPtzo8OQZzv23cVH5ExdsauL9UStUoi8bCK90GTYRd1kN94t9NnxILLjp7vIs2MskssK55czDGToLUeaZWmWU6BBmjHs5eCbUg4A4ni8-_WXdrD_4rz4mU3GsY8T7-fwtZk30GpvZP-ZXTej1x-8_crBCT0FXYs9M7aJFthOc1AQmzqn1hJLlZZyVxB0O-YSN4S98DvYWoYt3fnKewkz1iiSZ6VE4N41e6ZAr6bsKBqYf4jrV7VPpq59z8kXYSOGkblCh8UglE6yVUg1GVVdCyzwIQ=w2846-h629-s-no?authuser=0" alt="Company banner" />
      </div>
      <div className="era-margins">
        <div>
          <Link className="era-linkback" to={"/empresas-region-andina"}>
            <ArrowBack />
            Regresar a la página anterior
          </Link>
        </div>
      <div>
        <h1>China Harbour Engineering Company <span className="era-title-initials ">(CHEC)</span></h1>
        <span>公司:</span> <span className="era-title-chinese">中國港灣工程有限責任公司</span>
        <Link className="era-links" url="http://www.chec.bj.cn/pub/chec_pc/en/sy/"> www.chec.bj.cn/pub/chec_pc/en/sy/</Link>
      </div>
      <div>
        <div>
          <p>
            <span className="era-company-description">Tipo:</span> Pública. <span className="era-company-description">Social Credit Code:</span> 91110000710933796P.
            <span className="era-company-description">Ubicación:</span> No. 9 Chunxiu Road, Dongcheng District. Beijing, China.
          </p>
          <p>
            Ofrece servicios en ingeniería. Diseña, desarrolla y opera obras de infraestructura en diferentes áreas, tanto en el sector público como privado. Es una filial de la empresa matriz China Communications Construction Company LTD (CCCC). 
          </p>
        </div>
        <div>
          <span className="era-company-description">Países en los que tiene Presencia: </span>
          <span>#02</span>
        </div>
        <div className="era-countries-container">
          <img className="era-countries-icon-container" src="https://lh3.googleusercontent.com/pw/AIL4fc-S-l4m135GCv3vi30ZvHxixS8XQ5UuckRUbMKLN8R_iNe-uwA87XPr0RO0ofBxOl5o_NmPPhhUmMCmh4l_m5KNu6LqZntd-PyuhI_YUoWpkp5bOGMYmqQaoVfDickqGv_Iu3aPc1H5gvbUCr2bc31a9jjg5RHjd2Nqas07MJR1K42u2Z0EkuqbKDdMxi-SdXLmc87X4xWWICRqLV-yAhtDLKDXvpI0nT5u55Dzd7hpAvmqRW6F7C81ANN7JImnaQKIr2raTxPLEry3ccU-TnzKbLWvtLIbLoZcI_nK7GdY8zpkNUpBpmHMbPIveHXUTe8kEXMIH9auz0McDeqGAlpBUmlP5zRRusW127kHrHAK3dSNlGmjfp9iBfQ9CWbS3OB19cuK80j0Vql8gAqe5h7sn9TuYdKRxlopoFP2-xqnvqSFPzKWXOaVG1NkhSeQPJixsbIgkGKn01qsPBFiE-LQ6LVRw9UsyJfnKK-oUXtbaAg7gUDFtl_3e2YQab59qfJkgqE_nQ1YiPooS-1sbC2IwKji1yspsoyUMZeEJnidjdvDdUIX_49cL8Yomon5dHbwhvPc7gAG5lNRl4DTvqgjZjB8wMG431G4-ZlQIAGnVZV-ct7aTr9w-BPmu8zhMkaWKvIL7zooUPjUexMrP_I498tJEIZNSfSJIZS7m_WUujcC6A9_x41RptnvUfoALi_qnjSNFZKAHvUvl6agDkHRKMQ02ko-K7hWWknQ_E-cMvfSZUu1X2Ax8QCDnEv_BuZwUOyOf7Rv8bFlFHLGW_JPduMbQXZ-0TVmx078xJ_OtS1Mx-QP34OEHi07zPVavyq7xX4E5D_icNiX8XJ1UuVLZyQFdURXAIit5SMxOBc3os5mh-PBVx434WFU-iUR3iug8poblmUWrBN4z678geEN7ZgDAfRUcXISV7LGBabXpcjBNPcqGSrWdSTKD8tvMX5PByllO9n6wjzAnzou3XDySrIxlQV98w=s250-k-no" alt="country flag" />
          <p>
            <span className="era-country-description">BOLIVIA. Participación:</span> Proyectos - Inversión Directa Extranjera.
            <span className="era-country-description"> Subsidiarias:</span> China Harbour Engineering Company Ltd. Bolivia.
            <span className="era-country-description"> Número de Intificación Fiscal:</span> NIT:310214029.
            <span className="era-country-description"> Año de Registro:</span> N/D.
            <span className="era-country-description"> Inicio de Operaciones:</span> 2016 - Presente.
          </p>
        </div>
        <div className="era-countries-container">
          <img className="era-countries-icon-container" src="https://lh3.googleusercontent.com/pw/AIL4fc9b4noULVFHChzpZT26q0IQsV7sd68r2nbb8Rx_ipKqo2EnGryY1wfJvgrczrcEYj_Yw20dVxjhSG-oDvXZvjWGQPNpWCtApSLhVxyODTE8utTFIRO4p-9Piqqb8V5b_uDFovScxE5Im58FOrddSawaqATf9PUutIl6jm8Ht6ZRSVjxwRQ-y9frzf8GL3RMM_l7cCP4qIGFh2a96AxgOPRhv2zHolBrPNrDkDiAR1ddM1WtW00BjXy8Wvox2gcEtA68EPcUx9W4BoBLUc_bXy5T_hQN7bvOjbtT6Qe6bLJlp6dGlz-8BrBYlTC1ciXRsRVWPqT1VmV92A0t7YuUVXwuqRFHNxflQWSO-GLKpMQUrNHcGoLS24dZh-6JVhAP49xAumCUkadm-q0vtyX18R-VyLaO8JqNRkBW1siukrqEn3KyhRdJOkVm2t-kTLXZsNe878Rcg7sXVFOvUcR3CizPsiKL5woVWnayWyLjM5gmC0uaGD8zgCNWMFyPxcyMg8iXX0zxpbuTer6ytS4352DeLKqtcgS3CXb1vdWIvfCU1S908rustAsWH51pdhRyuTg21ycOn0uHL0GUbiCpx1CD33dRSLO17-45Z-J-e5ZjL75XarBv3eAoLStbAjWgPhwbmEQ6ulyotWzycXTB7zPgWwbkrLoS1wRoUuHiiiftuAlNufE2Lwnzba5gLNc2URmOTaS2alzB-IzZQtDuBTCg3dkWZszAWVbY8nWq9C9NZ4XILCyu_CTVB0L_DfEc6yRDQNbNFhiAfXkL0e9GrYXCZAAP9WXvIPCVbHAQAZHJ5USqHYNa7UcZwLXRs8gry9XkuASlAoKZJ-RScFN-evDwsGLblSsQHcQFn8_UigoIwohnXYrJP9fVOGIurAlB-eFENuMECgNGRut5bbJKNrVPmCRqKxZMP6HoPBCFDdp4vrhem5wUMtBIm6gMXhLYnG2RG4Q7H9m1Oa4CVhwbJj43IkUgwl8E5Q=w203-h203-s-no?authuser=0" alt="country flag" />
          <p>
            <span className="era-country-description">COLOMBIA.</span> Participación: Proyectos - Inversión Directa Extranjera.
            <span className="era-country-description"> Subsidiarias:</span> China Harbour Engineering Company Limited Colombia.
            <span className="era-country-description"> Número de Intificación Fiscal:</span> NIT:9003676823.
            <span className="era-country-description"> Año de Registro:</span> 2010.
            <span className="era-country-description"> Inicio de Operaciones:</span> 2015 - Presente.
          </p>
        </div>
        <div className="era-sector-container">
          <span className="era-country-description">Sectores: </span> Transporte <span className="era-sector-icon"><LocalShipping /></span>
        </div>
      </div>
      </div>
    </section>
  );
}
