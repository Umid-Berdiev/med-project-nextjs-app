'use client'
import Breadcrumb from '@/src/components/Breadcrumbs'
import Button from '@/src/components/Button'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import TableHeader from '@/src/components/table/TableHeader'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { getLocalizedUrl } from '@/src/utils/i18n'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { SlOptionsVertical } from 'react-icons/sl'
import { TbTableOptions } from 'react-icons/tb'

export default function CashboxPage() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [sortBy, setSortBy] = useState<
    | {
        column: string
        direction: 'asc' | 'desc'
      }
    | undefined
  >(undefined)
  const [perPage, setPerPage] = useState(10)
  const [page, setPage] = useState(0)
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
    balance: string
    phone: string
    createdAt: string
    filial: string
    ligota: string
  }
  const columns: ITableColumn<CellType>[] = [
    {
      header: '№',
      col: (_: CellType, index?: number) =>
        index !== undefined ? index + 1 : 0
    },
    {
      header: 'ID',
      headerAlign: 'center',
      alignItem: 'center',
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
      header: t('Telefon raqami'),
      col: (row: CellType) => row.phone
    },
    {
      header: t('Balans'),
      col: (row: CellType) => row.balance,
      sortable: true
    },
    {
      header: t('Ligota'),
      col: (row: CellType) => row.ligota,
      sortable: true
    },
    {
      header: t('Tashrif sanasi'),
      col: (row: CellType) => row.createdAt,
      sortable: true
    },

    { header: t('Filial'), col: (row: CellType) => row.filial, sortable: true },
    {
      header: (
        <div className='text-center'>
          <TbTableOptions size={18} />
        </div>
      ),
      col: (row: CellType) => (
        <div className='dropdown dropdown-left dropdown-bottom'>
          <div tabIndex={0} role='button' className='btn bg-white'>
            <SlOptionsVertical size={14} />
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content z-50 w-52 rounded-lg bg-base-100 p-2 shadow'
          >
            <li>
              <Link
                href={getLocalizedUrl(`cashbox/${row.id}`, locale as Locale)}
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

  const data: CellType[] = [
    {
      id: 1,
      name: 'Alice',
      balance: '1998,01 som',
      phone: '+998 93 456 78 90',
      createdAt: '2023-01-01',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 2,
      name: 'Bob',
      balance: '1993,02 som',
      phone: '+998 93 456 78 91',
      createdAt: '2023-02-01',
      ligota: 'Norezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 3,
      name: 'Charlie',
      balance: '2001,03 som',
      phone: '+998 93 456 78 92',
      createdAt: '2023-03-01',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 4,
      name: 'David',
      balance: '1995,04 som',
      phone: '+998 93 456 78 93',
      createdAt: '2023-04-01',
      ligota: 'Order',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 5,
      name: 'Eve',
      balance: '1997,05 som',
      phone: '+998 93 456 78 94',
      createdAt: '2023-05-01',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 6,
      name: 'Frank',
      balance: '1988,06 som',
      phone: '+998 93 456 78 95',
      createdAt: '2023-06-01',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 7,
      name: 'George',
      balance: '1999,07 som',
      phone: '+998 93 456 78 96',
      createdAt: '2023-07-01',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 8,
      name: 'Hannah',
      balance: '1995,08 som',
      phone: '+998 93 456 78 97',
      createdAt: '2023-08-01',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 9,
      name: 'Ivan',
      balance: '1996,09 som',
      phone: '+998 93 456 78 98',
      createdAt: '2023-09-01',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 10,
      name: 'John',
      balance: '1999,10 som',
      phone: '+998 93 456 78 99',
      createdAt: '2023-10-01',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 11,
      name: 'Katie',
      balance: '1994,11 som',
      phone: '+998 93 456 78 00',
      createdAt: '2023-11-01',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 12,
      name: 'Liam',
      balance: '1992,12 som',
      phone: '+998 93 456 78 01',
      createdAt: '2023-12-01',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 13,
      name: 'Mia',
      balance: '1991,01 som',
      phone: '+998 93 456 78 02',
      createdAt: '2023-01-13',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 14,
      name: 'Nathan',
      balance: '1990,02 som',
      phone: '+998 93 456 78 03',
      createdAt: '2023-02-14',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 15,
      name: 'Olivia',
      balance: '1989,03 som',
      phone: '+998 93 456 78 04',
      createdAt: '2023-03-15',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 16,
      name: 'Peter',
      balance: '1988,04 som',
      phone: '+998 93 456 78 05',
      createdAt: '2023-04-16',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 17,
      name: 'Quinn',
      balance: '1987,05 som',
      phone: '+998 93 456 78 06',
      createdAt: '2023-05-17',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 18,
      name: 'Robert',
      balance: '1986,06 som',
      phone: '+998 93 456 78 07',
      createdAt: '2023-06-18',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 19,
      name: 'Sarah',
      balance: '1985,07 som',
      phone: '+998 93 456 78 08',
      createdAt: '2023-07-19',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 20,
      name: 'Tom',
      balance: '1984,08 som',
      phone: '+998 93 456 78 09',
      createdAt: '2023-08-20',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 21,
      name: 'Ursula',
      balance: '1983,09 som',
      phone: '+998 93 456 78 10',
      createdAt: '2023-09-21',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 22,
      name: 'Victor',
      balance: '1982,10 som',
      phone: '+998 93 456 78 11',
      createdAt: '2023-10-22',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 23,
      name: 'Wendy',
      balance: '1981,11 som',
      phone: '+998 93 456 78 12',
      createdAt: '2023-11-23',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 24,
      name: 'Xavier',
      balance: '1980,12 som',
      phone: '+998 93 456 78 13',
      createdAt: '2023-12-24',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 25,
      name: 'Yvonne',
      balance: '1979,01 som',
      phone: '+998 93 456 78 14',
      createdAt: '2023-01-25',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    },
    {
      id: 26,
      name: 'Zach',
      balance: '1978,02 som',
      phone: '+998 93 456 78 15',
      createdAt: '2023-02-26',
      ligota: 'Rezident',
      filial: 'Toshkent, Yunusobod'
    }
  ]
  const classRow = (row: CellType) => {
    return row.id % 3 == 0 ? 'bg-softError ' : 'bg-softSuccess'
  }
  return (
    <div className='container'>
      <Breadcrumb breadcrumbs={[{ label: 'Kassa' }]} />
      <TableHeader
        title='Kassa'
        actions={
          <>
            <Button variant='text' color='primary'>
              <span className='border-b border-dashed border-secondary'>
                {t('Filtr')}
              </span>
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<FaFileAlt />}
            >
              Export
            </Button>
          </>
        }
      />
      <Table
        columns={columns}
        data={data.slice(page * perPage, page * perPage + perPage)}
        sortBy={sortBy}
        setSortBy={handleSort}
        classRow={classRow}
        hoverable={false}
        stripped={false}
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
