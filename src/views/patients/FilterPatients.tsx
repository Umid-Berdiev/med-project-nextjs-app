import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputDate from '@/src/components/forms/AppInputDate'
import AppSelect from '@/src/components/forms/AppSelect'
import FilterIcon from '@/src/components/icons/FilterIcon'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'

export default function FilterPatients() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)

  return (
    <div className='my-4 grid gap-4 md:grid-cols-4 lg:grid-cols-8'>
      <AppInput isSearch placeholder={t('Bemor IDsi')} />
      <AppInput isSearch placeholder={t('F.I.SH')} />
      <AppInput isSearch placeholder={t('Telefon raqami')} />
      <AppInputDate mode='range' placeholder='Sana:' />
      <AppSelect
        placeholder='Ligota:'
        options={[
          { label: 'Barchasi', value: 'all' },
          { label: 'Aktiv', value: 'active' },
          { label: 'Bajarilgan', value: 'completed' }
        ]}
      />
      <AppSelect
        placeholder='Filial:'
        options={[
          { label: 'Barchasi', value: 'all' },
          { label: 'Aktiv', value: 'active' },
          { label: 'Bajarilgan', value: 'completed' }
        ]}
      />
      <div className='flex gap-2'>
        <Button
          variant='text'
          color='secondary'
          style={{ background: '#2324270D' }}
        >
          {t('Filterni tozalash')}
        </Button>
        <div className='dropdown dropdown-left dropdown-bottom'>
          <div tabIndex={0} role='button'>
            <Button>
              <FilterIcon />
            </Button>
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content z-50 w-52 rounded-lg bg-base-100 p-2 shadow'
          >
            <li>
              <label
                className={`flex cursor-pointer items-center justify-between gap-2 text-xs`}
              >
                <span> {t('Bemor IDsi')}</span>
                <input
                  type='checkbox'
                  name='tabGroup'
                  className='checkbox checkbox-sm rounded border-secondary [--chkbg:theme(colors.secondary)] [--chkfg:white] '
                />
              </label>
            </li>
            <li>
              <label
                className={`flex cursor-pointer items-center justify-between gap-2 text-xs`}
              >
                <span> {t('Telefon raqami')}</span>
                <input
                  type='checkbox'
                  name='tabGroup'
                  className='checkbox checkbox-sm rounded border-secondary [--chkbg:theme(colors.secondary)] [--chkfg:white] '
                />
              </label>
            </li>
            <li>
              <label
                className={`flex cursor-pointer items-center justify-between gap-2 text-xs`}
              >
                <span> {t('Sana')}</span>
                <input
                  type='checkbox'
                  name='tabGroup'
                  className='checkbox checkbox-sm rounded border-secondary [--chkbg:theme(colors.secondary)] [--chkfg:white] '
                />
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
