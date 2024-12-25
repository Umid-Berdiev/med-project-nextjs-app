'use client'

import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputCheckboxNoLabel from '@/src/components/forms/AppInputCheckboxNoLabel'
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
import { withAxios } from '@/src/utils/api/api'
import endpoints from '@/src/utils/api/endpoints'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type UserTableCellType = {
  name: string
  order: string
  createdDate: string
  changedDate: string
}

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
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [apiData, setApiData] = useState({
    data: []
  })
  const [loading, setLoading] = useState(false)

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
      header: t("O'zgartirilgan sana"),
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
            onClick={() => setIsDeleteModalOpen(true)}
            className='flex size-7 items-center justify-center rounded bg-white text-danger shadow-sm'
          >
            <DeleteIcon />
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

  const handleFormModalClose = () => {
    setIsFormModalOpen(false)
  }

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false)
  }

  async function fetchData() {
    try {
      setLoading(true)
      const { data } = await withAxios()(endpoints.common.roles.list)
      setApiData({ data })
    } catch (fetchDataError: any) {
      console.error({ fetchDataError })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='w-full max-w-72'>
          <AppInput isSearch iconPosition='right' placeholder={t('Qidirish')} />
        </div>
        <Button onClick={() => setIsFormModalOpen(true)}>
          {t("Qo'shish")} <PlusCircleIcon />
        </Button>
      </div>
      <Table
        className='bg-white'
        columns={columns}
        data={userTableData.slice(page * perPage, page * perPage + perPage)}
        // data={apiData.data}
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
        title={t("Qo'shish")}
        open={isFormModalOpen}
        size='lg'
        onClose={handleFormModalClose}
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
          <div className='overflow-auto bg-white'>
            <table className='border-collapse border text-center'>
              <thead>
                <th className='border px-2 py-1 text-sm'>{t('Nomi')}</th>
                <th className='border px-2 py-1 text-sm'>
                  {t("Menyu ko'rsatish")}
                </th>
                <th className='border px-2 py-1 text-sm'>
                  {t("Menyu ko'rsatish")}
                </th>
                <th className='border px-2 py-1 text-sm'>{t('Boshqarish')}</th>
                <th className='border px-2 py-1 text-sm'>{t('Joylash')}</th>
                <th className='border px-2 py-1 text-sm'>
                  {t("O'zgartirish")}
                </th>
                <th className='border px-2 py-1 text-sm'>{t("O'chirish")}</th>
                <th className='border px-2 py-1 text-sm'>{t("Ko'rsatish")}</th>
                <th className='border px-2 py-1 text-sm'>{t("Bo'sh")}</th>
                <th className='border px-2 py-1 text-sm'>
                  {t('Eksport EXEL')}
                </th>
                <th className='border px-2 py-1 text-sm'>{t('Anamnezlar')}</th>
                <th className='border px-2 py-1 text-sm'>{t('Diagnozlar')}</th>
                <th className='border px-2 py-1 text-sm'>
                  {t('Operatsiyalar')}
                </th>
                <th className='border px-2 py-1 text-sm'>
                  {t('Patsient harakati')}
                </th>
                <th className='border px-2 py-1 text-sm'>
                  {t('Foydalanuchi rolli')}
                </th>
              </thead>
              <tbody>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    Asosiy oyna
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    Bemorlar
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    Asosiy oyna
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    {"Xizmat qo'shing"}
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    Bemorlar
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    Asosiy oyna
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    Asosiy oyna
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    {t("Xizmat o'chirish")}
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    Bemorlar
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    {"Xizmat qo'shing"}
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    Bemorlar
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    {"Xizmat qo'shing"}
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    {"Xizmat qo'shing"}
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    Bemorlar
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    {"Xizmat qo'shing"}
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    Bemorlar
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    {"Xizmat qo'shing"}
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={false}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap border px-2 py-1 pr-6 !text-left text-sm'>
                    {"Xizmat qo'shing"}
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'></td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                  <td className='border px-2 py-1 text-sm'>
                    <AppInputCheckboxNoLabel
                      className='flex justify-center'
                      isChecked={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex justify-end gap-1 py-2'>
          <Button
            onClick={handleFormModalClose}
            variant='contained'
            color='secondary'
          >
            {t('Qoshish')}
          </Button>
        </div>
      </Modal>

      <Modal
        bg='bg-[#F9F9F9]'
        title='Ochirib yuborish'
        open={isDeleteModalOpen}
        size='lg/2'
        onClose={handleDeleteModalClose}
      >
        <div className='my-4 block bg-white p-6'>
          <p className='text-center'>
            {`Siz ushbu "Bosh hisobchi" rollini o'chirib yubormoqchimisiz?`}
          </p>
        </div>
        <div className='flex justify-end gap-1 py-2'>
          <Button
            variant='outlined'
            color='secondary'
            onClick={handleDeleteModalClose}
          >
            {t('Bekor qilish')}
          </Button>
          <Button variant='contained' className='bg-[#E6533C]' color='error'>
            {t("O'chirish")}
          </Button>
        </div>
      </Modal>
    </>
  )
}
