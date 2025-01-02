import { getLocalizedUrl } from '@/src/utils/i18n'
import { ISidebarItemProps } from '@/src/utils/interfaces'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Link from './Link'

export default function SidebarItem({
  icon,
  active = false,
  text,
  path,
  expanded = false,
  subMenu = null
}: ISidebarItemProps) {
  const { locale } = useParams()
  const [expandSubMenu, setExpandSubMenu] = useState(false)
  const pathname = usePathname()
  const currentPath = pathname.startsWith(`/${locale}`)
    ? pathname.replace(`/${locale}`, '')
    : pathname

  // Calculate the height of the sub-menu assuming each item is 42px tall
  const subMenuHeight = expandSubMenu
    ? `${((subMenu?.length || 0) * 44 + (subMenu! && 15)).toString()}px`
    : 0

  useEffect(() => {
    if (!expanded) {
      setExpandSubMenu(false)
    }
  }, [expanded])

  return (
    <>
      <li>
        <Link
          href={subMenu ? '#' : getLocalizedUrl(path ?? '#', locale as string)}
          className={`
              group relative flex w-full cursor-pointer
              items-center p-3 font-medium transition-colors
              ${
                active
                  ? 'border-l-4 border-secondary from-indigo-200 to-indigo-100 text-secondary'
                  : 'border-l-4 border-transparent text-primary hover:bg-indigo-50'
              }
              ${!expanded && 'hidden justify-center sm:flex'}
          `}
          onClick={() => setExpandSubMenu(curr => expanded && !curr)}
        >
          <span>{icon}</span>

          <span
            className={`overflow-hidden text-start transition-all ${expanded ? 'ml-3 w-44' : 'w-0'}`}
          >
            {text}
          </span>
          {subMenu && (
            <div
              className={`absolute right-2 h-4 w-4${expanded ? '' : 'top-2'} transition-all ${expandSubMenu ? 'rotate-90' : 'rotate-0'}`}
            >
              <BiChevronRight />
            </div>
          )}
        </Link>
      </li>
      {expanded && subMenu && (
        <ul
          className={`sub-menu overflow-hidden pl-6 transition-all`}
          style={{ height: subMenuHeight }}
        >
          {subMenu?.map((item, index) => (
            <SidebarItem
              key={index}
              {...item}
              expanded={expanded}
              active={currentPath === item.path}
            />
          ))}
        </ul>
      )}
    </>
  )
}
