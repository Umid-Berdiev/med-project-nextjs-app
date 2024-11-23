'use client'
import AppAccordion, {
  AccordionProps
} from '@/src/components/Accordion/Accordion'
import PencilFillIcon from '@/src/components/icons/PencilFillIcon'
import UserIdIcon from '@/src/components/icons/UserIdIcon'
import React from 'react'
import { PiPrinterFill } from 'react-icons/pi'
import ContentItem from './ContentItem'

export default function HistoryContent() {
  const items: AccordionProps[] = [
    {
      checkbox: true,
      content: <ContentItem />,
      header: (
        <div className='grid w-full grid-cols-12 gap-4 border-dotted border-purple-300 py-4'>
          {/* Chap qism */}
          <div className='col-span-6 flex items-center gap-14'>
            <div>
              <p className='text-sm font-semibold'>28.09.2024 07:00:00</p>
              <p className='text-xs text-gray-500'>
                Registrator: BEGLARYAN LAURA EDUARDOVNA
              </p>
            </div>
            <div className='flex flex-col border-l px-4'>
              <p className='text-xs text-gray-500'>Summa:</p>
              <p className='text-sm font-bold text-green-600'>86 000 so`m</p>
            </div>
          </div>

          {/* O`ng qism */}
          <div className='col-span-6 flex flex-wrap items-center justify-end gap-4'>
            <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm font-semibold text-black '>
              Natijalar <PiPrinterFill className='ml-3' size={17.5} />
            </button>
            <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm font-semibold text-black '>
              Doktor ID sini qo`shish <UserIdIcon className='ml-3 ' />
            </button>
            <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm font-semibold text-black '>
              O`zgartirish <PencilFillIcon className='ml-3' />
            </button>
          </div>
        </div>
      )
    },
    {
      checkbox: true,
      content: <ContentItem />,
      header: (
        <div className='grid w-full grid-cols-12 gap-4 border-dotted border-purple-300 py-4'>
          {/* Chap qism */}
          <div className='col-span-6 flex items-center gap-14'>
            <div>
              <p className='text-sm font-semibold'>28.09.2024 07:00:00</p>
              <p className='text-xs text-gray-500'>
                Registrator: BEGLARYAN LAURA EDUARDOVNA
              </p>
            </div>
            <div className='flex flex-col border-l px-4'>
              <p className='text-xs text-gray-500'>Summa:</p>
              <p className='text-sm font-bold text-green-600'>86 000 so`m</p>
            </div>
          </div>

          {/* O`ng qism */}
          <div className='col-span-6 flex flex-wrap items-center justify-end gap-4'>
            <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm font-semibold text-black '>
              Natijalar <PiPrinterFill className='ml-3' size={17.5} />
            </button>
            <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm font-semibold text-black '>
              Doktor ID sini qo`shish <UserIdIcon className='ml-3 ' />
            </button>
            <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm font-semibold text-black '>
              O`zgartirish <PencilFillIcon className='ml-3' />
            </button>
          </div>
        </div>
      )
    },
    {
      checkbox: true,
      content: <ContentItem />,
      header: (
        <div className='grid w-full grid-cols-12 gap-4 border-dotted border-purple-300 py-4'>
          {/* Chap qism */}
          <div className='col-span-6 flex items-center gap-14'>
            <div>
              <p className='text-sm font-semibold'>28.09.2024 07:00:00</p>
              <p className='text-xs text-gray-500'>
                Registrator: BEGLARYAN LAURA EDUARDOVNA
              </p>
            </div>
            <div className='flex flex-col border-l px-4'>
              <p className='text-xs text-gray-500'>Summa:</p>
              <p className='text-sm font-bold text-green-600'>86 000 so`m</p>
            </div>
          </div>

          {/* O`ng qism */}
          <div className='col-span-6 flex flex-wrap items-center justify-end gap-4'>
            <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm font-semibold text-black '>
              Natijalar <PiPrinterFill className='ml-3' size={17.5} />
            </button>
            <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm font-semibold text-black '>
              Doktor ID sini qo`shish <UserIdIcon className='ml-3 ' />
            </button>
            <button className='flex items-center rounded bg-gray-100 px-4 py-1 text-sm font-semibold text-black '>
              O`zgartirish <PencilFillIcon className='ml-3' />
            </button>
          </div>
        </div>
      )
    }
  ]
  return (
    <div className='flex flex-col gap-2'>
      {items.map((item, index) => (
        <AppAccordion key={index} {...item} />
      ))}
    </div>
  )
}
