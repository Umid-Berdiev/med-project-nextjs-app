import React, { ReactNode, useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { LuChevronsUpDown } from 'react-icons/lu'
import { PiFolderOpenLight } from 'react-icons/pi'

export interface ITableColumn<T, M> {
  header: string
  width?: string
  col: (row: T, index?: number, meta?: M) => ReactNode
  sortable?: boolean
}

export interface ITableProps<T, M> {
  columns: ITableColumn<T, M>[]
  data: T[]
  meta?: M
  hoverable?: boolean
  stripped?: boolean
  classRow?: (row: T, index: number) => string
  sortBy?: { column: string; direction: 'asc' | 'desc' }
  setSortBy?: (column: string) => void
}

export default function Table<T, M>({
  columns = [],
  data = [],
  meta,
  hoverable = false,
  stripped = true,
  classRow = () => '',
  sortBy,
  setSortBy
}: ITableProps<T, M>) {
  const sortedData = React.useMemo(() => {
    if (sortBy) {
      return [...data].sort((a, b) => {
        const column = columns.find(col => col.header === sortBy.column)
        if (!column || !column.sortable) return 0
        const valueA = column.col(a) as string | number
        const valueB = column.col(b) as string | number
        return sortBy.direction === 'asc'
          ? valueA > valueB
            ? 1
            : -1
          : valueA < valueB
            ? 1
            : -1
      })
    }
    return data
  }, [data, sortBy, columns])

  return (
    <div className='mt-4 h-full min-h-96 overflow-x-auto'>
      {data.length ? (
        <table
          className={`table w-full bg-black  text-[13px] leading-[18px] drop-shadow-none ${
            stripped ? 'table-zebra' : ''
          }`}
        >
          <thead className='rounded'>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`min-w-[140px] bg-white ${column.width || ''}`}
                  onClick={() =>
                    column.sortable && setSortBy && setSortBy(column.header)
                  }
                >
                  <span className='flex cursor-pointer flex-row items-center gap-2'>
                    <span className='text-textDark  font-bold normal-case'>
                      {column.header}
                    </span>
                    {column.sortable &&
                      (sortBy?.column === column.header ? (
                        sortBy.direction === 'asc' ? (
                          <HiChevronUp className='flex-none' size={18} />
                        ) : (
                          <HiChevronDown className='flex-none' size={18} />
                        )
                      ) : (
                        <LuChevronsUpDown className='flex-none' size={18} />
                      ))}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, rowIndex) => (
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
