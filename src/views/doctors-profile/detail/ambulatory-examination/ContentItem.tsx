import AppAccordion, {
  AccordionProps
} from '@/src/components/Accordion/Accordion'
import BiometralIcon from '@/src/components/icons/BiometralIcon'
import React from 'react'
import { BiTrash } from 'react-icons/bi'

export default function ContentItem() {
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
          <div>Umumiy qon tahlili</div>
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
            <th className='w-1/6 p-2'>Xizmat nomi</th>
            <th className='w-1/6 p-2'>Bajaruvchi</th>
            <th className='w-1/6 p-2'>Xulosa</th>
            <th className='w-1/6 p-2'>LIS Barcode</th>
            <th className='w-1/6 p-2'>Biomaterial</th>
            <th className='w-1/6 p-2'>Narxi</th>
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
