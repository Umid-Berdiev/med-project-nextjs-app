'use client'

import AppNavbar from '@/src/components/globals/AppNavbar'
import { useTranslations } from '@/src/configs/t'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { Locale } from '../configs/i18n'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const { t } = useTranslations(locale as Locale)
  const pathname = usePathname()
  const isHomePage = pathname === `/${locale}`

  return (
    <header className={`bg-white bg-cover bg-no-repeat `}>
      <div className='container flex flex-row items-center justify-between text-contentPrimary'>
        <AppNavbar locale={locale} />
      </div>
    </header>
  )
}
