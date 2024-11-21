'use client'
import AppAccordion, { AccordionItem } from '@/src/components/Accordion'
import React from 'react'
import { PiPrinter } from 'react-icons/pi'

export default function AmbulatoryExamination() {
  const items: AccordionItem[] = [
    {
      id: 1,
      title: '29.09.2024 16:54:23',
      content: 'Bu birinchi accordion tarkibi.',
      header: (
        <div className='flex items-center justify-between gap-12  border-dotted border-purple-300 py-4'>
          {/* Left Content */}
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-semibold'>28.09.2024 07:00:00</p>
              <p className='text-xs text-gray-500'>
                Registrator: BEGLARYAN LAURA EDUARDOVNA
              </p>
            </div>
            <div className='flex flex-col border-l px-4  '>
              <p className='text-xs text-gray-500'>Summa:</p>
              <p className='text-sm font-bold text-green-600'>86 000 so`m</p>
            </div>
          </div>

          <div className='flex w-full items-center justify-between'>
            <div className='flex w-[50%] items-center '>
              <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm text-gray-700'>
                Natijalar <PiPrinter />
              </button>
              <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm text-gray-700'>
                Doktor ID sini qo'shish <span className='ml-2'>👥</span>
              </button>
              <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm text-gray-700'>
                O'zgartirish <span className='ml-2'>✏️</span>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: '30.09.2024 10:21:45',
      content: 'Bu ikkinchi accordion tarkibi.'
    },
    {
      id: 3,
      title: '01.10.2024 08:15:30',
      content: 'Bu uchinchi accordion tarkibi.'
    }
  ]
  return (
    <div>
      {items.map(item => (
        <AppAccordion key={item.id} {...item} />
      ))}
    </div>
  )
}
