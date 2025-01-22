import AppAccordion, {
  AccordionProps
} from '@/src/components/Accordion/Accordion'
import Button from '@/src/components/Button'
import BiometralIcon from '@/src/components/icons/BiometralIcon'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import React from 'react'
import { BiTrash } from 'react-icons/bi'

export default function ContentItem() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const items: AccordionProps[] = [
    {
      content: (
        <>
          <table className='table w-full'>
            <tbody>
              <tr>
                <td className='w-1/6 p-2'>Лейкоциты (WBC)</td>
                <td className='w-1/6 p-2'>-</td>
                <td className='w-1/6 p-2'>-</td>
                <td className='w-1/6 p-2'>
                  <a href='#' className='text-blue-500 underline'>
                    10052008
                  </a>
                </td>
                <td className='w-1/6 p-2'>
                  <span className='flex items-center gap-2'>
                    <BiometralIcon />
                    Венозная кровь (EDTA)
                  </span>
                </td>
                <td className=' w-1/6 p-2  font-bold text-red-500'>
                  105 000 so&apos;m
                </td>
                <td className='w-1/6 p-2'></td>
              </tr>
              <tr>
                <td className='w-1/6 p-2'>Лейкоциты (WBC)</td>
                <td className='w-1/6 p-2'>-</td>
                <td className='w-1/6 p-2'>-</td>
                <td className='w-1/6 p-2'>
                  <a href='#' className='text-blue-500 underline'>
                    10052008
                  </a>
                </td>
                <td className='w-1/6 p-2'>
                  <span className='flex items-center gap-2'>
                    <BiometralIcon />
                    Венозная кровь (EDTA)
                  </span>
                </td>
                <td className=' w-1/6 p-2  font-bold text-red-500'>
                  105 000 so&apos;m
                </td>
                <td className='w-1/6 p-2'></td>
              </tr>
              <tr>
                <td className='w-1/6 p-2'>Лейкоциты (WBC)</td>
                <td className='w-1/6 p-2'>-</td>
                <td className='w-1/6 p-2'>-</td>
                <td className='w-1/6 p-2'>
                  <a href='#' className='text-blue-500 underline'>
                    10052008
                  </a>
                </td>
                <td className='w-1/6 p-2'>
                  <span className='flex items-center gap-2'>
                    <BiometralIcon />
                    Венозная кровь (EDTA)
                  </span>
                </td>
                <td className=' w-1/6 p-2  font-bold text-red-500'>
                  105 000 so&apos;m
                </td>
                <td className='w-1/6 p-2'></td>
              </tr>
            </tbody>
          </table>
        </>
      ),
      className: 'bg-[#2324270D]',
      iconPosition: 'start',
      border: false,
      header: (
        <div className='flex w-full items-center justify-between'>
          <div>{t('Umumiy qon tahlili')}</div>
          <button className='rounded-md bg-white p-1'>
            <BiTrash color='red' />
          </button>
        </div>
      ),
      title: ''
    }
  ]
  return (
    <div className='rounded-md border-none'>
      <table className='table w-full'>
        <thead className='border-none'>
          <tr className='border-none text-black'>
            <th className='w-1/6 p-2'>{t('Xizmat nomi')}</th>
            <th className='w-1/6 p-2'>{t('Bajaruvchi')}</th>
            <th className='w-1/6 p-2'>{t('Xulosa')}</th>
            <th className='w-1/6 p-2'>{t('LIS Barcode')}</th>
            <th className='w-1/6 p-2'>{t('Biomaterial')}</th>
            <th className='w-1/6 p-2'>{t('Narxi')}</th>
            <th className='w-1/6 p-2'></th>
          </tr>
        </thead>
      </table>

      <div>
        {items.map((item: AccordionProps, index: number) => (
          <AppAccordion key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
