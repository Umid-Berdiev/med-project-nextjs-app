'use client'
import Button from '@/src/components/Button'
import CameraIcon from '@/src/components/icons/CameraIcon'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { BiPlusCircle, BiTrash } from 'react-icons/bi'
import { FiFileText } from 'react-icons/fi'
import { PiPlusCircle } from 'react-icons/pi'

export default function ImageUpload() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  
  return (
    <div className='flex flex-col gap-2'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2'>
        <div className='flex gap-2'>
          <div className='flex h-8 w-8 items-start rounded-md bg-white p-2 text-sm shadow-sm'>
            01
          </div>
          <button className='h-8 w-8 rounded-md bg-white p-2 shadow-sm'>
            <BiTrash className='text-error' />
          </button>
          <div className='flex h-16 w-full items-center gap-3  rounded-md border border-dashed border-[#23242740] p-3 text-[#23242740]'>
            <div className='flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#2324270D]'>
              <CameraIcon />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm font-medium text-textDark'>
                Выбрать файл
              </span>
              <div className='flex gap-3'>
                <span className='text-xs'>
                  {t('Форматы:')}{' '}
                  <span className='text-xs font-medium text-textDark'>
                    jpg, png, gif
                  </span>
                </span>
                <span className='text-xs'>
                  {t('Все:')}{' '}
                  <span className='text-xs font-medium text-textDark'>
                    до 2мб
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <textarea
            rows={5}
            className='textarea textarea-bordered  w-full'
            placeholder={t('Tavsiya yozing')}
          ></textarea>
          <div className='flex w-full justify-start gap-2'>
            <Button
              startIcon={<FiFileText />}
              variant='text'
              color='secondary'
              size='small'
              className='text-[11px] '
            >
              Shablondan tanlash
            </Button>
            <Button
              startIcon={<BiPlusCircle />}
              variant='text'
              color='secondary'
              size='small'
              className='text-[11px] '
            >
              Shablonga qo’shish
            </Button>
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center rounded-md border border-dashed border-[#23242740] p-10 text-[#23242740]'>
        <PiPlusCircle /> Yangi qo`shish
      </div>
    </div>
  )
}
