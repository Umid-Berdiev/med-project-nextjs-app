import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppLabel from '@/src/components/forms/AppLabel'
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
import { tableData } from './mock-data'

export default function PharmacyCategoryGroup() {
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
      header: t('Nomi'),
      col: (row: Record<string, any>) => row.name,
      sortable: true
    },
    {
      header: t('Tartib raqami'),
      col: (row: Record<string, any>) => row.order,
      sortable: true
    },
    {
      header: t('Yetkazib beruvchi'),
      col: (row: Record<string, any>) => row.supplier,
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
          data={tableData}
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
            <AppLabel text={t('Kategoriya nomi')} isRequired />
            <AppInput
              onChange={e => {
                //
              }}
              placeholder={t('Kategoriya nomini kiriting')}
            />
          </div>
          <div>
            <AppLabel text={t('Tartib raqami')} isRequired />
            <AppInput
              onChange={e => {
                //
              }}
              placeholder={t('Tartib raqamini kiriting')}
            />
          </div>
          <div className='form-control w-52'>
            <label className='cursor-pointer'>
              <p className='text-xs font-semibold text-[#232427]'>
                <span className='text-error'>* </span>
                <span>{t('Yetkazib beruvchi')}</span>
              </p>
            </label>
            <input
              type='checkbox'
              className='toggle toggle-accent'
              defaultChecked
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
              "Siz ushbu Gumanitar yordam kategoriyasini o'chirib yubormoqchimisiz?"
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