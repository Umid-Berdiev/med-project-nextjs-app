import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import Button from '../Button'

export default function AppFilterDropdown({
  children,
  filterHandler,
  clearHandler
}: {
  children: React.ReactNode
  filterHandler: () => void
  clearHandler: () => void
}) {
  const { locale, id } = useParams()
  const { t } = useTranslations(locale as Locale)

  return (
    <div className='dropdown dropdown-end ml-auto'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-link btn-sm text-textDark no-underline hover:text-secondary hover:no-underline'
      >
        <span className='border-b border-dashed border-secondary'>
          {t('Filtr')}
        </span>
      </div>
      <div
        tabIndex={0}
        className='dropdown-content z-[1] w-[520px] rounded-2xl bg-base-100 p-5 shadow'
      >
        {children}
        <div className='mt-6 flex justify-end gap-4'>
          <Button
            color='secondary'
            variant='outlined'
            type='button'
            onClick={clearHandler}
          >
            {t('Tozalash')}
          </Button>
          <Button type='button' onClick={filterHandler}>
            {t('Filterlash')}
          </Button>
        </div>
      </div>
    </div>
  )
}
