import React from "react";
import "./AboutUs.scss";
import Image from "next/image";
import imgSample from "@/assets/samples/Sample4.jpeg";
import ButtonStyle from "@/components/ButtonStyle";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import { cookies } from 'next/headers'

export default function AboutUs() {
  const t = useTranslations('Home');
  const cookieStore = cookies()
  const localeTest = cookieStore.get('NEXT_LOCALE')?.value


  return (
    <section className="aboutUsIqea">
      <div className="content">
        <h2>{t('AboutUsTitle')}</h2>
        <p>{t('AboutUsContent')}</p>
        <ButtonStyle >
          <Link href={localeTest+'/cotiza'} >{t('AboutUsBtn')}</Link>

        </ButtonStyle>
      </div>
      <div className="carrusel  ">
        <Image src={imgSample} alt="equipo IQEA" />
      </div>
    </section>
  );
}
