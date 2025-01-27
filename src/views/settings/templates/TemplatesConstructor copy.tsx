import Button from '@/src/components/Button'
import React, { useState } from 'react'
import { PiNumberCircleEight, PiPlusCircleFill } from 'react-icons/pi'
import TableTypesSelect from './TableTypesSelect'
import { RiFileEditLine } from 'react-icons/ri'
import { FaRegFileLines } from 'react-icons/fa6'
import { BiCalendar } from 'react-icons/bi'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/src/configs/t'
import { Locale } from '@/src/configs/i18n'

export default function TemplatesConstructor() {
  const { lang } = useParams()
  const { t } = useTranslations(lang as Locale)
  const optionsTableColTypes = [
    {
      icon: <FaRegFileLines size={18} />,
      name: 'Matn',
      value: 'text'
    },
    {
      icon: <RiFileEditLine size={18} />,
      name: 'Matn kiritish maydoni',
      value: 'area'
    },
    {
      icon: <BiCalendar size={18} />,
      name: 'Sana',
      value: 'date'
    },
    {
      icon: <PiNumberCircleEight size={18} />,
      name: 'Raqam',
      value: 'number'
    }
  ]
  const [selectedAdditionService, setSelectedAdditionService] = useState('text')
  const [columns, setColumns] = useState<
    {
      name: string
      value: string
      icon: JSX.Element
    }[]
  >([])
  const [rows, setRows] = useState<any[]>([])
  const handleAddRow = () => {
    const newRow: { [key: string]: string | JSX.Element } = {}
    columns.forEach(column => {
      if (column.value === 'date') {
        newRow[column.value] = <input type='date' />
      } else {
        newRow[column.value] = ''
      }
    })
    setRows([...rows, newRow])
  }
  return (
    <div className='my-3 overflow-x-auto'>
      <table className='table table-pin-rows table-pin-cols table-xs min-h-64'>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                {column.icon}
                {column.name}
              </th>
            ))}
            <TableTypesSelect
              columns={columns}
              setColumns={setColumns}
              options={optionsTableColTypes}
              selectedOption={selectedAdditionService}
              setSelectedOption={setSelectedAdditionService}
              name='addition-service-radio'
            />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{row[column.value]}</td>
              ))}
            </tr>
          ))}

          <tr>
            <td colSpan={columns.length + 1}>
              <Button
                variant='text'
                className='text-primary'
                onClick={handleAddRow}
              >
                {t("Pastki toifa qo'shish")} <PiPlusCircleFill size={20} />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
