import { ISidebarItemProps } from '@/src/utils/interfaces'
import { useEffect, useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Link from './Link'
import { useParams } from 'next/navigation'
import { getLocalizedUrl } from '@/src/utils/i18n'

interface SubMenuItemProps extends Omit<ISidebarItemProps, 'expanded'> {
  expanded?: never
  subMenu?: never
}

function HoveredSubMenuItem({ icon, text, active }: SubMenuItemProps) {
  return (
    <div
      className={`my-2 rounded-md p-2 ${
        active ? 'bg-gray-300' : ' hover:bg-indigo-50'
      }`}
    >
      <div className='flex items-center justify-center '>
        <span className='text-primary -500  '>{icon}</span>
        <span className='text-primary -500 ml-3 w-28 text-start'>{text}</span>
        <div className='bg-primary-200 h-1' />
      </div>
    </div>
  )
}

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
  useEffect(() => {
    if (!expanded) {
      setExpandSubMenu(false)
    }
  }, [expanded])

  // Calculate the height of the sub-menu assuming each item is 40px tall
  const subMenuHeight = expandSubMenu
    ? `${((subMenu?.length || 0) * 40 + (subMenu! && 15)).toString()}px`
    : 0
  console.log(path)

  return (
    <>
      <li>
        <Link
          href={subMenu ? '#' : getLocalizedUrl(path ?? '#', locale as string)}
          className={`
         group relative my-1 flex w-full cursor-pointer
         items-center px-3
         py-2 font-medium transition-colors
         ${
           active && !subMenu
             ? 'border-l-4 border-secondary from-indigo-200 to-indigo-100 text-secondary'
             : 'border-l-4 border-transparent text-primary  hover:bg-indigo-50'
         }
         ${!expanded && 'hidden sm:flex'}
     `}
          onClick={() => setExpandSubMenu(curr => expanded && !curr)}
        >
          <span>{icon}</span>

          <span
            className={`overflow-hidden text-start transition-all  ${
              expanded ? 'ml-3 w-44' : 'w-0'
            }`}
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

          {/* 
            display item text or sub-menu items when hovered
          */}
          {!expanded && (
            <div
              className={`
            text-primary -500 invisible absolute left-full ml-6 -translate-x-3
            rounded-md bg-indigo-100 px-2
            py-1 text-sm opacity-20 transition-all
            group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
        `}
            >
              {/* 
                if hovered item has no sub-menu, display the text
                else display the sub-menu items
              */}
              {!subMenu
                ? text
                : subMenu.map((item, index) => (
                    <HoveredSubMenuItem
                      key={index}
                      text={item.text}
                      icon={item.icon}
                    />
                  ))}
            </div>
          )}
        </Link>
      </li>
      <ul className='sub-menu pl-6' style={{ height: subMenuHeight }}>
        {/* 
          Render the sub-menu items if the item has a sub-menu
          The sub-menu items are rendered as SidebarItem components
        */}
        {expanded &&
          subMenu?.map((item, index) => (
            <SidebarItem key={index} {...item} expanded={expanded} />
          ))}
      </ul>
    </>
  )
}
