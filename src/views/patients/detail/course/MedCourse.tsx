'use client'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import { Locale } from '@/src/configs/i18n'
import { getLocalizedUrl } from '@/src/utils/i18n'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import { TbTableOptions } from 'react-icons/tb'
import NoData from '@/src/components/table/NoData'
import { BsPrinterFill } from 'react-icons/bs'
import { BiPrinter } from 'react-icons/bi'

const MedCourse = () => {
  const t = useTranslations('')
  const [sortBy, setSortBy] = useState<
    | {
        column: string
        direction: 'asc' | 'desc'
      }
    | undefined
  >(undefined)
  const [perPage, setPerPage] = useState(10)
  const [page, setPage] = useState(0)
  const { locale } = useParams()
  const handleSort = (column: string) => {
    setSortBy(prev =>
      prev?.column === column
        ? { column, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { column, direction: 'asc' }
    )
  }
  type CellType = {
    id: number
    name: string
    birthDate: string
    phone: string
    createdAt: string
    doctor: string
    balance: number
    ligota?: string
  }
  const columns: ITableColumn<CellType>[] = [
    {
      header: '№',
      width: 'max-w-12',

      col: (_: CellType, index?: number) =>
        index !== undefined ? index + 1 : 0
    },
    {
      header: t('ID'),
      width: 'max-w-12',
      col: (row: CellType) => row.id,
      sortable: true
    },
    {
      header: t('Bemor ism familiyasi'),
      headerAlign: 'center',
      alignItem: 'center',
      col: (row: CellType) => row.name,
      sortable: true
    },
    {
      header: t('Pechat'),
      col: (row: CellType) => (
        <span className='  px-2 py-1 text-xs  text-[#845ADF]'>
          Tashriflar ro’yxati
        </span>
      ),
      sortable: true
    }
  ]

  const data: CellType[] = [
    {
      id: 1,
      name: 'Акулич Александр Александрович',
      birthDate: '1998-01-01',
      phone: '+998 33 332-12-14',
      createdAt: '2023-01-01',
      doctor: 'Dr. Smith',
      balance: 10000
    }
  ]

  return (
    <div>
      <Table
        columns={columns}
        data={data.slice(page * perPage, page * perPage + perPage)}
        sortBy={sortBy}
        setSortBy={handleSort}
        hoverable={false}
        stripped={true}
      />
      <Pagination
        page={page}
        size={perPage}
        totalCount={data.length}
        changeCurrentPage={e => setPage(e)}
        changePerPage={e => setPerPage(e)}
      />
    </div>
  )
}

export default MedCourse