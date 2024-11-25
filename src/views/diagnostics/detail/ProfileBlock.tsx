import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function ProfileBlock() {
  const { locale } = useParams()

  const { t } = useTranslations(locale as Locale)
  return (
    <div>
      <div className='flex w-full items-center justify-between rounded-lg bg-white p-4  sm:flex-col md:flex md:flex-col lg:flex-row'>
        <div className='flex items-center space-x-4'>
          <div className='avatar'>
            <div className='w-16 rounded-full'>
              <Image
                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                alt={''}
              />
            </div>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-800'>
              Ismoilov Shaxzod Farrux o`g`li
            </p>
            <div className='flex items-center space-x-2'>
              <span className='text-xs text-gray-500'>ID: 38042</span>
              <span className='rounded-lg bg-[#FDEEEC] px-2 py-1 text-2xs text-[#E6533C]'>
                QARZDOR
              </span>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <div className='mr-1 flex flex-col text-right'>
            <span className='text-xs text-[#23242780]'>
              {t('Telefon raqami')}:
            </span>
            <p className='text-lg font-semibold text-textDark'>
              +998 83 956 6961
            </p>
          </div>
          <div className='h-[58px] w-px bg-[#2324271A]'></div>
          <div className='ml-1 flex flex-col'>
            <span className='text-xs text-[#23242780]'>
              {t("Tug'ilgan sanasi")}:
            </span>
            <p className='text-lg font-semibold text-textDark'>12.02.2000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
