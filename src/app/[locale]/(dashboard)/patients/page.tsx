'use client'

import Breadcrumb from '@/src/components/Breadcrumbs'
import Button from '@/src/components/Button'
import TableHeader from '@/src/components/table/TableHeader'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import PatientsTable from '@/src/views/patients/PatientsTable'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { FaFileAlt } from 'react-icons/fa'

export default function PatientsIndexPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const { t } = useTranslations(locale as Locale)
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <div className='container'>
      <Breadcrumb breadcrumbs={[{ label: t('Bemorlar') }]} />
      <section>
        {/* TODO: bemorlar listi sahifasi shu yerda bo'ladi */}
        <TableHeader
          title={t('Bemorlar')}
          actions={
            <>
              <Button
                variant='text'
                color={open ? 'secondary' : 'primary'}
                onClick={() => setOpen(!open)}
                className='rounded-none'
              >
                <span className='border-b border-dashed border-secondary'>
                  {t('Filtr')}
                </span>
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                endIcon={<FaFileAlt />}
              >
                {t('Eksport')}
              </Button>
              <Button
                variant='contained'
                color='secondary'
                endIcon={<BiUserPlus size={20} />}
                onClick={() => router.push(`/${locale}/patients/add`)}
              >
                {t("Bemor qo'shish")}
              </Button>
            </>
          }
        />
      </section>
      <PatientsTable openFilter={open} />
    </div>
  )
}
