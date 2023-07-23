import React from "react";
import "../../styles/Global.css"
import "../../styles/ProjectStyles.css"
import { Link } from "react-router-dom";
import { ArrowBack, LocalShipping } from "@mui/icons-material";
export function ProjectTitle() {
  return (
    <section>
     <img className="era-banner-img" src="https://lh3.googleusercontent.com/pw/AIL4fc9OPEExLFhZaD8AlmG5rnNgeKYZyh1AySgdmRNRFKAQmr5Y-gj3IjXZMumxL8WZYA5tX01EPSMbJ_QzC1CgUtHhVQftWxEMMDiHjM4BMTpIUmtwjcxAux1Z-s018-Mjpcnhic-lXQ0l-b2YYWvG9xLmSHVF8Egsad3ANblHFN3HdfaXnq-7M7cYhmftRh_8T5H1LN4aHD9EBVL758kL66zS56fOSVEqN6c9T6He1Dibvb0wPfbtgaUQrQ7gLNY032NIMVRFkTsU1nhnW217Nn-gRzZJG51DYXr47h8wLbnMX7GnpgZ1BxdBQ70Zr2xPu01Q5F-hVcxaTB-HmLd8_xpJt8_mEvLIB2aQ7tD0yz9Sk32fN5Y_sZUV9fEY8ekvTRzemqqORr1crgmvE6K3Xf4vbd6-WzmAHKm-NDeJSRmrrReKeTZGzoPc3UKPKR_P1nBgTOdTK_X-YgpnUs9QLZw6c8v9yr8PbcXToa1NSPfi1frXt_0Igdokb8IGa5swAbaxVIQuldRbupms45nc2j3THfkkplJscFl9iOLG-gdLIQSkN3KXNrk7wheFFyGTgHTmfrGQJxjxBrobKjG-pUhGI5MVZ1B8VeVxRZxuhhOU5hT6GkHEgE-nC3uHASWCeH35qlMLiWtJsr7Mdl_gioD67K3URaYpc1bY_o02j64pj4jWWIpCL9DjUmU7DaXTIbsvOyI-T_XVthtpy4S1VNhPHQddsdKdknZjhv5uoun4sk_pp2pGVWI5TGQ_NXRyrjq1lTHIBaYf_7s6JQvmYE8xYrfR2nlhlV8bpmvmjfcOVIMEUxqUBFCYbxk5lcTom8HuxM4KjcJz09KrV5DxHVkl5ITYvA9A-698a1O0mPpLkwwCSz_t6xY5H0IMXAls_VUyAuhE5IkR7HJ7tympw-sEB-ifZAmIlecBZu8hAxySbz1UbnQa86PWn9330bPbnPYebq2_Ats_YAcbSTakWD50ZNOz6OOCQA=w2846-h630-s-no?authuser=0" alt="Project banner" />
      <div className="era-margins">
        <div>
            <Link className="era-link-back" to={"/empresas-region-andina"}>
              <ArrowBack /> Regresar a la página anterior
            </Link>
          </div>
        <div>
          <h1>Carretera San Borja - San Ignacio de Moxos</h1>
          <p>
            Este proyecto hace referencia a la construcción de una carretera
            ubicada en la provincia de Beni y forma parte de la Vía Nacional NO.3
            de Bolivia. Cuenta con una longitud total de 140,78 kilómetros
          </p>
          <div style={{display: "flex", alignItems: "center"}}>
            Ubicación / País: <span className="era-project-description"> Beni, BOLIVIA.</span>
            <Link className="era-links" to={"/empresas-region-andina/country"}>
              Ver perfil del país <img className="era-flag-icon" src="https://lh3.googleusercontent.com/pw/AIL4fc-i0zlo8UMtaF4fU7CUN9qnj8I5CmvTxouYT-2QnK3KbhQQ-C7hp226aQJSk8MhJOvaaXUVDLAWXGviuJSLe98CAJPPsM_uwtXZw3g-5swZbrkuw0uKK-7gFZFHejIt9RbfttUJmFvheIuQnUKf3lty3Bkkt7oz1rXmfQGxukIRTTUDaTmk_X3nxz4-_y9NWiAjOiIiCfyXLpaDZObXbPP41Oe2FtGHgba9fnmCBo5Q4LxQ_gri7MLwjNUf67Y-QhkvatSeNEbQpUXwqo-ha_PTr8Vt05-IcbmKl2NcQrNTQET4JxDvCYaE2xTAhnlMfl218xQwrujwd9NPjOD6aOXyWfUDp9pr_dkG0XeTsiGBwn4TGhFRVonFlYs4UlJD3DcUGyxbXkUEelNKzvyP0XwsBpOhJAYwtI9VhHh67Gd1TLPhP97z6qhRXqz39H0xHTZ-9SV1253AqHTcO69GiOti6U8pNRzq-w4wY0fZSN0QTtsn9nza0pjklc0CPRZLCtW6PvI5RU3uWJrDpa2Uyp-2bP4cm-sXq_L_Z-mQRUF9vdyJ5iYSx8Q0Ic8To3CiJepxbp87uO9F7Sj0USMTgZLXVUTQDla5c16LOfOetBFamaL1reCU-iq7gvJG4MpdQ7kTX6loFO5PYNfYsLmwL0DrJSDkKTDJrVtOI6qZXM65Ygh5syrzdi_8bGvM59JTRh6GMELrjarqwLsFYv4tdysdPLl3MNKVwwS2SFj2Vn-DBLUnklweJfFOE78t22SxrRic8vxXflVXqXwCvvIKfV0QoCI4f0-0vWCpi1CqJ1WCvr3NIUJ21RvVlwkK0mhTt53vM8iaSaLu7l8Z-fq4Hi2uM7JLpfpetbduBtnm08WlynMmf2n1SFsom86CeQ9yMrGv146NLPjaWfUsZkYI602Ax52aM-jJCKFF9Q9vJ9dUxnZuOzw_VKMr5uViRCRH16eXux7dCFQS4lvI40gYD1fxSvgyaa_VtA=w203-h202-s-no?authuser=0" alt="Flag" />
            </Link>
          </div>
          <div className="era-sector-container">
            <span>
              Sectores:
            </span>
            <span className="era-sector-description">
              Transporte
            </span>
            <span className="era-sector-icon">
              < LocalShipping />
            </span>
          </div>
        </div>
      </div> 
    </section>
  );
}
