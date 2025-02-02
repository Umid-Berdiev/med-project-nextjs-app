'use client'

import AppLogo from '@/src/components/icons/AppLogo'
import { ISidebarItemProps } from '@/src/utils/interfaces'
import { useParams, usePathname } from 'next/navigation'
import { useState } from 'react'
import BuildingIcon from './icons/BuildingIcon'
import DiagnosticIcon from './icons/DiagnosticIcon'
import GearIcon from './icons/GearIcon'
import ListIcon from './icons/ListIcon'
import MoneyWithCalcIcon from './icons/MoneyWithCalcIcon'
import SyringeIcon from './icons/SyringeIcon'
import UsersIcon from './icons/UsersIcon'
import UserSuitcaseIcon from './icons/UserSuitcaseIcon'
import SidebarItem from './SidebarItem'

// This sidebar component is for both mobile and desktop
function Sidebar({ children, expanded, setExpanded }: any) {
  return (
    <div className='relative z-40'>
      {/* 
        This div is used to create the background overlay when the sidebar is expanded
        It is only visible on mobile screens
      */}
      <div
        className={`fixed inset-0 -z-10 block bg-gray-400  ${expanded ? 'block sm:hidden' : 'hidden'}`}
      />
      <aside
        className={`box-border h-screen transition-all ${expanded ? 'w-5/6 sm:w-64' : 'w-0 sm:w-20'}`}
      >
        <nav className='flex h-full flex-col border-r bg-white shadow-sm'>
          <div
            className={`flex items-center p-4 pb-2 ${expanded ? 'justify-between' : 'justify-center'}`}
          >
            <div
              className={`overflow-hidden transition-all ${
                expanded ? 'w-full' : 'w-0'
              }`}
            >
              <AppLogo />
            </div>
            <div className={`${expanded ? '' : 'hidden sm:block'}`}>
              <button
                onClick={() => setExpanded((curr: boolean) => !curr)}
                className='rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100'
              >
                {expanded ? (
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12.7907 0H7.2093C6.93023 0 6.65674 0.00930237 6.39163 0.0223256C6.35473 0.0120335 6.3171 0.00456992 6.27907 0C6.19581 0.00144937 6.11351 0.01816 6.03628 0.0493023C1.82605 0.376744 0 2.56837 0 7.2093V12.7907C0 17.4316 1.82605 19.6233 6.03628 19.9535C6.11369 19.9837 6.19598 19.9994 6.27907 20C6.3171 19.9954 6.35473 19.988 6.39163 19.9777C6.65674 19.9907 6.92651 20 7.2093 20H12.7907C17.8437 20 20 17.8447 20 12.7907V7.2093C20 2.15535 17.8437 0 12.7907 0ZM5.5814 18.5116C2.52837 18.1265 1.39535 16.4884 1.39535 12.7926V7.2093C1.39535 3.51349 2.52837 1.87535 5.5814 1.49023V18.5116ZM18.6047 12.7907C18.6047 17.0828 17.0828 18.6047 12.7907 18.6047H7.2093C7.12837 18.6047 7.05581 18.6047 6.97674 18.5991V1.40093C7.05581 1.40093 7.12837 1.39535 7.2093 1.39535H12.7907C17.0828 1.39535 18.6047 2.91721 18.6047 7.2093V12.7907ZM13.2837 8.11256L11.3953 10L13.2828 11.8874C13.3495 11.9518 13.4026 12.0287 13.4392 12.1138C13.4758 12.1989 13.4951 12.2905 13.496 12.3831C13.4968 12.4757 13.4792 12.5676 13.4442 12.6534C13.4091 12.7391 13.3574 12.8171 13.2919 12.8826C13.2264 12.9481 13.1486 13 13.0628 13.0351C12.9771 13.0702 12.8852 13.0879 12.7926 13.0871C12.7 13.0864 12.6084 13.0672 12.5233 13.0307C12.4381 12.9941 12.3611 12.941 12.2967 12.8744L9.91535 10.493C9.85055 10.4283 9.79913 10.3515 9.76406 10.2669C9.72898 10.1823 9.71093 10.0916 9.71093 10C9.71093 9.90842 9.72898 9.81774 9.76406 9.73314C9.79913 9.64854 9.85055 9.57169 9.91535 9.50698L12.2967 7.12558C12.4284 6.99856 12.6047 6.92832 12.7876 6.92999C12.9705 6.93167 13.1455 7.00512 13.2748 7.13454C13.4041 7.26395 13.4773 7.43898 13.4788 7.6219C13.4803 7.80483 13.4109 7.98104 13.2837 8.11256Z'
                      fill='#232427'
                      fillOpacity='0.5'
                    />
                  </svg>
                ) : (
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12.7907 0H7.2093C6.93023 0 6.65674 0.00930237 6.39163 0.0223256C6.35473 0.0120335 6.3171 0.00456992 6.27907 0C6.19581 0.00144937 6.11351 0.01816 6.03628 0.0493023C1.82605 0.376744 0 2.56837 0 7.2093V12.7907C0 17.4316 1.82605 19.6233 6.03628 19.9535C6.11369 19.9837 6.19598 19.9994 6.27907 20C6.3171 19.9954 6.35473 19.988 6.39163 19.9777C6.65674 19.9907 6.92651 20 7.2093 20H12.7907C17.8437 20 20 17.8447 20 12.7907V7.2093C20 2.15535 17.8437 0 12.7907 0ZM5.5814 18.5116C2.52837 18.1265 1.39535 16.4884 1.39535 12.7926V7.2093C1.39535 3.51349 2.52837 1.87535 5.5814 1.49023V18.5116ZM18.6047 12.7907C18.6047 17.0828 17.0828 18.6047 12.7907 18.6047H7.2093C7.12837 18.6047 7.05581 18.6047 6.97674 18.5991V1.40093C7.05581 1.40093 7.12837 1.39535 7.2093 1.39535H12.7907C17.0828 1.39535 18.6047 2.91721 18.6047 7.2093V12.7907Z'
                      fill='#232427'
                      fillOpacity='0.5'
                    />
                    <path
                      d='M14.3156 10L12.4272 11.8874C12.3001 12.019 12.2306 12.1952 12.2321 12.3781C12.2336 12.561 12.3069 12.736 12.4362 12.8655C12.5655 12.9949 12.7404 13.0683 12.9233 13.07C13.1063 13.0717 13.2825 13.0014 13.4142 12.8744L15.7956 10.493C15.8604 10.4283 15.9118 10.3515 15.9469 10.2669C15.9819 10.1823 16 10.0916 16 10C16 9.90842 15.9819 9.81773 15.9469 9.73314C15.9118 9.64854 15.8604 9.57169 15.7956 9.50698L13.4142 7.12558C13.3498 7.05898 13.2728 7.00586 13.1876 6.96934C13.1025 6.93281 13.011 6.91361 12.9183 6.91285C12.8257 6.91209 12.7338 6.92979 12.6481 6.96491C12.5624 7.00003 12.4845 7.05187 12.419 7.1174C12.3535 7.18294 12.3018 7.26086 12.2667 7.34662C12.2317 7.43238 12.2141 7.52426 12.2149 7.61689C12.2158 7.70953 12.2351 7.80107 12.2717 7.88617C12.3083 7.97127 12.3615 8.04823 12.4281 8.11256L14.3156 10Z'
                      fill='#232427'
                      fillOpacity='0.5'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <ul className='flex-1'>{children}</ul>
        </nav>
      </aside>
    </div>
  )
}

export default function MakeSidebar() {
  const [expanded, setExpanded] = useState(true)
  const pathname = usePathname()
  const { locale } = useParams()
  const currentPath = pathname.startsWith(`/${locale}`)
    ? pathname.replace(`/${locale}`, '')
    : pathname

  const navBarItems: ISidebarItemProps[] = [
    // {
    //   icon: <BiHome size={20} />,
    //   text: 'Home',
    //   path: '/home'
    // },
    {
      icon: <UsersIcon />,
      text: 'Bemorlar',
      path: '/patients'
    },
    {
      icon: <UserSuitcaseIcon />,
      text: 'Shifokor kabineti',
      path: '/doctors-profile'
    },
    {
      icon: <DiagnosticIcon />,
      text: 'Diagnostika',
      path: '/diagnostics'
    },
    {
      icon: <SyringeIcon />,
      text: 'Laboratoriya',
      path: '/laboratory'
    },
    {
      icon: <MoneyWithCalcIcon />,
      text: 'Kassa',
      path: '/cashbox'
    },
    {
      icon: <ListIcon />,
      text: 'Hisobot',
      path: '/report'
    },
    // {
    //   icon: <UnorderedListIcon />,
    //   text: "Ma'lumotlar",
    //   path: '/information'
    // },
    {
      icon: <BuildingIcon />,
      subMenu: [
        {
          icon: '•',
          text: 'Kontragentlar',
          path: '/pharmacy/counteragents'
        },
        {
          icon: '•',
          text: 'Mahsulotlar',
          path: '/pharmacy/products'
        },
        {
          icon: '•',
          text: 'Qoldiq kiritish',
          path: '/pharmacy/stock-in'
        },
        {
          icon: '•',
          text: 'Tovar kirim',
          path: '/pharmacy/product-incomes'
        }
      ],
      text: 'Dorixona'
    },
    {
      icon: <GearIcon />,
      text: 'Sozlamalar',
      path: '/settings',
      subMenu: [
        {
          icon: '•',
          text: 'Foydalanuvchilar',
          path: '/settings/user'
        },
        // {
        //   icon: '•',
        //   text: 'Turkum narxlari',
        //   path: '/settings/prices'
        // },
        {
          icon: '•',
          text: 'Tibbiy xizmatlar',
          path: '/settings/medical-services'
        },
        {
          icon: '•',
          text: 'Narxlar varaqasi',
          path: '/settings/prices'
        },
        {
          icon: '•',
          text: 'Dorixona',
          path: '/settings/pharmacy'
        },
        {
          icon: '•',
          text: 'Shablonlar',
          path: '/settings/templates'
        }
      ]
    }
  ]

  // Desktop Sidebar
  return (
    <Sidebar expanded={expanded} setExpanded={setExpanded}>
      {navBarItems.map((item, index) => (
        <SidebarItem
          path={`/${locale}${item.path}`}
          active={currentPath.startsWith(item.path as string)}
          key={index}
          expanded={expanded}
          {...item}
        />
      ))}
    </Sidebar>
  )
}
