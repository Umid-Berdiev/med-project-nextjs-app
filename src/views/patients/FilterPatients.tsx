import AppInput from '@/src/components/forms/AppInput'
import AppInputDate from '@/src/components/forms/AppInputDate'
import { useTranslations } from 'next-intl'
import React from 'react'
import AppSelect from '@/src/components/forms/AppSelect'
import Button from '@/src/components/Button'
import { BiFilter } from 'react-icons/bi'
import FilterIcon from '@/src/components/icons/FilterIcon'

export default function FilterPatients() {
  const t = useTranslations('')
  return (
    <div className='my-2 flex  items-center gap-2'>
      <AppInput isSearch placeholder={t('Bemor IDsi')} />
      <AppInput isSearch placeholder={t('F.I.SH')} />
      <AppInput isSearch placeholder={t('Telefon raqami')} />
      <AppInputDate mode='range' placeholder='Sana:' />
      <AppSelect
        placeholder='Ligota:'
        options={[
          {
            label: 'Barchasi',
            value: 'all'
          },
          {
            label: 'Aktiv',
            value: 'active'
          },
          {
            label: 'Bajarilgan',
            value: 'completed'
          }
        ]}
      />
      <AppSelect
        placeholder='Filial:'
        options={[
          {
            label: 'Barchasi',
            value: 'all'
          },
          {
            label: 'Aktiv',
            value: 'active'
          },
          {
            label: 'Bajarilgan',
            value: 'completed'
          }
        ]}
      />
      <Button
        variant='text'
        color='secondary'
        style={{ background: '#2324270D' }}
      >
        {t('Filterni tozalash')}
      </Button>
      <Button>
        <FilterIcon />
      </Button>
    </div>
  )
}
