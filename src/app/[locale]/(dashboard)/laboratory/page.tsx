'use client'

import Breadcrumb from '@/src/components/Breadcrumbs'
import Button from '@/src/components/Button'
import TableHeader from '@/src/components/table/TableHeader'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import LaboratoryTable from '@/src/views/laboratory/LaboratoryTable'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaFileAlt } from 'react-icons/fa'

export default function LaboratoryIndexPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const { t } = useTranslations(locale as Locale)
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <div className='container'>
      <Breadcrumb breadcrumbs={[{ label: t('Labaratoriya') }]} />
      <section>
        <TableHeader
          title={t('Labaratoriya')}
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
            </>
          }
        />
      </section>
      <LaboratoryTable />
    </div>
  )
}
