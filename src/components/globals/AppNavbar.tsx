import { useTranslations } from '@/src/configs/t'
import AppInput from '../forms/AppInput'
import Button from '../Button'
import Image from 'next/image'
import { Locale } from '@/src/configs/i18n'

export default function AppNavbar({ locale }: { locale: string }) {
  const { t } = useTranslations(locale as Locale)

  return (
    <div className='navbar gap-2 p-4'>
      <div className='gap-2'>
        {/*  */}
        <Button>{t('Bemor qo’shish')}</Button>
        <div className='h-6 w-0 border-r border-[#2324271A] ' />
        <AppInput placeholder={t('Bemor IDsi')} />
        <AppInput placeholder={t('№ karta')} />
      </div>
      <div className='ml-auto flex'>
        {/* user dropdown */}
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn-ghost text-right hover:bg-transparent'
          >
            <div className='flex items-center gap-3'>
              <div>
                <p className='whitespace-nowrap text-sm font-semibold'>
                  Shakhzod Ismoilov Design
                </p>
                <p className='text-xs opacity-50'>Administrator</p>
              </div>
              <div className='avatar size-9 overflow-hidden rounded-lg'>
                <Image
                  src='/images/userAvatar.jpg' // Rasm yo'li
                  alt='Example Image'
                  width={36}
                  height={36}
                  className='size-full object-cover object-center'
                />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content z-[1] rounded-box p-2 shadow'
          >
            <li>
              <a href={`/${locale}/profile`} className='text-black'>
                {t('Profil')}
              </a>
            </li>
            <li>
              <a href={`/${locale}/logout`} className='text-black'>
                {t('Chiqish')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
