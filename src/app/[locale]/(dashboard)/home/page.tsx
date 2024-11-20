'use client'

import Heading2 from '@/src/components/typography/Heading2'
import { useTranslations } from 'next-intl'

export default function DashboardPage() {
  const t = useTranslations('')

  return (
    <div className='container pb-10'>
      <section className='flex flex-col items-center justify-center py-16'>
        <Heading2>Med Control</Heading2>
        {/* <p>
          {t(
            'Med Control is a web application that allows you to manage your medical records and appointments.'
          )}
        </p> */}
      </section>
    </div>
  )
}
