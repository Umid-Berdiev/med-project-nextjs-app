import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import React from 'react'

export default function PersonalInfo() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  return (
    <div className='container mx-auto rounded-lg bg-white px-4 py-6'>
      <div className='grid  gap-6 lg:grid-cols-2'>
        <div className='grid-cols-1 '>
          <h2 className='mb-2  pb-2 text-lg font-semibold'>
            {t('Umumiy ma`lumotlar')}
          </h2>
          <div className='border-gray grid-cols-1 rounded-lg border p-6 '>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t(' Mijoz IDsi')}
              </span>
              <span>39928</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Familiya')}
              </span>
              <span>Ismoilov</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Ism')}
              </span>
              <span>Shaxzod</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Otasining ismi')}
              </span>
              <span>Farrux o`g`li</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Tug`ilgan kuni')}
              </span>
              <span>12.02.2000</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Jinsi')}
              </span>
              <span>Erkak</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Ligota')}
              </span>
              <span>Rezident</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Yashash manzili')}
              </span>
              <span>-</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Ish joyi')}
              </span>
              <span>Freelancer</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Telefon raqami')}
              </span>
              <span>+998 33 356 6961</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Qo`shimcha telefon raqam')}
              </span>
              <span>-</span>
            </div>
            <div className='flex justify-between pb-2'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Ro`yxatdan o`tgan filial')}
              </span>
              <span>Yunusobod</span>
            </div>
          </div>
        </div>

        <div className='grid-cols-1 '>
          <h2 className='mb-2  pb-2 text-lg font-semibold'>
            {t('Statistika')}
          </h2>
          <div className='border-gray rounded-lg border p-6'>
            <div className='space-y-3'>
              <div className='border-gray item-center flex justify-between border-b py-3'>
                <span className='text-sm font-medium  text-[#23242780]'>
                  {t('Tashriflar soni')}
                </span>
                <span>7</span>
              </div>
              <div className='border-gray item-center flex justify-between border-b py-3'>
                <span className='text-sm font-medium  text-[#23242780]'>
                  {t('Jami ishlatilgan summa')}
                </span>
                <span>13 456 140 so`m</span>
              </div>
              <div className='flex justify-between pb-2'>
                <span className='text-sm font-medium  text-[#23242780]'>
                  {t('Tashriflari')}
                </span>
                <span>12.09.2024 (Birinchi) / 29.09.2024 (Oxirgi)</span>
              </div>
            </div>
          </div>
          <h2 className='my-2   text-lg font-semibold'>
            {t('Hujjat ma`lumotlari')}
          </h2>
          <div className='border-gray mt-6 rounded-lg border p-6'>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Hujjat turi')}
              </span>
              <span>O`zbekiston pasporti</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Hujjat seriyasi va raqami')}
              </span>
              <span>AB448884</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Berilgan sanasi')}
              </span>
              <span>12.12.2016</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t(' Amal qilish muddati')}
              </span>
              <span>12.12.2026</span>
            </div>
            <div className='border-gray item-center flex justify-between border-b py-3'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t('Kim tomonidan berilgan')}
              </span>
              <span>Toshkent shahar, Yunusobod IIB</span>
            </div>
            <div className='flex justify-between pb-2'>
              <span className='text-sm font-medium  text-[#23242780]'>
                {t(' Ro`yxatda turgan manzili')}
              </span>
              <span>Toshkent shahri, Yunusobod tumani, Abdulla Qodiriy 14</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
