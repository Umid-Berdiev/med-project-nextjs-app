import classnames from 'classnames'
import React, { ReactNode } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { LuChevronsUpDown } from 'react-icons/lu'
import { PiFolderOpenLight } from 'react-icons/pi'

export interface ITableColumn<T> {
  header: string | ReactNode
  headerAlign?: 'left' | 'center' | 'right'
  alignItem?: 'left' | 'center' | 'right'
  width?: string
  col: (row: T, index?: number) => ReactNode
  sortable?: boolean
}

export interface ITableProps<T> {
  columns: ITableColumn<T>[]
  data: T[]
  hoverable?: boolean
  stripped?: boolean
  classRow?: (row: T, index: number) => string
  sortBy?: { column: string; direction: 'asc' | 'desc' }
  setSortBy?: (column: string) => void
}

export default function Table<T>({
  columns = [],
  data = [],
  hoverable = false,
  stripped = true,
  classRow = () => '',
  sortBy,
  setSortBy
}: ITableProps<T>) {
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
    <div className='mt-4 h-full'>
      {data.length ? (
        <div
          className='overflow-x-auto
        '
        >
          <table className={`table ${stripped ? 'table-zebra' : ''}`}>
            <thead className='rounded'>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className={`bg-white ${column.width ?? ''}`}
                    onClick={() =>
                      column.sortable &&
                      setSortBy &&
                      typeof column.header === 'string' &&
                      setSortBy(column.header)
                    }
                  >
                    <span
                      className={classnames(
                        'flex cursor-pointer flex-row items-center gap-2',
                        column.headerAlign
                          ? `justify-${column.headerAlign}`
                          : 'justify-left'
                      )}
                    >
                      <span className='font-bold  normal-case text-textDark'>
                        {column.header}
                      </span>
                      {column.sortable &&
                        (sortBy?.column === column.header ? (
                          sortBy?.direction === 'asc' ? (
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
                  className={`${
                    hoverable ? 'hover:bg-gray-100' : ''
                  } ${classRow(row, rowIndex)}`}
                  key={rowIndex}
                >
                  {columns.map((column, columnIndex) => (
                    <td
                      className={classnames(
                        'px-4 py-2.5 font-medium ',
                        column.alignItem
                          ? `text-${column.alignItem}`
                          : 'text-left',
                        column.width ?? ''
                      )}
                      key={columnIndex}
                    >
                      <span className='inline-flex w-full'>
                        {column.col(row, rowIndex + 1)}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
