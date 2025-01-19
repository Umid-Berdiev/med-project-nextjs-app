'use client'

import Breadcrumb from '@/src/components/Breadcrumbs'
import Button from '@/src/components/Button'
import AppDropdownWithCheckboxV2 from '@/src/components/dropdowns/AppDropdownWithCheckboxV2'
import AppInput from '@/src/components/forms/AppInput'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import PencilIcon from '@/src/components/icons/PencilIcon'
import PlusCircleIcon from '@/src/components/icons/PlusCircleIcon'
import SyncIcon from '@/src/components/icons/SyncIcon'
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
          {/* <Button variant='text' color='primary' className='ml-auto'>
            <span className='border-b border-dashed border-secondary'>
              {t('Filtr')}
            </span>
          </Button> */}
          <div className='dropdown dropdown-end ml-auto'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-link m-1 text-textDark no-underline'
            >
              <span className='border-b border-dashed border-secondary'>
                {t('Filtr')}
              </span>
            </div>
            <div
              tabIndex={0}
              className='dropdown-content z-[1] w-[520px] rounded-2xl bg-base-100 p-5 shadow'
            >
              <div className='space-y-6'>
                <div className='flex flex-col gap-1'>
                  <AppLabel text={t("O'lchov birligi")} />
                  <AppSelect
                    placeholder={t("O'lchov birligini tanlang")}
                    options={[
                      { value: '1', label: 'Manba 1' },
                      { value: '2', label: 'Manba 2' }
                    ]}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <AppLabel text={t('Guruh')} />
                  <AppSelect
                    placeholder={t('Guruhni tanlang')}
                    options={[
                      { value: '1', label: 'Manba 1' },
                      { value: '2', label: 'Manba 2' }
                    ]}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <AppLabel text={t('Kontragent')} />
                  <AppSelect
                    placeholder={t('Kontragentni tanlang')}
                    options={[
                      { value: '1', label: 'Manba 1' },
                      { value: '2', label: 'Manba 2' }
                    ]}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <AppLabel text={t('Ishlab chiqaruvchi')} />
                  <AppSelect
                    placeholder={t('Ishlab chiqaruvchini tanlang')}
                    options={[
                      { value: '1', label: 'Manba 1' },
                      { value: '2', label: 'Manba 2' }
                    ]}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <AppLabel text={t('Holati')} />
                  <AppSelect
                    placeholder={t('Holatini tanlang')}
                    options={[
                      { value: '1', label: 'Manba 1' },
                      { value: '2', label: 'Manba 2' }
                    ]}
                  />
                </div>
                <div className='flex justify-end gap-4'>
                  <Button className='bg-[#F0F1F7] !text-textDark'>
                    {t('Tozalash')}
                  </Button>
                  <Button>{t('Filterlash')}</Button>
                </div>
              </div>
            </div>
          </div>
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
          <div className='text-sm'>
            <AppLabel isRequired text={t('Shtrih kod')} />
            <label className='input input-bordered flex h-9 items-center gap-2 text-sm'>
              <input
                type='text'
                className='grow'
                placeholder={t('Shtrih kod')}
              />
              <button className='btn btn-ghost p-0 text-secondary focus-within:outline-none hover:bg-transparent'>
                <span>{t('Generatsiya')}</span>
                <SyncIcon />
              </button>
            </label>
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
          <div className='flex gap-4'>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t("O'lchov birligi")} isRequired />
              <AppSelect
                placeholder={t("O'lchov birligini tanlang")}
                options={[
                  { value: '1', label: 'Manba 1' },
                  { value: '2', label: 'Manba 2' }
                ]}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Soni')} isRequired />
              <AppInput
                onChange={e => {
                  //
                }}
                placeholder={t('Sonini kiriting')}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Harajat qilish')} isRequired />
              <AppSelect
                placeholder={t('Harajat qilishni tanlang')}
                options={[
                  { value: '1', label: 'Manba 1' },
                  { value: '2', label: 'Manba 2' }
                ]}
              />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <AppLabel isRequired text={t('Guruh')} />
            <AppSelect
              placeholder={t('Guruhni tanlang')}
              options={[
                { value: '1', label: 'Manba 1' },
                { value: '2', label: 'Manba 2' }
              ]}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <AppLabel isRequired text={t('Kontragent')} />
            {/* <AppSelect
              placeholder={t('Kontragentni tanlang')}
              options={[
                { value: '1', label: 'Manba 1' },
                { value: '2', label: 'Manba 2' }
              ]}
            /> */}
            <AppDropdownWithCheckboxV2
              title={t('Kontragentni tanlang')}
              options={[
                { title: 'Manba 1', value: '1' },
                { title: 'Manba 2', value: '2' }
              ]}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <AppLabel isRequired text={t('Ishlab chiqaruvchi')} />
            <AppSelect
              placeholder={t('Ishlab chiqaruvchini tanlang')}
              options={[
                { value: '1', label: 'Manba 1' },
                { value: '2', label: 'Manba 2' }
              ]}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <AppLabel text={t('Dori shakli')} isRequired />
            <AppInput
              onChange={e => {
                //
              }}
              placeholder={t('Dori shaklini kiriting')}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <AppLabel text={t('Norma')} isRequired />
            <AppInput
              onChange={e => {
                //
              }}
              placeholder={t('Normani kiriting')}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <AppLabel isRequired text={t('Holati')} />
            <AppSelect
              placeholder={t('Holatini tanlang')}
              options={[
                { value: '1', label: 'Manba 1' },
                { value: '2', label: 'Manba 2' }
              ]}
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
              "Siz ushbu ID:1992 raqamli mahsulotni o'chirib yubormoqchimisiz?"
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
