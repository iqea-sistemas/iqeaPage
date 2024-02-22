import Link from 'next/link'
import React from 'react'
import './CallToActionBanner.scss'
import {useTranslations} from 'next-intl';
import { cookies } from "next/headers";


export default function CallToActionBanner() {
  const cookieStore = cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value

  const t = useTranslations('CallToAction');
  return (
    <div className="callToAction">
      <Link href={`${locale}/contacto`}>
          {t('Contactanos')}
        </Link>
        <Link href={locale+'/cotiza/'}>
        {t('Cotiza')}
        </Link>

      </div>
  )
}
