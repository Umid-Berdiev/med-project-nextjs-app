import VerticalLayout from '@/src/@layouts/VerticalLayout'
import { Locale } from '@/src/configs/i18n'
import React from 'react'

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}) {
  return (
    <>
      <VerticalLayout params={params}>{children}</VerticalLayout>
    </>
  )
}
