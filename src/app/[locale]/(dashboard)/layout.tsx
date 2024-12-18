import VerticalLayout from '@/src/@layouts/VerticalLayout'
import { Providers } from '@/src/components/Provider'
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
    <Providers>
      <VerticalLayout params={params}>
        <div className='sm:p-4'>{children}</div>
      </VerticalLayout>
    </Providers>
  )
}
