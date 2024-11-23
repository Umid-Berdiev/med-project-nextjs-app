import Button from '@/src/components/Button'
import Link from '@/src/components/Link'
import { useTranslations } from 'next-intl'
import React from 'react'
import { BiArrowFromRight, BiPlusCircle } from 'react-icons/bi'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { LuPrinter } from 'react-icons/lu'
import { SlOptions } from 'react-icons/sl'

export default function ProfileBlock() {
  const t = useTranslations('')
  return (
    <div>
      <div className='flex w-full items-center justify-between rounded-lg bg-white p-4  sm:flex-col md:flex md:flex-col lg:flex-row'>
        <div className='flex items-center space-x-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-avatar-gradient text-lg font-bold text-gray-700'>
            IS
          </div>
          <div>
            <p className='font-semibold text-gray-800'>
              Ismoilov Shaxzod Farrux o`g`li
            </p>
            <div className='flex items-center space-x-2'>
              <span className='text-sm text-gray-500'>ID: 38042</span>
              <span className='rounded bg-[#FDEEEC] px-2 py-1 text-xs text-[#E6533C]'>
                QARZDOR
              </span>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Button variant='outlined' color='secondary'>
            {t('Moliya bilan ishlash')}
          </Button>
          <Button variant='outlined' color='secondary'>
            {t('Labaratoriyaga o’tish')}
          </Button>
          <Button
            variant='contained'
            color='info'
            endIcon={<BsFillPlusCircleFill />}
            className='bg-info'
          >
            {t('Tovar qo’shish')}
          </Button>
          <Button
            variant='contained'
            color='secondary'
            endIcon={<BsFillPlusCircleFill />}
          >
            {t('Xizmat qo’shish')}
          </Button>
          <div className='dropdown dropdown-left dropdown-bottom'>
            <Button
              tabIndex={0}
              color='secondary'
              variant='tonal'
              className='shadow-custom-blue bg-white'
              size='small'
            >
              <SlOptions size={20} />
            </Button>
            <ul
              tabIndex={0}
              className='menu dropdown-content  z-[1000] w-72 rounded-s-md bg-base-100 p-2 shadow'
            >
              <li>
                <div className='flex w-full justify-between hover:bg-soft-secondary'>
                  <span> M.K.ni chop etish </span>
                  <IoIosArrowForward
                    size={14}
                    className='hover:text-secondary'
                  />
                </div>
              </li>
              <li>
                <div className='flex w-full justify-between hover:bg-soft-secondary'>
                  <span> M.K.ni chop etish (IP pinterda)</span>
                  <IoIosArrowForward
                    size={14}
                    className='hover:text-secondary'
                  />
                </div>
              </li>
              <li>
                <div className='flex w-full justify-between hover:bg-soft-secondary'>
                  <span> Order dalolatnomasi</span>
                  <IoIosArrowForward
                    size={14}
                    className='hover:text-secondary'
                  />
                </div>
              </li>
              <li>
                <div className='flex w-full justify-between hover:bg-soft-secondary'>
                  <span> Tibbiyot tarixi</span>
                  <IoIosArrowForward
                    size={14}
                    className='hover:text-secondary'
                  />
                </div>
              </li>
            </ul>
          </div>

          <Button
            color='secondary'
            variant='tonal'
            className='shadow-custom-blue bg-white'
            size='small'
          >
            <LuPrinter size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}
