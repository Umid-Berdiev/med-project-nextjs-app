import AppInput from '@/src/components/forms/AppInput'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function FilterPatients() {
  const t = useTranslations('')
  return (
    <div className='my-2 flex items-center gap-2'>
      <AppInput isSearch placeholder={t('Bemor IDsi')} />
      <AppInput isSearch placeholder={t('F.I.SH')} />
      <AppInput isSearch placeholder={t('Telefon raqami')} />
    </div>
  )
}
