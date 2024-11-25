import { Link, locations } from '@/src/navigation'
import { useTranslations } from '@/src/configs/t'
import { usePathname } from 'next/navigation'
import { Locale } from '@/src/configs/i18n'

export default function AppMainMenu({
  locale,
  mode = 'light'
}: {
  mode?: 'light' | 'dark'
  locale: string
}) {
  const { t } = useTranslations(locale as Locale)
  const pathname = usePathname()

  const setClasses = (path: string) => {
    let isActive = false

    if (path === '/' && pathname === `/${locale}`) isActive = true
    else if (pathname.includes(path) && path !== `/`) isActive = true

    if (isActive) {
      return `${mode === 'light' ? 'text-mainRed' : 'text-white'}`
    } else {
      return `${mode === 'light' ? 'text-contentPrimary hover:text-mainRed' : 'text-gray-300 hover:text-white'}`
    }
  }

  return (
    <ul className='menu-horizontal gap-x-6 font-semibold'>
      {locations.map(location => (
        <li key={location.name}>
          <Link
            className={setClasses(location.path)}
            lang={locale}
            href={location.path}
          >
            {location.children.length > 0 ? (
              <details>
                <summary>{t(location.label)}</summary>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            ) : (
              t(location.label)
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
