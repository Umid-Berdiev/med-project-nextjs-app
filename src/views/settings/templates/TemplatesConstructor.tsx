'use client'
import Breadcrumb from '@/src/components/Breadcrumbs'
import TemplatesTableWrapper from '@/src/views/settings/templates/TemplatesTableWrapper'
import FileIcon from '@/src/components/icons/iconTemplate/FileIcon'
import CalendarIcon from '@/src/components/icons/iconTemplate/СalendarIcon'
import ReasonIcon from '@/src/components/icons/iconTemplate/ReasonIcon'
import NumberIcon from '@/src/components/icons/iconTemplate/NumberIcon'
import Button from '@/src/components/Button'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import EyeIcon from '@/src/components/icons/iconTemplate/EyeIcon'
import CloseEyeIcon from '@/src/components/icons/iconTemplate/CloseEyeIcon'
import { useState } from 'react'

export default function TemplatesConstructor() {
  const { locale } = useParams()
  const [isOpenXsModal, setIsOpenXsModal] = useState(false)
  const { t } = useTranslations(locale as Locale)
  
  return (<>
    <div className='mt-3 rounded-xl border border-[#E9EAEA] bg-white'>
    <table className='table border-collapse border-0'>
      <thead>
        <tr>
          <td className='w-60 border border-[#E9EAEA] px-4 py-1'>
            <div className='flex w-full items-center justify-between'>
              <span className='text-xs leading-4 text-[#232427]'>
                Shablon nomilari
              </span>
              <FileIcon />
            </div>
          </td>
          <td className='w-60 border border-[#E9EAEA] px-4 py-1'>
            <div className='flex w-full items-center justify-between'>
              <span className='text-xs leading-4 text-[#232427]'>Sana</span>
              <CalendarIcon />
            </div>
          </td>
          <td className='w-60 border border-[#E9EAEA] px-4 py-1'>
            <div className='flex w-full items-center justify-between'>
              <span className='text-xs leading-4 text-[#232427]'>
                Sababi
              </span>
              <ReasonIcon />
            </div>
          </td>
          <td className='w-60 border border-[#E9EAEA] px-4 py-1'>
            <div className='flex w-full items-center justify-between'>
              <span className='text-xs leading-4 text-[#232427]'>
                Raqam
              </span>
              <NumberIcon />
            </div>
          </td>
          <td className='border border-[#E9EAEA] px-4 py-1'>
            <Button
              variant='text'
              color='secondary'
              onClick={() => setIsOpenXsModal(true)}
              endIcon={<BsFillPlusCircleFill />}
            >
              {t('Ustun qo’shish')}
            </Button>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-[#E9EAEA] px-4 py-1'>
            <span className='text-xs leading-4 text-[#232427]'>
              Shablon 1
            </span>
          </td>
          <td className='border border-[#E9EAEA] px-4 py-1'>
            <span className='text-xs leading-4 text-[#232427]'></span>
          </td>
          <td className='border border-[#E9EAEA] px-4 py-1'>
            <input
              className='w-full rounded-md border border-[#E9EAEA] p-2.5 outline-none'
              type='text'
              placeholder='Sababi'
            />
          </td>
          <td className='border border-[#E9EAEA] px-4 py-1'>
            <span className='text-xs leading-4 text-[#232427]'>2</span>
          </td>
          <td>
            <div className='flex gap-3'>
              <button>
                <EyeIcon />
              </button>
              <button>
                <DeleteIcon currentColor='red' />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td className='border border-[#E9EAEA] px-4 py-1'>
            <span className='text-[#C8C8C9]'>Shablon 2</span>
          </td>
          <td className='border border-[#E9EAEA] px-4 py-1'>
            <span className='text-xs leading-4 text-[#232427]'></span>
          </td>
          <td className='border border-[#E9EAEA] px-4 py-1'>
            <input
              className='w-full rounded-md border border-[#E9EAEA] p-2.5 outline-none'
              type='text'
              disabled
              placeholder='Sababi'
            />
          </td>
          <td className='border border-[#E9EAEA] px-4 py-1'>
            <span className='text-[#C8C8C9]'>1</span>
          </td>
          <td>
            <div className='flex gap-3'>
              <button>
                <CloseEyeIcon />
              </button>
              <button>
                <DeleteIcon currentColor='red' />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className='relative'>
    <Button
      variant='text'
      color='secondary'
      onClick={() => setIsOpenXsModal(true)}
      endIcon={<BsFillPlusCircleFill />}
    >
      {t('Pastki toifa qo’shish')}
    </Button>
    {isOpenXsModal && (
      <div className='w-66 absolute left-0 top-full rounded-lg border border-[#E9EAEA] bg-white p-3'>
        <div className=''>
          <div className='mb-1'>
            <input
              className='w-full rounded-md border border-[#29CED2] p-2.5 shadow-[0px_0px_6px_6px_#29ced23b] outline-none '
              type='text'
              placeholder='Shablon nomlari'
              value={'Shablon nomlari'}
            />
          </div>
          <div className='space-y-0'>
            <label
              key='nam1'
              className='label flex cursor-pointer justify-between gap-2 p-2'
            >
              <span className='flex items-center gap-2 text-[13px] font-medium text-[#232427]'>
                <FileIcon />
                Matn
              </span>
              <input
                type='radio'
                value='nam1'
                name='named'
                className='radio size-5 border border-[#D3D3D4] transition checked:border-[7px]  checked:!border-[#29CED2] checked:bg-white'
              />
            </label>
            <label
              key='nam1'
              className='label flex cursor-pointer justify-between gap-2 p-2'
            >
              <span className='flex items-center gap-2 text-[13px] font-medium text-[#232427]'>
                <ReasonIcon />
                Matn kiritish maydoni
              </span>
              <input
                type='radio'
                value='nam1'
                name='named'
                className='radio size-5 border border-[#D3D3D4] transition checked:border-[7px]  checked:!border-[#29CED2] checked:bg-white'
              />
            </label>
            <label
              key='nam1'
              className='label flex cursor-pointer justify-between gap-2 p-2'
            >
              <span className='flex items-center gap-2 text-[13px] font-medium text-[#232427]'>
                <CalendarIcon />
                Sana
              </span>
              <input
                type='radio'
                value='nam1'
                name='named'
                className='radio size-5 border border-[#D3D3D4] transition checked:border-[7px]  checked:!border-[#29CED2] checked:bg-white'
              />
            </label>
            <label
              key='nam1'
              className='label flex cursor-pointer justify-between gap-2 p-2'
            >
              <span className='flex items-center gap-2 text-[13px] font-medium text-[#232427]'>
                <NumberIcon />
                Raqam
              </span>
              <input
                type='radio'
                value='nam1'
                name='named'
                className='radio size-5 border border-[#D3D3D4] transition checked:border-[7px]  checked:!border-[#29CED2] checked:bg-white'
              />
            </label>
          </div>
          <div className='flex items-center mt-1 justify-end gap-2'>
            <button
              className='btn btn-ghost'
              onClick={() => setIsOpenXsModal(false)}
            >
              Bekor qilish
            </button>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => setIsOpenXsModal(true)}
            >
              {t('Tasdiqlash')}
            </Button>
          </div>
        </div>
      </div>
    )}
  </div></>
  )
}
