'use client'

import Button from '@/src/components/Button'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { FaFileCircleCheck } from 'react-icons/fa6'
import { PiPlusCircleFill } from 'react-icons/pi'

export default function TableTypesSelect({
  options,
  selectedOption,
  name = 'app-dropdown',
  setSelectedOption,
  setColumns,
  columns
}: {
  options: { name: string; value: string; icon: JSX.Element }[]
  selectedOption: string
  name?: string
  setSelectedOption: (value: string) => void
  setColumns: (
    columns: {
      name: string
      value: string
      icon: JSX.Element
    }[]
  ) => void
  columns: {
    name: string
    value: string
    icon: JSX.Element
  }[]
}) {
  const colNameRef = useRef<HTMLInputElement | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const appDropdownRef = useRef<HTMLDivElement | null>(null)
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)

  function handleClickOutside(event: MouseEvent) {
    if (
      appDropdownRef.current &&
      !appDropdownRef.current.contains(event.target as Node)
    ) {
      handleCloseDropdown()
    }
  }
  function handleCloseDropdown() {
    setIsDropdownOpen(false),
      setColumns([
        ...columns,
        {
          name: colNameRef.current?.value || '',
          value: selectedOption,
          icon: options.find(option => option.value === selectedOption)
            ?.icon || <FaFileCircleCheck />
        }
      ])
    colNameRef.current!.value = ''
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appDropdownRef])

  return (
    <div className={`dropdown font-semibold`} ref={appDropdownRef}>
      <Button
        variant='text'
        className='text-primary'
        onClick={() => {
          if (isDropdownOpen) {
            handleCloseDropdown()
          } else {
            setIsDropdownOpen(true)
          }
        }}
      >
        {t("Ustun qo'shish")} <PiPlusCircleFill size={20} />
      </Button>

      {isDropdownOpen && (
        <div className='dropdown-content z-[1] rounded-box bg-base-100 p-2 shadow'>
          <label className='input input-bordered flex h-9 items-center gap-2'>
            <input
              ref={colNameRef}
              className='grow text-sm font-normal'
              type='text'
              placeholder={t('Shablon nomi')}
            />
          </label>
          <ul tabIndex={0} className='menu px-0'>
            {options.map((option, index) => (
              <li key={index}>
                <label className='label flex w-full cursor-pointer px-2'>
                  <div className='flex items-center gap-2'>
                    {option.icon}
                    <span className='label-text'>{option.name}</span>
                  </div>
                  <input
                    className='radio radio-sm checked:bg-info'
                    type='radio'
                    name={name}
                    defaultChecked={selectedOption === option.value}
                    onChange={() => setSelectedOption(option.value)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
