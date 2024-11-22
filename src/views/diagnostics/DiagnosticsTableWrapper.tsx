'use client'

import Button from '@/src/components/Button'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import TableHeader from '@/src/components/table/TableHeader'
import { Locale } from '@/src/configs/i18n'
import { getLocalizedUrl } from '@/src/utils/i18n'
import { DiagnosticsTableCellType } from '@/src/utils/interfaces'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { SlOptionsVertical } from 'react-icons/sl'
import { TbTableOptions } from 'react-icons/tb'
import { diagnosticsTableData } from './mock-data'

export default function DiagnosticsTableWrapper() {
  const t = useTranslations()
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

  const columns: ITableColumn<DiagnosticsTableCellType>[] = [
    {
      header: '№',
      col: (_: DiagnosticsTableCellType, index?: number) =>
        index !== undefined ? index + 1 : 0
    },
    {
      header: 'ID',
      headerAlign: 'center',
      alignItem: 'center',
      col: (row: DiagnosticsTableCellType) => row.id,
      sortable: true
    },
    {
      header: t('Bemor ism familiyasi'),
      headerAlign: 'center',
      alignItem: 'center',
      col: (row: DiagnosticsTableCellType) => row.name,
      sortable: true
    },
    {
      header: t('Xizmatlar soni'),
      col: (row: DiagnosticsTableCellType) => row.service_count,
      sortable: true
    },
    {
      header: t('Jami summa'),
      col: (row: DiagnosticsTableCellType) => row.total_sum,
      sortable: true
    },
    {
      header: t('Holati'),
      col: (row: DiagnosticsTableCellType) => row.status,
      sortable: true
    },
    {
      header: t('Tugilgan kuni'),
      col: (row: DiagnosticsTableCellType) => row.birthDate,
      sortable: true
    },
    {
      header: t('Telefon raqami'),
      col: (row: DiagnosticsTableCellType) => row.phone
    },
    {
      header: t('Sana'),
      col: (row: DiagnosticsTableCellType) => row.createdAt,
      sortable: true
    },
    {
      header: (
        <div className='text-center'>
          <TbTableOptions size={18} />
        </div>
      ),
      col: (row: DiagnosticsTableCellType) => (
        <div className='dropdown dropdown-left dropdown-bottom'>
          <div tabIndex={0} role='button' className='btn'>
            <SlOptionsVertical size={14} />
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content  z-[1000] w-52 rounded-s-md bg-base-100 p-2 shadow'
          >
            <li>
              <Link
                href={getLocalizedUrl(
                  `doctors-profile/${row.id}/patient-examination`,
                  locale as Locale
                )}
              >
                Ko`rish
              </Link>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      )
    }
  ]

  const classRow = (row: DiagnosticsTableCellType) => {
    return row.id % 3 == 0 ? 'bg-softError ' : 'bg-softSuccess'
  }

  return (
    <>
      <TableHeader
        title={t('Diagnostics')}
        actions={
          <>
            <Button variant='text' color='primary'>
              {t('Filtr')}
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<FaFileAlt />}
            >
              {t('Eksport')}
            </Button>
          </>
        }
      />
      <Table
        columns={columns}
        data={diagnosticsTableData.slice(
          page * perPage,
          page * perPage + perPage
        )}
        sortBy={sortBy}
        setSortBy={handleSort}
        classRow={classRow}
        hoverable={false}
        stripped={false}
      />
      <Pagination
        page={page}
        size={perPage}
        totalCount={diagnosticsTableData.length}
        changeCurrentPage={e => setPage(e)}
        changePerPage={e => setPerPage(e)}
      />
    </>
  )
}
