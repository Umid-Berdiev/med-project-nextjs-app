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

const DoctorsProfileTable = () => {
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
      header: 'Tashrif buyurgan',
      col: (row: CellType) => row.createdAt,
      sortable: true
    },

    { header: 'Vrach', col: (row: CellType) => row.doctor, sortable: true },
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
      name: 'Alice',
      birthDate: '1998-01-01',
      phone: '1234567890',
      createdAt: '2023-01-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 2,
      name: 'Bob',
      birthDate: '1993-02-02',
      phone: '1234567891',
      createdAt: '2023-02-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 3,
      name: 'Charlie',
      birthDate: '2001-03-03',
      phone: '1234567892',
      createdAt: '2023-03-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 4,
      name: 'David',
      birthDate: '1995-04-04',
      phone: '1234567893',
      createdAt: '2023-04-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 5,
      name: 'Eve',
      birthDate: '1997-05-05',
      phone: '1234567894',
      createdAt: '2023-05-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 6,
      name: 'Frank',
      birthDate: '1988-06-06',
      phone: '1234567895',
      createdAt: '2023-06-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 7,
      name: 'George',
      birthDate: '1999-07-07',
      phone: '1234567896',
      createdAt: '2023-07-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 8,
      name: 'Hannah',
      birthDate: '1995-08-08',
      phone: '1234567897',
      createdAt: '2023-08-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 9,
      name: 'Ivan',
      birthDate: '1996-09-09',
      phone: '1234567898',
      createdAt: '2023-09-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 10,
      name: 'John',
      birthDate: '1999-10-10',
      phone: '1234567899',
      createdAt: '2023-10-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 11,
      name: 'Katie',
      birthDate: '1994-11-11',
      phone: '1234567800',
      createdAt: '2023-11-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 12,
      name: 'Liam',
      birthDate: '1992-12-12',
      phone: '1234567801',
      createdAt: '2023-12-01',
      doctor: 'Dr. Smith'
    },
    {
      id: 13,
      name: 'Mia',
      birthDate: '1991-01-13',
      phone: '1234567802',
      createdAt: '2023-01-13',
      doctor: 'Dr. Smith'
    },
    {
      id: 14,
      name: 'Nathan',
      birthDate: '1990-02-14',
      phone: '1234567803',
      createdAt: '2023-02-14',
      doctor: 'Dr. Smith'
    },
    {
      id: 15,
      name: 'Olivia',
      birthDate: '1989-03-15',
      phone: '1234567804',
      createdAt: '2023-03-15',
      doctor: 'Dr. Smith'
    },
    {
      id: 16,
      name: 'Peter',
      birthDate: '1988-04-16',
      phone: '1234567805',
      createdAt: '2023-04-16',
      doctor: 'Dr. Smith'
    },
    {
      id: 17,
      name: 'Quinn',
      birthDate: '1987-05-17',
      phone: '1234567806',
      createdAt: '2023-05-17',
      doctor: 'Dr. Smith'
    },
    {
      id: 18,
      name: 'Robert',
      birthDate: '1986-06-18',
      phone: '1234567807',
      createdAt: '2023-06-18',
      doctor: 'Dr. Smith'
    },
    {
      id: 19,
      name: 'Sarah',
      birthDate: '1985-07-19',
      phone: '1234567808',
      createdAt: '2023-07-19',
      doctor: 'Dr. Smith'
    },
    {
      id: 20,
      name: 'Tom',
      birthDate: '1984-08-20',
      phone: '1234567809',
      createdAt: '2023-08-20',
      doctor: 'Dr. Smith'
    },
    {
      id: 21,
      name: 'Ursula',
      birthDate: '1983-09-21',
      phone: '1234567810',
      createdAt: '2023-09-21',
      doctor: 'Dr. Smith'
    },
    {
      id: 22,
      name: 'Victor',
      birthDate: '1982-10-22',
      phone: '1234567811',
      createdAt: '2023-10-22',
      doctor: 'Dr. Smith'
    },
    {
      id: 23,
      name: 'Wendy',
      birthDate: '1981-11-23',
      phone: '1234567812',
      createdAt: '2023-11-23',
      doctor: 'Dr. Smith'
    },
    {
      id: 24,
      name: 'Xavier',
      birthDate: '1980-12-24',
      phone: '1234567813',
      createdAt: '2023-12-24',
      doctor: 'Dr. Smith'
    },
    {
      id: 25,
      name: 'Yvonne',
      birthDate: '1979-01-25',
      phone: '1234567814',
      createdAt: '2023-01-25',
      doctor: 'Dr. Smith'
    },
    {
      id: 26,
      name: 'Zach',
      birthDate: '1978-02-26',
      phone: '1234567815',
      createdAt: '2023-02-26',
      doctor: 'Dr. Smith'
    }
  ]
  const classRow = (row: CellType) => {
    return row.id % 3 == 0 ? 'bg-softError ' : 'bg-softSuccess'
  }

  return (
    <div>
      <Breadcrumb breadcrumbs={[{ label: 'Shifokor kabineti' }]} />
      <TableHeader
        title='Shifokor kabineti'
        actions={
          <>
            <Button variant='text' color='primary'>
              Filter
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

export default DoctorsProfileTable
