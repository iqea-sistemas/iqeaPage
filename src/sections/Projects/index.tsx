
import React from "react";
import "./Projects.scss";

import ButtonStyle from "@/components/ButtonStyle";
import Link from "next/link";
import "swiper/css";
import {useTranslations} from 'next-intl';
import { cookies } from "next/headers";
import ProjectSlider from "./ProjectSlider";


export default function Projects({ projectsData }: any) {
  const cookieStore = cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value
  const t = useTranslations('Home');

  // const getCookieValue = (name:string) => {
  //   if (typeof document !== 'undefined') {
  //     const cookies = document.cookie.split(';');
  //     for (let i = 0; i < cookies.length; i++) {
  //       const cookie = cookies[i].trim();
  //       // Si la cookie comienza con el nombre buscado, devuelve su valor
  //       if (cookie.startsWith(`${name}=`)) {
  //         return cookie.substring(name.length + 1);
  //       }
  //     }
  //   }
  //   return ''; // Si no se encuentra la cookie, devuelve una cadena vacía
  // };
  // const locale = getCookieValue('NEXT_LOCALE')

  // console.log(locale)

  return (
    <section className="projectsIqea">
      <div className="projectsAccent">
        <div className="headerProjects centerDiv">
          <h2>{t('ProjectsTitle')}</h2>
          <p>{t('ProjectsContent')}</p>
        </div>

        <ProjectSlider data={projectsData} />

        <ButtonStyle>
          <Link
            href={locale+"/proyectos"}
            style={{ maxWidth: "200px", margin: "30px 0" }}
          >
          {t('ProjectsBtn')}
          </Link>
        </ButtonStyle>
      </div>
    </section>
  );
}
