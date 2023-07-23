import React from "react"; 
import "../../styles/CountryStyles.css"
import "../../styles/Global.css"
import { Link } from "react-router-dom";
import { ArrowBack, LocalShipping } from "@mui/icons-material";
export function CountryTitle() {
  return (
    <section>
      <div>
        <img className="era-banner-img" src="https://lh3.googleusercontent.com/pw/AIL4fc-C0K892xakj7IUh_WkLr1yL6HF-NkqYhn9q0AkxntNl9RUaWcw-BwhArX7OrjHWcvMHphyCpW7CKP3-yTVcaJdOIP3EtRYX-nAY6VRR7tK7FHaAiVJkb5Pq-Bw3fNfl-kMnjnsvrfOexlVByYUssvi-p-Ya5HahQc8WGbAFpQU3K-FV5X6wxWvwdhulSsvvlBxW465mDXhXuYvmn0jtXYGS9EaFZI1LSs3CQjFCvgf89G5Do5DaO97TzFDmhBDuPCLD5-1bN7sslDFF2iy9z1c3M1lZTQa4_TbL3BrOPjfzt4lHBdKjOsk4SLov5sPBhdgjqDOEvD-aAf2GnCuy6JwZrM31gUZd2VA5KPi6uPdDfXnrdBujv_CX-cTPH6-fUt0t1TdKNmE4z2Jxi3DOvRTmAfKQQ2579MAJxP9ByilXVhrsMzWjOAtAQ-WyYKsIry5FjcPmWNw1mvkWX3_f5S5fUqI8R0Ax6TZwjlPZ55jrTObwtsm7I7gdaZAIIGY2wXky1qgRPaj2I8y4xMaBRklfJUB9_-LbqCs7Yu9lLzSm0WqtnSKwS-bo_cJGfmd_8r5aXx7piogbFP-3u4xCpuLWaFp4-lGk1xLszgG6w6MZ4ErvjSfsFVtv8qAFD576Ey7VmhD2jcN_eLMUoPcIZ7tKt9hzgaqjC34x_7-dVQHBhdzqo_Q1mGJmrzFg2Pfryzqju0YgtSy9apGMI-wd-E3eM4YyCtNrh5OvBlU6YZGmT_pOJIIfHGPj-0OZOZUy9XlJG5N7QgJS76pS-_pym5f5YceiyfBO089skyAI7kzKNwNFRSXUkkN3yC_KQfYPtwJTO1QLCdwabUNjp1U52OVxFUyOnhiS5dqg7J_xgZ917ALzVtHFAiEKchfKxIy1sOf8JONmi2g-eSlBbvoeDy8eal1g_byXcWJTQjCFcckgim5BGE06Wms3rZmj-RFk8RiKFL3X9xwk2I4JC_88C3249dGWDnzgA=w2846-h629-s-no?authuser=0" alt="Country banner" />
      </div>
      <div className="era-margins">
          <Link to={"/empresas-region-andina"} className="era-link-back">
            <ArrowBack />
            Regresar a la página anterior
          </Link> 
      <div className="era-title-container" >
        <h1>Colombia</h1>
        <img className="era-title-flag" src="https://lh3.googleusercontent.com/pw/AIL4fc_wBJVScZrffadCRXIx6P-alqZu55JdccS5bI6JHGqNT9XkYC3LS86_7t2aF-cAxgFb_zXUrbqJbAJf3Yzo3ojX2r_7Zi1iQ80V-MKRZBE0YS4QD7iasptT4jwa7DfuIZKZyXgWFJqxS1m6_Mwj58GaqERJgjPcf-Gb89dKLjSxwM9CRqzfHP23kqLA8U0Sp8QW5IeeRga2JXi9UKcarWtl5LbfHcafveKUhRUyp7tT2ysV2XSVKxa0nFeh0ZzbbA_HEsxqtfr0_9MBHy9HfkNXtDBoXhdSsWzNRlqRDOZVLfAkK2iecMibsknWmk9Tt23XzZ890zgVgHx2O3qqr660iBE5OgGZopduUgiZF8zCPpyz7wGPYka7vqdOdcZS79cjaaRj1ALUZm7oztaFfXM6IoqFZtRevzPmmNcM9iI6eozCksKw-qzETptF7Zt6kzMDJymEEhx98M8yaeW6I5e_hrynQq2gQw_eL2FJuXah69Xhei9rXyH2jzjyOFsGJ0UgtlS6futLFiihfJwTPwLfxtbVHgCwUcWSsRKIfACEu3W04waxuKGYALiIMgZ-OajmohiX4gTUkhMjK1SZ57JwEGI5rdiKoYaQH6MHPvkVXnXNFBvx3IcczbK1En-Q_8SJ3KLdUwjLEybMFR4ONfMCEnR_ZxxcJ7vGk5NMv4LjQcjDizUltAapD0N-v6dkOywL4jgD8Gl5ZtlvEvDizEu5ZvJdyTkzsdTE6Z7aXfA3B-4t_iz3PPBRUh5z528ofadQ9vtuiY943RH1m937xnwQ8BhNDrnNu6TqKZ_lVyJNGoThmDp3jO9M3UVUpxEk-6F8pZgXMg5a_1LDN7ZYOFceSUDWwlBJLJnw-Nnps1P4LJy3fdHdhecHqFpk5LDyo2PmAWrRjZnRYtFVQdNHzr_owg47ehmQiJtMpyyhvjbjv-AM447JUCP2RyldYvVG-WAK0L6DWfsObEIXL5GnqbwDYmE_9MiwLQ=w203-h203-s-no?authuser=0" alt="Flag" />
      </div>
      <div>
        <div>
          <span>N° Empresas: </span>
          <span>#01</span>
        </div>
        <div className="era-sector-container">
          <span>Sectores: </span>
          <span className="era-sector-description">
            Transporte
          </span>
          <span className="era-sector-icon">
            < LocalShipping />
          </span>
        </div>
        <div>
          <span>Estatus de la relación bilateral: </span>
          <span className="era-sector-description">
            Asociación Cooperativa Integral*
          </span>
          <p className="era-sector-status">
            *La República Popular China ha desarrollado un modelo de cuatro niveles para clasificar su relación con otros países de acuerdo con el nivel de importancia y profundidad de sus relacionales bilaterales. Estos son, de menor a mayor profundidad: 1. Asociación Cooperativa; 2. Asociación Cooperativa Integral; 3. Asociación Estratégica; y, 4. Asociación Estratégica Integral. Para mayor información visita https://www.thedialogue.org/blogs/2014/08/charting-chinas-diplomatic-ties-an-infographic-from-global-times/
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elii.Lorem ipsum
          dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip.{" "}
        </p>
      </div>
      </div>  
    </section>
  );
}
