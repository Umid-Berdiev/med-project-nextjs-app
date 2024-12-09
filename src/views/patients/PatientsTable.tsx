'use client'
import Pagination from '@/src/components/pagination/Pagination'
import NoData from '@/src/components/table/NoData'
import Table, { ITableColumn } from '@/src/components/table/Table'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { getLocalizedUrl } from '@/src/utils/i18n'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import { TbTableOptions } from 'react-icons/tb'
import FilterPatients from './FilterPatients'

const PatientsTable = ({ openFilter }: { openFilter: boolean }) => {
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
      header: t("Tug'ilgan kun"),
      col: (row: CellType) => row.birthDate,
      sortable: true
    },
    {
      header: t('Telefon raqami'),
      width: 'w-48',

      col: (row: CellType) => row.phone
    },
    {
      header: t('Balansi'),
      width: 'w-48',

      col: (row: CellType) => (
        <div>
          {row.balance > 0 ? (
            <div className='text-success'>+{row.balance}</div>
          ) : (
            <div className='text-error'>{row.balance}</div>
          )}{' '}
          + {"so'm"}
        </div>
      )
    },
    {
      header: t('Tashrif buyurgan'),
      col: (row: CellType) => row.createdAt,
      sortable: true
    },

    { header: t('Ligota'), col: (row: CellType) => 'Rezident', sortable: true },

    {
      header: t('Registrator'),
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
            className='menu dropdown-content z-50 w-52 rounded-lg bg-base-100 p-2 shadow'
          >
            <li>
              <Link
                href={getLocalizedUrl(`patients/${row.id}`, locale as Locale)}
              >
                {t("Ko'rish")}
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
      {openFilter && <FilterPatients />}
      {data.length > 0 ? (
        <>
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
        </>
      ) : (
        <NoData />
      )}
    </div>
  )
}

export default PatientsTable
