import React from 'react'
import { Header } from '../components/Header'
import TheSidebar from '../components/Sidebar'
import { Locale } from '../configs/i18n'
export default function VerticalLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}) {
  return (
    <div className='flex'>
      <TheSidebar />
      <div className='flex-grow'>
        <Header locale={params.locale} />
        {children}
      </div>
    </div>
  )
}
