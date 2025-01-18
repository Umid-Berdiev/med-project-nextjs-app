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
import { pharmacyProductsTableData } from '@/src/views/settings/pharmacy/mock-data'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function PharmacyProductsPage() {
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
      header: t('Shtrix kodi'),
      col: (row: Record<string, any>) => row.barcode,
      sortable: true
    },
    {
      header: t('Nomi'),
      col: (row: Record<string, any>) => row.name,
      sortable: true,
      width: '!w-[400px] !min-w-[400px]'
    },
    {
      header: t("O'lchov birligi"),
      col: (row: Record<string, any>) => row.unit,
      sortable: true
    },
    {
      header: t('Guruh'),
      col: (row: Record<string, any>) => row.category,
      sortable: true
    },
    {
      header: t('Kontragentlar'),
      col: (row: Record<string, any>) => row.conteragents,
      sortable: true
    },
    {
      header: t('Ishlab chiqaruvchi'),
      col: (row: Record<string, any>) => row.producer,
      sortable: true
    },
    {
      header: t('Soni'),
      col: (row: Record<string, any>) => row.quantity,
      sortable: true
    },
    {
      header: t('Holati'),
      col: (row: Record<string, any>) => {
        // return as badge (if active return green, if inactive return red)
        return (
          <span className='rounded bg-[#00A569] px-2 py-1 text-white'>
            {row.status}
          </span>
        )
      },
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
        breadcrumbs={[{ label: 'Dorixona' }, { label: 'Mahsulotlar' }]}
      />
      <Heading4 className=''>{t('Mahsulotlar')}</Heading4>
      <div className='my-4 flex flex-col gap-4'>
        <div className='flex items-center'>
          <div className='w-full max-w-72'>
            <AppInput
              isSearch
              iconPosition='right'
              placeholder={t('Qidirish')}
            />
          </div>
          <Button variant='text' color='primary' className='ml-auto'>
            <span className='border-b border-dashed border-secondary'>
              {t('Filtr')}
            </span>
          </Button>
          <Button onClick={() => setFormModalOpen(true)}>
            {t("Qo'shish")} <PlusCircleIcon />
          </Button>
        </div>
        <div className='rounded-md border-none'>
          <Table
            className='bg-white'
            columns={columns}
            data={pharmacyProductsTableData}
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
