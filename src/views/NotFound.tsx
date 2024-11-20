'use client'

// Next Imports
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Button from '../components/Button'
import { Locale } from '../configs/i18n'

const NotFound = ({ locale }: { locale: Locale }) => {
  const t = useTranslations()

  return (
    <div className='relative flex h-full items-center justify-center overflow-x-hidden p-6'>
      <div className='flex flex-col items-center text-center'>
        <div className='is-[90vw] sm:is-[unset] my-8 flex flex-col gap-2'>
          <div className='text-8xl font-medium text-primary'>404</div>
          <div className=' text-lg'>{t('Sahifa topilmadi')} ⚠️</div>
        </div>

        <Button>
          <Link href={`/${locale}/home`}>{t('Bosh sahifaga qaytish')}</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound
