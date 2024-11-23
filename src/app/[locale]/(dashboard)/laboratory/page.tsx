'use client'

import Breadcrumb from '@/src/components/Breadcrumbs'
import Button from '@/src/components/Button'
import TableHeader from '@/src/components/table/TableHeader'
import LaboratoryTable from '@/src/views/laboratory/LaboratoryTable'
import PatientsTable from '@/src/views/patients/PatientsTable'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { FaFileAlt } from 'react-icons/fa'

export default function LaboratoryIndexPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = useTranslations()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <div className='container p-4'>
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
                className='rounded-none border-b border-dashed border-secondary'
              >
                {t('Filtr')}
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