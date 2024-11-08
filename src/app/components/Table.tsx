import React, { ReactNode } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { PiFolderOpenLight } from 'react-icons/pi'

export interface ITableColumn<T, M> {
  header: string
  width?: string
  col: (row: T, index?: number, meta?: M) => ReactNode
}

export interface ITableProps<T, M> {
  columns: ITableColumn<T, M>[]
  data: T[]
  meta?: M
  hoverable?: boolean
  stripped?: boolean
  classRow?: (row: T, index: number) => string
}

export default function Table<T, M>({
  columns = [],
  data = [],
  meta,
  hoverable = false,
  stripped = true,
  classRow = () => ''
}: ITableProps<T, M>) {
  return (
    <div className='mt-4 h-full min-h-96 overflow-x-auto'>
      {data.length ? (
        <table
          className={`table w-full text-[13px] leading-[18px] drop-shadow-none ${
            stripped ? 'table-zebra' : ''
          }`}
        >
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`min-w-[140px] bg-white ${column.width || ''}`}
                >
                  <span className='flex cursor-pointer flex-row items-center gap-2'>
                    <span className='font-bold normal-case'>
                      {column.header}
                    </span>
                    {index < columns.length - 1 && (
                      <HiChevronDown className='flex-none' size={'14px'} />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                className={`bg-white ${hoverable ? 'hover:bg-gray-100' : ''} ${classRow(
                  row,
                  rowIndex
                )}`}
                key={rowIndex}
              >
                {columns.map((column, columnIndex) => (
                  <td className='px-4 py-2.5 font-medium' key={columnIndex}>
                    <span className='inline-flex'>
                      {column.col(row, rowIndex + 1, meta)}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className='flex w-full flex-col items-center justify-center bg-white py-10'>
          <PiFolderOpenLight size={44} className='text-gray-400 opacity-25' />
          <p className='text-sm font-medium text-gray-400 opacity-25'>
            {"Ma'lumot topilmadi"}
          </p>
        </div>
      )}
    </div>
  )
}
