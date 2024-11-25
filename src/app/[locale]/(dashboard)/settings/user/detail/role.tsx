'use client'

import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputCheckbox from '@/src/components/forms/AppInputCheckbox'
import AppInputDate from '@/src/components/forms/AppInputDate'
import AppInputRadioRound from '@/src/components/forms/AppInputRadioRound'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import UserDeleteIcon from '@/src/components/icons/UserDeleteIcon'
import UserEditIcon from '@/src/components/icons/UserEditIcon'
import UserViewIcon from '@/src/components/icons/UserViewIcon'
import Modal from '@/src/components/Modal'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function UserRoleWrapper() {
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
  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  type UserTableCellType = {
    name: string
    order: string
    createdDate: string
    changedDate: string
  }

  const columns: ITableColumn<UserTableCellType>[] = [
    {
      header: '№',
      col: (_: UserTableCellType, index?: number) =>
        index !== undefined ? index + 1 : 0
    },
    {
      header: t('Nomi'),
      col: (row: UserTableCellType) => row.name,
      sortable: true
    },
    {
      header: t('Tartib'),
      col: (row: UserTableCellType) => row.order,
      sortable: true
    },
    {
      header: t('Yaratilgan sana'),
      col: (row: UserTableCellType) => row.createdDate,
      sortable: true
    },
    {
      header: t('O’zgartirilgan sana'),
      col: (row: UserTableCellType) => row.changedDate,
      sortable: true
    },
    {
      header: t('Amallar'),
      col: (row: UserTableCellType) => (
        <div className='flex items-center gap-3'>
          <Link
            href='#'
            className='flex size-7 items-center justify-center rounded bg-white shadow-sm'
          >
            <UserViewIcon />
          </Link>
          <Link
            href='#'
            className='flex size-7 items-center justify-center rounded bg-white shadow-sm'
          >
            <UserEditIcon />
          </Link>
          <Link
            href='#'
            onClick={() => setOpenDelete(true)}
            className='flex size-7 items-center justify-center rounded bg-white shadow-sm'
          >
            <UserDeleteIcon />
          </Link>
        </div>
      )
    }
  ]

  const userTableData: UserTableCellType[] = [
    {
      name: 'Apteka',
      changedDate: '1998-01-01',
      createdDate: '1998-01-01',
      order: '12'
    },
    {
      name: 'Bosh hisobchi',
      changedDate: '1993-02-02',
      createdDate: '1993-02-02',
      order: '12'
    },
    {
      name: 'Buxgalteriya',
      changedDate: '2001-03-03',
      createdDate: '2001-03-03',
      order: '12'
    },
    {
      name: 'David',
      changedDate: '1995-04-04',
      createdDate: '1995-04-04',
      order: '12'
    },
    {
      name: 'Apteka',
      changedDate: '1997-05-05',
      createdDate: '1997-05-05',
      order: '12'
    },
    {
      name: 'Frank',
      changedDate: '1988-06-06',
      createdDate: '1988-06-06',
      order: '12'
    },
    {
      name: 'George',
      changedDate: '1999-07-07',
      createdDate: '1999-07-07',
      order: '12'
    },
    {
      name: 'Hannah',
      changedDate: '1995-08-08',
      createdDate: '1995-08-08',
      order: '12'
    },
    {
      name: 'Ivan',
      changedDate: '1996-09-09',
      createdDate: '1996-09-09',
      order: '12'
    },
    {
      name: 'John',
      changedDate: '1999-10-10',
      createdDate: '1999-10-10',
      order: '12'
    },
    {
      name: 'Katie',
      changedDate: '1994-11-11',
      createdDate: '1994-11-11',
      order: '12'
    },
    {
      name: 'Liam',
      changedDate: '1992-12-12',
      createdDate: '1992-12-12',
      order: '12'
    },
    {
      name: 'Mia',
      changedDate: '1991-01-13',
      createdDate: '1991-01-13',
      order: '12'
    },
    {
      name: 'Nathan',
      changedDate: '1990-02-14',
      createdDate: '1990-02-14',
      order: '12'
    },
    {
      name: 'Olivia',
      changedDate: '1989-03-15',
      createdDate: '1989-03-15',
      order: '12'
    },
    {
      name: 'Peter',
      changedDate: '1988-04-16',
      createdDate: '1988-04-16',
      order: '12'
    },
    {
      name: 'Quinn',
      changedDate: '1987-05-17',
      createdDate: '1987-05-17',
      order: '12'
    },
    {
      name: 'Robert',
      changedDate: '1986-06-18',
      createdDate: '1986-06-18',
      order: '12'
    },
    {
      name: 'Sarah',
      changedDate: '1985-07-19',
      createdDate: '1985-07-19',
      order: '12'
    },
    {
      name: 'Tom',
      changedDate: '1984-08-20',
      createdDate: '1984-08-20',
      order: '12'
    },
    {
      name: 'Ursula',
      changedDate: '1983-09-21',
      createdDate: '1983-09-21',
      order: '12'
    },
    {
      name: 'Victor',
      changedDate: '1982-10-22',
      createdDate: '1982-10-22',
      order: '12'
    },
    {
      name: 'Wendy',
      changedDate: '1981-11-23',
      createdDate: '1981-11-23',
      order: '12'
    },
    {
      name: 'Xavier',
      changedDate: '1980-12-24',
      createdDate: '1980-12-24',
      order: '12'
    },
    {
      name: 'Yvonne',
      changedDate: '1979-01-25',
      createdDate: '1979-01-25',
      order: '12'
    },
    {
      name: 'Zach',
      changedDate: '1978-02-26',
      createdDate: '1978-02-26',
      order: '12'
    }
  ]

  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseDelete = () => {
    setOpenDelete(false)
  }

  return (
    <>
      <div className='flex items-center justify-between'>
        <AppInput className='max-w-60' isSearch={true} placeholder='Qidirish' />
        <Button onClick={() => setOpen(!open)}>
          {t('Qo’shish')}{' '}
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.99984 1.66675C14.6022 1.66675 18.3332 5.39771 18.3332 10.0001C18.3332 14.6025 14.6022 18.3334 9.99984 18.3334C5.39746 18.3334 1.6665 14.6025 1.6665 10.0001C1.6665 5.39771 5.39746 1.66675 9.99984 1.66675ZM9.99984 5.83342C9.68342 5.83342 9.42193 6.06854 9.38054 6.37361L9.37484 6.45842V9.37508H6.45817C6.11299 9.37508 5.83317 9.6549 5.83317 10.0001C5.83317 10.3165 6.0683 10.578 6.37336 10.6194L6.45817 10.6251H9.37484V13.5417C9.37484 13.8869 9.65466 14.1667 9.99984 14.1667C10.3163 14.1667 10.5777 13.9316 10.6191 13.6266L10.6248 13.5417V10.6251H13.5415C13.8867 10.6251 14.1665 10.3453 14.1665 10.0001C14.1665 9.68367 13.9314 9.42217 13.6263 9.38079L13.5415 9.37508H10.6248V6.45842C10.6248 6.11324 10.345 5.83342 9.99984 5.83342Z'
              fill='white'
            />
          </svg>
        </Button>
      </div>
      <Table
        columns={columns}
        data={userTableData.slice(page * perPage, page * perPage + perPage)}
        sortBy={sortBy}
        setSortBy={handleSort}
        hoverable={false}
        stripped={false}
      />
      <Pagination
        page={page}
        size={perPage}
        totalCount={userTableData.length}
        changeCurrentPage={e => setPage(e)}
        changePerPage={e => setPerPage(e)}
      />

      <Modal
        bg='bg-background'
        title='Qo’shish'
        open={open}
        size='lg'
        onClose={handleClose}
      >
        <div className='rounded-2xl border border-[#E9EAEA]'>
          <div className='mb-6 grid grid-cols-12 gap-4 overflow-hidden  rounded-2xl bg-white p-4'>
            <div className='col-span-2'>
              <AppLabel isRequired={true} text='Nomi' />
              <AppInput value='36764' placeholder='Nomi' />
            </div>
            <div className='col-span-2'>
              <AppLabel isRequired={true} text='Tartib' />
              <AppInput value='36764' placeholder='Tartib' />
            </div>
            <div className='col-span-2'>
              <AppLabel isRequired={true} text='Aktiv' />
              <AppSelect
                options={[
                  { label: 'Aktiv1', value: '0' },
                  { label: 'Aktiv2', value: '2' }
                ]}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end gap-1 py-2'>
          <Button onClick={handleClose} variant='contained' color='secondary'>
            {t('Qoshish')}
          </Button>
        </div>
      </Modal>

      <Modal
        bg='bg-[#F9F9F9]'
        title='Ochirib yuborish'
        open={openDelete}
        size='lg/2'
        onClose={handleCloseDelete}
      >
        <div className='my-4 block bg-white p-6'>
          <p className='text-center'>
            Siz ushbu <b> Bosh hisobchi </b> rollini o’chirib yubormoqchimisiz?
          </p>
        </div>
        <div className='flex justify-end gap-1 py-2'>
          <Button
            variant='outlined'
            color='secondary'
            onClick={handleCloseDelete}
          >
            {t('Bekor qilish')}
          </Button>
          <Button variant='contained' className='bg-[#E6533C]' color='error'>
            {t('O’chirish')}
          </Button>
        </div>
      </Modal>
    </>
  )
}
