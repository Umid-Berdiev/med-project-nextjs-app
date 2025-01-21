'use client'

import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { BiChevronDown, BiChevronUp, BiSearch } from 'react-icons/bi'

export default function AppDropdownWithCheckboxV3({
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
    <div className={`dropdown w-full`} ref={appDropdownRef}>
      <div
        className={`btn btn-sm flex h-9 w-full items-center justify-between rounded-lg border font-normal hover:border hover:bg-secondary-light ${isDropdownOpen ? 'bg-secondary-light' : 'bg-white'}`}
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
        <div className='dropdown-content z-[1] w-full rounded-box bg-base-100 p-2 shadow'>
          <label className='input flex h-9 items-center gap-2 border border-gray-300 bg-white focus:outline-none focus:ring-0'>
            <input
              className='w-20 grow text-sm font-normal'
              type='text'
              placeholder={t('Qidirish?')}
            />
            <span>
              <BiSearch size={20} className='text-secondary' />
            </span>
          </label>
          <ul tabIndex={0} className='menu px-0'>
            {options.map((option, index) => (
              <li key={index}>
                <label className='label flex w-full cursor-pointer px-2 focus:!bg-[#EAFBFB]  active:!bg-[#EAFBFB] hover:!bg-[#EAFBFB]'>
                  {/* <div> */}
                  <p className='text-sm font-medium'>{option.name}</p>
                  <p
                    className={`inline-block rounded-lg px-2 py-1 text-xs ${
                      option.statusVal === 0
                        ? 'bg-[#ECEFF1] text-[#9A9A9A]' // Qora rang
                        : option.statusVal === 1
                          ? 'bg-[#FFF3E0] text-[#FB8C00]' // Yashil rang
                          : option.statusVal === 2
                            ? 'bg-[#FDEEEC] text-[#E6533C]' // Sariq rang
                            : 'bg-[#EAF9F5] text-[#26BF94]'
                    }`}
                  >
                    {option.status}
                  </p>
                  {/* </div> */}
                  <div className='hidden items-center justify-end gap-2 text-right text-sm'>
                    <input
                      className='checkbox checkbox-sm rounded border-secondary'
                      type='radio'
                      name={name}
                      defaultChecked={selectedOption === option.value}
                      onChange={() =>
                        typeof setSelectedOption === 'function' &&
                        setSelectedOption(option.value)
                      }
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
