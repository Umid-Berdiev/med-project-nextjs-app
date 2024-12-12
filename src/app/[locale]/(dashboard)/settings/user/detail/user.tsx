'use client'

import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputCheckbox from '@/src/components/forms/AppInputCheckbox'
import AppInputDate from '@/src/components/forms/AppInputDate'
import AppInputRadioRound from '@/src/components/forms/AppInputRadioRound'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import EyeIcon from '@/src/components/icons/EyeIcon'
import PencilIcon from '@/src/components/icons/PencilIcon'
import PlusCircleIcon from '@/src/components/icons/PlusCircleIcon'
import Modal from '@/src/components/Modal'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function UserTableWrapper() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const passwordChangeOptions = [
    { label: 'Ha', value: '1' },
    { label: 'Yoq', value: '0' }
  ]
  const handleTabChange = (selectedValue: string) => {
    console.log(`Selected tab: ${selectedValue}`)
  }
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
    fullname: string
    position: string
    login: string
    filial: string
    role: string
    registrationDate: string
    lastDate: string
  }

  const columns: ITableColumn<UserTableCellType>[] = [
    {
      header: t('FISh'),
      // headerAlign: 'center',
      // alignItem: 'center',
      col: (row: UserTableCellType) => row.fullname,
      sortable: true
    },
    {
      header: t('Lavozimi'),
      col: (row: UserTableCellType) => row.position,
      sortable: true
    },
    {
      header: t('Login'),
      col: (row: UserTableCellType) => row.login,
      sortable: true
    },
    {
      header: t('Filial'),
      col: (row: UserTableCellType) => row.filial,
      sortable: true
    },
    {
      header: t('Roll'),
      col: (row: UserTableCellType) => row.role,
      sortable: true
    },
    {
      header: t('Registratsiya sanasi'),
      col: (row: UserTableCellType) => row.registrationDate
    },
    {
      header: t('Oxirgi kirilgan sana'),
      col: (row: UserTableCellType) => row.lastDate,
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
            <EyeIcon />
          </Link>
          <Link
            href='#'
            className='flex size-7 items-center justify-center rounded bg-white shadow-sm'
          >
            <PencilIcon />
          </Link>
          <Link
            href='#'
            onClick={() => setOpenDelete(true)}
            className='text-danger flex size-7 items-center justify-center rounded bg-white p-0 shadow-sm'
          >
            <DeleteIcon />
          </Link>
        </div>
      )
    }
  ]

  const userTableData: UserTableCellType[] = [
    {
      fullname: 'Alice',
      registrationDate: '1998-01-01',
      position: 'Hamshira',
      lastDate: '2023-01-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Bob',
      registrationDate: '1993-02-02',
      position: 'Hamshira',
      lastDate: '2023-02-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Charlie',
      registrationDate: '2001-03-03',
      position: 'Hamshira',
      lastDate: '2023-03-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'David',
      registrationDate: '1995-04-04',
      position: 'Hamshira',
      lastDate: '2023-04-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Eve',
      registrationDate: '1997-05-05',
      position: 'Hamshira',
      lastDate: '2023-05-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Frank',
      registrationDate: '1988-06-06',
      position: 'Hamshira',
      lastDate: '2023-06-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'George',
      registrationDate: '1999-07-07',
      position: 'Hamshira',
      lastDate: '2023-07-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Hannah',
      registrationDate: '1995-08-08',
      position: 'Hamshira',
      lastDate: '2023-08-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Ivan',
      registrationDate: '1996-09-09',
      position: 'Hamshira',
      lastDate: '2023-09-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'John',
      registrationDate: '1999-10-10',
      position: 'Hamshira',
      lastDate: '2023-10-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Katie',
      registrationDate: '1994-11-11',
      position: 'Hamshira',
      lastDate: '2023-11-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Liam',
      registrationDate: '1992-12-12',
      position: 'Hamshira',
      lastDate: '2023-12-01',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Mia',
      registrationDate: '1991-01-13',
      position: 'Hamshira',
      lastDate: '2023-01-13',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Nathan',
      registrationDate: '1990-02-14',
      position: 'Hamshira',
      lastDate: '2023-02-14',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Olivia',
      registrationDate: '1989-03-15',
      position: 'Hamshira',
      lastDate: '2023-03-15',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Peter',
      registrationDate: '1988-04-16',
      position: 'Hamshira',
      lastDate: '2023-04-16',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Quinn',
      registrationDate: '1987-05-17',
      position: 'Hamshira',
      lastDate: '2023-05-17',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Robert',
      registrationDate: '1986-06-18',
      position: 'Hamshira',
      lastDate: '2023-06-18',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Sarah',
      registrationDate: '1985-07-19',
      position: 'Hamshira',
      lastDate: '2023-07-19',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Tom',
      registrationDate: '1984-08-20',
      position: 'Hamshira',
      lastDate: '2023-08-20',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Ursula',
      registrationDate: '1983-09-21',
      position: 'Hamshira',
      lastDate: '2023-09-21',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Victor',
      registrationDate: '1982-10-22',
      position: 'Hamshira',
      lastDate: '2023-10-22',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Wendy',
      registrationDate: '1981-11-23',
      position: 'Hamshira',
      lastDate: '2023-11-23',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Xavier',
      registrationDate: '1980-12-24',
      position: 'Hamshira',
      lastDate: '2023-12-24',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Yvonne',
      registrationDate: '1979-01-25',
      position: 'Hamshira',
      lastDate: '2023-01-25',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
    },
    {
      fullname: 'Zach',
      registrationDate: '1978-02-26',
      position: 'Hamshira',
      lastDate: '2023-02-26',
      role: 'Katta hamshira',
      filial: 'Statsionar shifokori',
      login: 'mt.sea'
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
        <div className='w-full max-w-72'>
          <AppInput isSearch iconPosition='right' placeholder={t('Qidirish')} />
        </div>
        <Button onClick={() => setOpen(!open)}>
          {t('Qo’shish')} <PlusCircleIcon />
        </Button>
      </div>
      <Table
        className='bg-white'
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
        <div className='grid grid-cols-12 gap-4'>
          <RoundedBlock className='col-span-6 !block'>
            <h5 className='mb-4 text-lg'>
              {t('Foydalanuvchi haqida malumot')}
            </h5>
            <div className='mb-3 grid grid-cols-12 gap-4'>
              <div className='col-span-6'>
                <AppLabel isRequired text={t('FISh')} />
                <AppInput placeholder={t('FISh ni kiriting')} />
              </div>
              <div className='col-span-6'>
                <AppLabel isRequired text={t('Login')} />
                <AppInput placeholder={t('Login ni kiriting')} />
              </div>
            </div>
            <div>
              <AppLabel text={t('Parolni o’zgartirish')} />
              <AppInputRadioRound
                onChange={handleTabChange}
                options={passwordChangeOptions}
              />
            </div>
            <div className='mb-4 grid grid-cols-12 gap-x-2 gap-y-4'>
              <div className='col-span-7'>
                <AppLabel isRequired text={t('Yangi parol')} />
                <AppInput placeholder={t('Yangi parolni kiriting')} />
              </div>
              <div className='col-span-5'>
                <AppLabel
                  className='mb-2 block text-sm opacity-0'
                  isRequired
                  text={t('Yangi parol')}
                />
                <Button className='w-full'>
                  {t('Parolni generatsiya qilish')}
                </Button>
              </div>
            </div>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-6'>
                <AppLabel isRequired text={t('Filial')} />
                <AppSelect
                  placeholder={t('Filialni tanlang')}
                  options={[
                    { value: '1', label: 'Filial1' },
                    { value: '2', label: 'Filial2' },
                    { value: '3', label: 'Filial3' }
                  ]}
                />
              </div>
              <div className='col-span-6'>
                <AppLabel isRequired text={t('Foydalanuvchi roli')} />
                <AppSelect
                  placeholder={t('Rolni tanlang')}
                  options={[
                    { value: '1', label: 'Rol1' },
                    { value: '2', label: 'Rol2' },
                    { value: '3', label: 'Rol3' }
                  ]}
                />
              </div>
              <div className='col-span-6'>
                <AppLabel isRequired text={t('Hamkor ID')} />
                <AppInput placeholder={t('Id ni kiriting')} />
              </div>
              <div className='col-span-6'>
                <AppLabel isRequired text={t('Telefon raqam')} />
                <AppInput placeholder={t('Telefon raqam kiriting')} />
              </div>
              <div className='col-span-6 mb-3'>
                <AppLabel text={t('Tug’ilgan sanasi')} />
                <AppInputDate
                  mode='single'
                  placeholder={t('Tug’ilgan sanasi')}
                />
              </div>
            </div>
            <div className=''>
              <AppLabel text={t('Jinsi')} />
              <AppInputRadioRound
                onChange={handleTabChange}
                options={[
                  { value: '1', label: 'Erkak' },
                  { value: '0', label: 'Ayol' }
                ]}
              />
            </div>
            <div>
              <AppLabel text={t('Faqat ozini hisobotini korish')} />
              <AppInputRadioRound
                onChange={handleTabChange}
                options={[
                  { value: '10', label: 'Ha' },
                  { value: '11', label: 'Yoq' }
                ]}
              />
            </div>
            <div>
              <AppLabel text={t('Assistent')} />
              <AppInputRadioRound
                onChange={handleTabChange}
                options={[
                  { value: '101', label: 'Ha' },
                  { value: '111', label: 'Yoq' }
                ]}
              />
            </div>
            <div>
              <AppLabel text={t('HrPlus')} />
              <AppInputRadioRound
                onChange={handleTabChange}
                options={[
                  { value: '141', label: 'Ha' },
                  { value: '1131', label: 'Yoq' }
                ]}
              />
            </div>
          </RoundedBlock>
          <RoundedBlock className='col-span-6'>
            <h5 className='text-lg'>
              {t('Belgilangan foydalanuvchilar guruhlari')}
            </h5>
            <div className=''>
              <AppInputCheckbox
                className='block'
                onChange={handleTabChange}
                options={[
                  {
                    value: '1',
                    label: 'Sklad'
                  },
                  {
                    value: '2',
                    label:
                      'Transplantologiya va angioxiturgiya (kattalar va bolalar)'
                  },
                  {
                    value: '3',
                    label: 'RSN-PMS Kardinatologiyalar Samarqand filiali'
                  },
                  {
                    value: '4',
                    label: 'RSN-PMS Kardinatologiyalar Samarqand filiali'
                  }
                ]}
              />
              <hr />
              <AppInputCheckbox
                className='block'
                onChange={handleTabChange}
                options={[
                  {
                    value: '1',
                    label: 'Kislorod bo’limi'
                  },
                  {
                    value: '2',
                    label: 'Yurak ishimik kassaliklar (kardioxirurgiya)'
                  },
                  {
                    value: '3',
                    label: 'Dorixona'
                  },
                  {
                    value: '4',
                    label: 'Endovizual (abdominal va torakal) xirurgiya'
                  }
                ]}
              />
              <hr />
              <AppInputCheckbox
                className='block'
                onChange={handleTabChange}
                options={[
                  {
                    value: '1',
                    label: 'Sklad'
                  },
                  {
                    value: '2',
                    label:
                      'Transplantologiya va angioxiturgiya (kattalar va bolalar)'
                  },
                  {
                    value: '3',
                    label: 'RSN-PMS Kardinatologiyalar Samarqand filiali'
                  },
                  {
                    value: '4',
                    label: 'RSN-PMS Kardinatologiyalar Samarqand filiali'
                  }
                ]}
              />
              <hr />
              <AppInputCheckbox
                className='block'
                onChange={handleTabChange}
                options={[
                  {
                    value: '1',
                    label: 'Kislorod bo’limi'
                  },
                  {
                    value: '2',
                    label: 'Yurak ishimik kassaliklar (kardioxirurgiya)'
                  },
                  {
                    value: '3',
                    label: 'Dorixona'
                  },
                  {
                    value: '4',
                    label: 'Endovizual (abdominal va torakal) xirurgiya'
                  }
                ]}
              />
              <hr />
              <AppInputCheckbox
                className='block'
                onChange={handleTabChange}
                options={[
                  {
                    value: '1',
                    label: 'Sklad'
                  },
                  {
                    value: '2',
                    label:
                      'Transplantologiya va angioxiturgiya (kattalar va bolalar)'
                  },
                  {
                    value: '3',
                    label: 'RSN-PMS Kardinatologiyalar Samarqand filiali'
                  },
                  {
                    value: '4',
                    label: 'RSN-PMS Kardinatologiyalar Samarqand filiali'
                  }
                ]}
              />
              <hr />
              <AppInputCheckbox
                className='block'
                onChange={handleTabChange}
                options={[
                  {
                    value: '1',
                    label: 'Kislorod bo’limi'
                  },
                  {
                    value: '2',
                    label: 'Yurak ishimik kassaliklar (kardioxirurgiya)'
                  },
                  {
                    value: '3',
                    label: 'Dorixona'
                  },
                  {
                    value: '4',
                    label: 'Endovizual (abdominal va torakal) xirurgiya'
                  }
                ]}
              />{' '}
              <hr />
              <AppInputCheckbox
                className='block'
                onChange={handleTabChange}
                options={[
                  {
                    value: '1',
                    label: 'Kislorod bo’limi'
                  },
                  {
                    value: '2',
                    label: 'Yurak ishimik kassaliklar (kardioxirurgiya)'
                  },
                  {
                    value: '3',
                    label: 'Dorixona'
                  },
                  {
                    value: '4',
                    label: 'Endovizual (abdominal va torakal) xirurgiya'
                  }
                ]}
              />{' '}
              <hr />
              <AppInputCheckbox
                className='block'
                onChange={handleTabChange}
                options={[
                  {
                    value: '1',
                    label: 'Kislorod bo’limi'
                  },
                  {
                    value: '2',
                    label: 'Yurak ishimik kassaliklar (kardioxirurgiya)'
                  },
                  {
                    value: '3',
                    label: 'Dorixona'
                  },
                  {
                    value: '4',
                    label: 'Endovizual (abdominal va torakal) xirurgiya'
                  }
                ]}
              />
            </div>
          </RoundedBlock>
        </div>
        <div className='flex justify-end gap-1 py-2'>
          <Button variant='contained' color='secondary' onClick={handleClose}>
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
            Siz ushbu <b> Ismoilov Shaxzod Farrux o’g’li </b> foydalanuvchini
            o’chirib yubormoqchimisiz?
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
