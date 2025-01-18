'use client'

import Breadcrumb from '@/src/components/Breadcrumbs'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppLabel from '@/src/components/forms/AppLabel'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import PencilIcon from '@/src/components/icons/PencilIcon'
import PlusCircleIcon from '@/src/components/icons/PlusCircleIcon'
import Modal from '@/src/components/Modal'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import Heading4 from '@/src/components/typography/Heading4'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { tableData } from '@/src/views/settings/pharmacy/mock-data'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function CounteragentsPage() {
  const { locale, id } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const [sortBy, setSortBy] = useState<{
    direction: 'asc' | 'desc'
    column: string
  }>({
    direction: 'asc',
    column: 'id'
  })

  const columns: ITableColumn<Record<string, any>>[] = [
    {
      header: t('ID'),
      col: (row: Record<string, any>) => row.id,
      sortable: true
    },
    {
      header: t('Nomi'),
      col: (row: Record<string, any>) => row.name,
      sortable: true
    },
    {
      header: t('STIR'),
      col: (row: Record<string, any>) => row.order,
      sortable: true
    },
    {
      header: t("Bog'lanish"),
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

  function handleSort(column: string) {
    if (sortBy.column === column) {
      setSortBy({
        ...sortBy,
        direction: sortBy.direction === 'asc' ? 'desc' : 'asc'
      })
    } else {
      setSortBy({ direction: 'asc', column })
    }
  }

  function handleCloseConfirmModal() {
    setOpenDelete(false)
  }

  function handleCloseFormModal() {
    setFormModalOpen(false)
  }

  return (
    <div>
      <Breadcrumb
        breadcrumbs={[{ label: 'Dorixona' }, { label: 'Kontragentlar' }]}
      />
      <Heading4 className=''>{t('Kontragentlar')}</Heading4>
      <div className='my-4 flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='w-full max-w-72'>
            <AppInput
              isSearch
              iconPosition='right'
              placeholder={t('Qidirish')}
            />
          </div>
          <Button onClick={() => setFormModalOpen(true)}>
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
      </div>

      {/* form modal */}
      <Modal
        title="Qo'shish"
        open={formModalOpen}
        size='lg/2'
        onClose={handleCloseFormModal}
      >
        <div className='mt-4 space-y-6'>
          <div>
            <AppInput isSearch iconPosition='right' placeholder={t('STIR')} />
          </div>
          <div>
            <AppLabel text={t('Nomi')} isRequired />
            <AppInput
              onChange={e => {
                //
              }}
              placeholder={t('Nomini kiriting')}
            />
          </div>
          <div>
            <AppLabel text={t("Bog'lanish")} isRequired />
            <AppInput
              onChange={e => {
                //
              }}
              placeholder={t("Bog'lanish uchun raqam kiriting")}
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
        onClose={handleCloseConfirmModal}
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
            onClick={handleCloseConfirmModal}
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
