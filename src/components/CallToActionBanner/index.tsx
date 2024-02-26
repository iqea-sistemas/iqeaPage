'use client'
import Link from 'next/link'
import React from 'react'
import './CallToActionBanner.scss'
import { useTranslation } from "react-i18next";

export default function CallToActionBanner() {
  const {t}=useTranslation()

  return (
    <div className="callToAction">
      <Link href={'/contacto'}>
      {t('common:CTAContactanos')}
        </Link>
        <Link href={'/cotiza/biological-treatment-background'}>
        {t('common:CTACotiza')}
        </Link>

      </div>
  )
}
