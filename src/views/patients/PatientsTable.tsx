'use client'
import Breadcrumb from '@/src/components/Breadcrumbs'
import Button from '@/src/components/Button'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/Table'
import TableHeader from '@/src/components/TableHeader'
import { Locale } from '@/src/configs/i18n'
import { getLocalizedUrl } from '@/src/utils/i18n'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { SlOptionsVertical } from 'react-icons/sl'
import { TbTableOptions } from 'react-icons/tb'

const PatientsTable = () => {
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
      header: 'ID',
      width: 'max-w-12',
      col: (row: CellType) => row.id,
      sortable: true
    },
    {
      header: 'Bemor ism familiyasi',
      headerAlign: 'center',
      alignItem: 'center',
      col: (row: CellType) => row.name,
      sortable: true
    },
    {
      header: 'Tug`ilgan kun',
      col: (row: CellType) => row.birthDate,
      sortable: true
    },
    {
      header: 'Telefon raqami',
      col: (row: CellType) => row.phone
    },
    {
      header: 'Balansi',
      col: (row: CellType) => (
        <div>
          {row.balance > 0 ? (
            <div className='text-success'>+{row.balance} so`m </div>
          ) : (
            <div className='text-error'>{row.balance} so`m</div>
          )}
        </div>
      )
    },
    {
      header: 'Tashrif buyurgan',
      col: (row: CellType) => row.createdAt,
      sortable: true
    },

    { header: 'Ligota', col: (row: CellType) => 'Rezident', sortable: true },

    {
      header: 'Registrator',
      col: (row: CellType) => 'Yusupova Iroda Xasan qizi',
      sortable: true
    },
    {
      header: (
        <div className='text-center'>
          <TbTableOptions size={18} />
        </div>
      ),
      col: (row: CellType) => (
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

  const data: CellType[] = [
    {
      id: 1,
      name: 'Акулич Александр Александрович',
      birthDate: '1998-01-01',
      phone: '+998 33 332-12-14',
      createdAt: '2023-01-01',
      doctor: 'Dr. Smith',
      balance: 10000
    },
    {
      id: 2,
      name: 'Акулич Александр Александрович',
      birthDate: '1993-02-02',
      phone: '+998 33 332-12-14',
      createdAt: '2023-02-01',
      doctor: 'Dr. Smith',
      balance: 20000
    },
    {
      id: 3,
      name: 'Акулич Александр Александрович',
      birthDate: '2001-03-03',
      phone: '+998 33 332-12-14',
      createdAt: '2023-03-01',
      doctor: 'Dr. Smith',
      balance: -400
    },
    {
      id: 4,
      name: 'Акулич Александр Александрович',
      birthDate: '1995-04-04',
      phone: '+998 33 332-12-14',
      createdAt: '2023-04-01',
      doctor: 'Dr. Smith',
      balance: 400
    },
    {
      id: 5,
      name: 'Акулич Александр Александрович',
      birthDate: '1997-05-05',
      phone: '+998 33 332-12-14',
      createdAt: '2023-05-01',
      doctor: 'Dr. Smith',
      balance: -500
    }
  ]
  const classRow = (row: CellType) => {
    return row.id % 3 == 0 ? 'bg-softError ' : 'bg-softSuccess'
  }

  return (
    <div>
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

export default PatientsTable
