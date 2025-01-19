'use client'

import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { BiChevronDown, BiChevronUp, BiSearch } from 'react-icons/bi'

export default function AppDropdown({
  search = false,
  options,
  title = 'Click'
}: {
  search: boolean
  options: Record<string, any>[]
  title: string
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const appDropdownRef = useRef<HTMLDivElement | null>(null)
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)

  function handleClickOutside(event: MouseEvent) {
    if (
      appDropdownRef.current &&
      !appDropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [appDropdownRef])

  // useEffect(() => {
  //   if (isDropdownOpen) {
  //     appDropdownRef.current?.setAttribute('open', 'open')
  //   } else {
  //     appDropdownRef.current?.removeAttribute('open')
  //   }
  // }, [isDropdownOpen])

  return (
    <div className={`dropdown`} ref={appDropdownRef}>
      <div
        className={`flex h-9 w-full items-center justify-between rounded-lg border border-[#2324271A] px-3 text-sm text-[#161624] ${isDropdownOpen ? 'bg-secondary-light' : 'bg-white'}`}
        role='button'
        tabIndex={0}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span>{title}</span>
        {isDropdownOpen ? (
          <BiChevronUp size={20} />
        ) : (
          <BiChevronDown size={20} />
        )}
      </div>
      {isDropdownOpen && (
        <div className='dropdown-content z-[1] rounded-box bg-base-100 p-2 shadow'>
          {search && (
            <label className='input input-bordered flex h-9 items-center gap-2'>
              <BiSearch size={20} className='text-secondary' />
              <input
                type='text'
                className='grow text-sm font-normal'
                placeholder={t('Nimani izlash kerak?')}
              />
            </label>
          )}
          <ul tabIndex={0} className='menu px-0'>
            {options.map((option, index) => (
              <li key={index}>
                {typeof option.name === 'function' ? (
                  option.name()
                ) : (
                  <a>{option.name}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
