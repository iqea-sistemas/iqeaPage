import React from "react";
import { FORM_ROUTER } from "@/services/routers";
import CallToActionBanner from "@/components/CallToActionBanner";
import "./Cotiza.scss";
import Link from "next/link";
import ButtonStyle from "@/components/ButtonStyle";
import initTranslations from "../../i18n";

export default async function page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["cotiza"]);

  return (
    <section className="cotizaPage">
      <div className="cotizaPageTitle">
        <h1>{t('CotizaTitle')}</h1>
        <p>{t('CotizaSubTitle')}</p>
      </div>


      <div className="formGroups">
      {FORM_ROUTER.length > 0
        ? FORM_ROUTER.map((element) => {
            return (
              <article key={element.id} className="formLink">
                <h3>{element.title}</h3>
                <Link href={`cotiza/${element.slug}`} className="link" > {t('CotizaBtn')}</Link>
              </article>
            );
          })
        : null}

      </div>


      <CallToActionBanner />
    </section>
  );
}
