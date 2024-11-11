import { useTranslations } from 'next-intl'
import AppInput from '../forms/AppInput'
import Button from '../Button'

export default function AppNavbar({ locale }: { locale: string }) {
  const t = useTranslations('')

  return (
    <div className='navbar p-4 gap-2'>
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
            <div className="flex items-center space-x-4">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="" alt="User Avatar" />
                </div>
              </div>
              <div>
              <p className='text-sm font-semibold'>Shakhzod Ismoilov Design</p>
              <p className='text-xs opacity-50'>Administrator</p>
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
