'use client'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useTransition } from 'react'
import { useLocale } from 'use-intl'
import './LocaleSwitch.scss'
import { usePathname } from 'next/navigation'


export default function LocaleSwitch() {
  const [isPending, startTransition]=useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const localActive = useLocale()


  const onSelectChange =(event:ChangeEvent<HTMLSelectElement>)=>{
    const nextLocale=event.target.value
    startTransition(()=>{
      router.replace(`/${nextLocale}`)

      // const newPathname = pathname.replace(/^\/[a-zA-Z]{2}/, nextLocale); // Reemplazar cualquier patrón de dos letras con '/tu-valor'
      // console.log(newPathname)
      // router.push(newPathname);
    })
  }
  return (
    <>

      <select className='languageSelect' defaultValue={localActive} onChange={onSelectChange} disabled={isPending}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </>
  )
}
