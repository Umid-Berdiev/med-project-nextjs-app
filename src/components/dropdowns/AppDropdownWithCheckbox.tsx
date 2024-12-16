'use client'

import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { BiChevronDown, BiChevronUp, BiSearch } from 'react-icons/bi'

export default function AppDropdownWithCheckbox({
  options,
  title = 'Click',
  selectedOption,
  name = 'app-dropdown',
  setSelectedOption
}: {
  options: Record<string, any>[]
  title?: string
  selectedOption?: string
  name?: string
  setSelectedOption?: (value: string) => void
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

  return (
    <div className={`dropdown font-semibold w-full`} ref={appDropdownRef}>
      <div
        className={`btn w-full btn-sm h-9 flex items-center justify-between rounded-lg border hover:border hover:bg-secondary-light ${isDropdownOpen ? 'bg-secondary-light' : 'bg-white'}`}
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
        <div className='dropdown-content w-full z-[1] rounded-box bg-base-100 p-2 shadow'>
          <label className='input border-0 bg-white flex h-9 items-center gap-2'>
            <BiSearch size={20} className='text-secondary' />
            <input
              className='grow text-sm font-normal'
              type='text'
              placeholder={t('Nimani izlash kerak?')}
            />
          </label>
          <ul tabIndex={0} className='menu px-0'>
            {options.map((option, index) => (
              <li key={index}>
                <label className='label flex w-full cursor-pointer px-2'>
                  <span className='label-text font-normal'>{option.name}</span>
                  <div className='flex justify-end items-center gap-2 text-right text-[13px]'>
                    {option.price}
                    <input
                      className='checkbox checkbox-sm rounded border-secondary [--chkbg:theme(colors.secondary)] [--chkfg:white]'
                      type='checkbox'
                      name={name}
                      defaultChecked={selectedOption === option.value}
                      onChange={() => setSelectedOption(option.value)}
                    />
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
