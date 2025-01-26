'use client'

import Breadcrumb from '@/src/components/Breadcrumbs'
import Button from '@/src/components/Button'
import AppDropdownWithCheckboxV2 from '@/src/components/dropdowns/AppDropdownWithCheckboxV2'
import AppFilterDropdown from '@/src/components/dropdowns/AppFilterDropdown'
import AppInput from '@/src/components/forms/AppInput'
import AppInputDate from '@/src/components/forms/AppInputDate'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import PencilIcon from '@/src/components/icons/PencilIcon'
import PlusCircleIcon from '@/src/components/icons/PlusCircleIcon'
import Modal from '@/src/components/Modal'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import Heading4 from '@/src/components/typography/Heading4'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { pharmacyStockInTableData } from '@/src/views/settings/pharmacy/mock-data'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function PharmacyProductIncomesPage() {
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

  const productList = [
    {
      title: t('Afobazol'),
      subtitle: '201201201201',
      value: '1'
    },
    {
      title: t('Afobazol'),
      subtitle: '201201201201',
      value: '2'
    },
    {
      title: t('Afobazol'),
      subtitle: '201201201201',
      value: '3'
    }
  ]

  const columns: ITableColumn<Record<string, any>>[] = [
    {
      header: t('ID'),
      col: (row: Record<string, any>) => row.id,
      sortable: true
    },
    {
      header: t('Summasi'),
      col: (row: Record<string, any>) => row.total_sum,
      sortable: true
    },
    {
      header: t('Sana'),
      col: (row: Record<string, any>) => row.date,
      sortable: true
    },
    {
      header: t('Kirim turi'),
      col: (row: Record<string, any>) => row.income_type,
      sortable: true
    },
    {
      header: t("Bo'limlar ro'yxati"),
      col: (row: Record<string, any>) => row.departments,
      sortable: true
    },
    {
      header: t('Kontragentlar'),
      col: (row: Record<string, any>) => row.contractors,
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

  const modalTableColumns: ITableColumn<Record<string, any>>[] = [
    {
      header: t('Mahsulot nomi'),
      col: (row: Record<string, any>) => row.name,
      sortable: true
    },
    {
      header: t('Kontragent'),
      col: (row: Record<string, any>) => row.contractor,
      sortable: true
    },
    {
      header: t("O'lchov birligi"),
      col: (row: Record<string, any>) => row.unit,
      sortable: true
    },
    {
      header: t('Yaroqlilik muddati'),
      col: (row: Record<string, any>) => row.expiration_date,
      sortable: true
    },
    {
      header: t('Seriyasi'),
      col: (row: Record<string, any>) => row.series,
      sortable: true
    },
    {
      header: t('Harajat shakli'),
      col: (row: Record<string, any>) => row.packaging_type,
      sortable: true
    },
    {
      header: t('Miqdori'),
      col: (row: Record<string, any>) => row.quantity,
      sortable: true
    },
    {
      header: t('Narxi'),
      col: (row: Record<string, any>) => row.price,
      sortable: true
    },
    {
      header: t('Summasi'),
      col: (row: Record<string, any>) => row.total_sum,
      sortable: true
    },
    {
      header: t('Donada'),
      col: (row: Record<string, any>) => row.packaging_quantity,
      sortable: true
    },
    {
      header: t('Donada narxi'),
      col: (row: Record<string, any>) => row.packaging_price,
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
        breadcrumbs={[{ label: 'Dorixona' }, { label: 'Tovar kirim' }]}
      />
      <Heading4 className=''>{t('Tovar kirim')}</Heading4>
      <div className='my-4 flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='w-full max-w-72'>
            <AppInput
              isSearch
              iconPosition='right'
              placeholder={t('Qidirish')}
            />
          </div>
          <AppFilterDropdown
            filterHandler={() => console.log('filter')}
            clearHandler={() => console.log('clear')}
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
            </div>
          </AppFilterDropdown>
          <Button onClick={() => setFormModalOpen(true)}>
            {t("Qo'shish")} <PlusCircleIcon />
          </Button>
        </div>
        <div className='rounded-md border-none'>
          <Table
            className='bg-white'
            columns={columns}
            data={pharmacyStockInTableData}
            sortBy={sortBy}
            setSortBy={handleSort}
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
        size='lg'
        onClose={handleCloseFormModal}
      >
        <div className='mt-4 space-y-6'>
          <div className='mt-4 grid grid-cols-5 gap-4 rounded-lg bg-white p-4'>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Sana')} />
              <AppInputDate
                placeholder='KK.OO.YYYY'
                defaultValue={new Date()}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Manba')} />
              <AppSelect
                placeholder={t('Manbani tanlang')}
                options={[
                  { value: '1', label: 'Manba 1' },
                  { value: '2', label: 'Manba 2' }
                ]}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t("Bo'lim ro'yhati")} />
              <AppSelect
                placeholder={t("Bo'lim ro'yhatini tanlang")}
                options={[
                  { value: '1', label: 'Manba 1' },
                  { value: '2', label: 'Manba 2' }
                ]}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Kontragent')} />
              <AppSelect
                placeholder={t('Kontragentni tanlang')}
                options={[
                  { value: '1', label: 'Manba 1' },
                  { value: '2', label: 'Manba 2' }
                ]}
              />
            </div>
          </div>
          <div className='grid grid-cols-5 gap-4 rounded-lg bg-white p-4'>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Mahsulot')} />
              <AppDropdownWithCheckboxV2
                title={t('Mahsulotni tanlang')}
                options={productList}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Miqdori')} />
              <AppInput />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Narxi')} />
              <AppInput />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Summasi')} />
              <AppInput disabled value={0} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Yaroqlilik muddati')} />
              <AppInputDate placeholder={t('Sana')} defaultValue={new Date()} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Seriya')} />
              <AppInput />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Harajat shakli')} />
              <AppInput
                placeholder={t('Harajat shaklini kiriting')}
                disabled
                iconPosition='right'
                icon={<span className='text-sm'>{t('шт')}</span>}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Donada')} />
              <AppInput
                placeholder={t('Donada')}
                disabled
                iconPosition='right'
                icon={<span className='text-sm'>{t('шт')}</span>}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Donasi narxi')} />
              <AppInput placeholder={t('Donasi narxini kiriting')} disabled />
            </div>
            <div className='col-span-full flex'>
              <Button className='ml-auto' endIcon={<PlusCircleIcon />}>
                <span>{t('Ro’yhatga qo’shish')}</span>
              </Button>
            </div>
            <div className='col-span-full min-h-40'>
              <table className={`table border-t`}>
                <thead>
                  <tr>
                    {modalTableColumns.map((column, index) => (
                      <th key={index}>
                        <span className='font-bold  normal-case text-textDark'>
                          {column.header}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>{/*  */}</tbody>
              </table>
            </div>
          </div>
          <div className='mt-4 flex rounded-lg bg-white p-4'>
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
              "Siz ushbu ID:1992 raqamli tovar kirimini o'chirib yubormoqchimisiz?"
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
