'use client'

import Breadcrumb from '@/src/components/Breadcrumbs'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import DiagnosticsTableWrapper from '@/src/views/diagnostics/DiagnosticsTableWrapper'
import { useParams } from 'next/navigation'

export default function DiagnosticsIndexPage() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  return (
    <div className='container'>
      <Breadcrumb breadcrumbs={[{ label: t('Diagnostika') }]} />
      <DiagnosticsTableWrapper />
    </div>
  )
}
