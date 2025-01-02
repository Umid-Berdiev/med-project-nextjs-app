import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import PencilIcon from '@/src/components/icons/PencilIcon'
import PlusCircleIcon from '@/src/components/icons/PlusCircleIcon'
import Modal from '@/src/components/Modal'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { productTableData } from './mock-data'

export default function PharmacyProductGroup() {
  const [sortBy, setSortBy] = React.useState<{
    direction: 'asc' | 'desc'
    column: string
  }>({
    direction: 'asc',
    column: 'id'
  })
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const columns: ITableColumn<Record<string, any>>[] = [
    {
      header: 'ID',
      col: (row: Record<string, any>) => row.id,
      sortable: true
    },
    {
      header: t('Qisqa nomi'),
      col: (row: Record<string, any>) => row.name,
      sortable: true
    },
    {
      header: t('Holati'),
      col: (row: Record<string, any>) => row.status,
      sortable: true
    },
    {
      header: t('Amallar'),
      col: (row: Record<string, any>) => (
        <div className='flex items-center gap-3'>
          <Link
            href='#'
            className='flex size-7 items-center justify-center rounded bg-white shadow-sm'
          >
            <PencilIcon />
          </Link>
          <Link
            href='#'
            onClick={() => setOpenDelete(true)}
            className='flex size-7 items-center justify-center rounded bg-white p-0 text-danger shadow-sm'
          >
            <DeleteIcon />
          </Link>
        </div>
      )
    }
  ]

  const [open, setOpen] = React.useState(false)
  const [openDelete, setOpenDelete] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseDelete = () => {
    setOpenDelete(false)
  }

  const handleSort = (column: string) => {
    setSortBy(prev =>
      prev?.column === column
        ? { column, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { column, direction: 'asc' }
    )
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='w-full max-w-72'>
          <AppInput isSearch iconPosition='right' placeholder={t('Qidirish')} />
        </div>
        <Button onClick={() => setOpen(!open)}>
          {t("Qo'shish")} <PlusCircleIcon />
        </Button>
      </div>
      <div className='rounded-md border-none'>
        <Table
          className='bg-white'
          columns={columns}
          data={productTableData}
          sortBy={sortBy}
          setSortBy={handleSort}
          hoverable={false}
          stripped={false}
        />
        <Pagination
          page={1}
          size={10}
          totalCount={20}
          changeCurrentPage={e => console.log(e)}
          changePerPage={e => console.log(e)}
        />
      </div>

      {/* form modal */}
      <Modal title="Qo'shish" open={open} size='lg/2' onClose={handleClose}>
        <div className='mt-4 space-y-6'>
          <div>
            <AppLabel text={t('Qisqa nomi')} isRequired />
            <AppInput
              onChange={e => {
                //
              }}
              placeholder={t('Qisqa nomini kiriting')}
            />
          </div>
          <div>
            <AppLabel text={t('Holati')} isRequired />
            <AppSelect
              options={[
                { label: t('Aktiv'), value: 'aktiv' },
                { label: t('Noaktiv'), value: 'noaktiv' }
              ]}
              placeholder={t('Holatni tanlang')}
            />
          </div>
          <div className='mt-4 flex'>
            <Button className='ml-auto'>{t("Qo'shish")}</Button>
          </div>
        </div>
      </Modal>

      {/* delete modal */}
      <Modal
        title={t("O'chirib yuborish")}
        open={openDelete}
        size='lg/2'
        onClose={handleCloseDelete}
      >
        <div className='my-4 block bg-white p-6'>
          <p className='text-center'>
            {t(
              "Siz ushbu ID:1992 raqamli mahsulot guruhini o'chirib yubormoqchimisiz?"
            )}
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
            {t("O'chirish")}
          </Button>
        </div>
      </Modal>
    </div>
  )
}
