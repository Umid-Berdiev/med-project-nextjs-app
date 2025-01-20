'use client'
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Breadcrumb from '@/src/components/Breadcrumbs'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputCheckboxNoLabel from '@/src/components/forms/AppInputCheckboxNoLabel'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import BalanceIcon2 from '@/src/components/icons/BalanceIcon2'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import ListIcon from '@/src/components/icons/ListIcon'
import ListLogIcon from '@/src/components/icons/ListLogIcon'
import ProductListCountIcon from '@/src/components/icons/ProductListCountIcon'
import Modal from '@/src/components/Modal'
import Table, { ITableColumn } from '@/src/components/table/Table'
import Heading5 from '@/src/components/typography/Heading5'

import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import ProfileBlock from '@/src/views/doctors-profile/detail/ProfileBlock'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiPrinter } from 'react-icons/bi'
import { FiEdit2 } from 'react-icons/fi'
import { SlOptionsVertical } from 'react-icons/sl'
import { TbTableOptions } from 'react-icons/tb'

export default function CashboxPage() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const selectOptions = [
    { label: 'Pul ko’chirish', value: '2' },
    { label: 'Terminal orqali', value: '1' },
    { label: 'Naqd pul orqali', value: '0' }
  ]
  const [open, setOpen] = useState(false)
  const [sortBy, setSortBy] = useState<
    | {
        column: string
        direction: 'asc' | 'desc'
      }
    | undefined
  >(undefined)
  const [perPage, setPerPage] = useState(10)
  const [page, setPage] = useState(0)
  const handleClose = () => {
    setOpen(false)
  }
  const handleSort = (column: string) => {
    setSortBy(prev =>
      prev?.column === column
        ? { column, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { column, direction: 'asc' }
    )
  }
  type CellType = {
    id: number
    fullname: string
    price: string
    visitDate: string
  }
  const columns: ITableColumn<CellType>[] = [
    {
      header: '№',
      width: 'max-w-4',
      col: (_: CellType, index?: number) =>
        index !== undefined ? index + 1 : 0
    },
    {
      header: t('Xizmat yoki tovar nomi'),
      col: (row: CellType) => row.fullname,
      sortable: true
    },
    {
      header: t('Narxi'),
      col: (row: CellType) => row.price,
      sortable: true
    },
    {
      header: t('Tashrif sanasi'),
      col: (row: CellType) => row.visitDate,
      sortable: true
    },
    {
      header: (
        <>
          <DeleteIcon />
          {/* <TbLayoutGridRemove size={18} /> */}
        </>
      ),
      width: 'max-w-4',
      col: (row: CellType) => <AppInputCheckboxNoLabel isChecked={false} />
    }
  ]

  const data: CellType[] = [
    {
      id: 1,
      fullname: 'Alice',
      visitDate: '2023-01-01',
      price: '85 000 som'
    },
    {
      id: 2,
      fullname: 'Bob',
      visitDate: '2023-02-01',
      price: '85 000 som'
    },
    {
      id: 3,
      fullname: 'Charlie',
      visitDate: '2023-03-01',
      price: '85 000 som'
    },
    {
      id: 4,
      fullname: 'David',
      visitDate: '2023-04-01',
      price: '85 000 som'
    },
    {
      id: 5,
      fullname: 'Eve',
      visitDate: '2023-05-01',
      price: '85 000 som'
    },
    {
      id: 6,
      fullname: 'Frank',
      visitDate: '2023-06-01',
      price: '85 000 som'
    },
    {
      id: 7,
      fullname: 'George',
      visitDate: '2023-07-01',
      price: '85 000 som'
    },
    {
      id: 8,
      fullname: 'Hannah',
      visitDate: '2023-08-01',
      price: '85 000 som'
    },
    {
      id: 9,
      fullname: 'Ivan',
      visitDate: '2023-09-01',
      price: '85 000 som'
    }
  ]
  const classRow = (row: any) => {
    return row.id % 3 == 0 ? 'bg-softError ' : 'bg-softSuccess'
  }

  type CellModalType = {
    id: number
    numberCard: string
    numberReceipt: string
    payedSumm: string
    typePay: string
    buyerName: string
    datePay: string
  }
  const modalColumns: ITableColumn<CellModalType>[] = [
    {
      header: '№',
      col: (_: CellModalType, index?: number) =>
        index !== undefined ? index + 1 : 0,
      width: 'max-w-4'
    },
    {
      header: t('ID'),
      col: (row: CellModalType) => row.id,
      width: 'max-w-20',
      sortable: true
    },
    {
      header: t('Karta raqami'),
      col: (row: CellModalType) => row.numberCard,
      width: 'max-w-20',
      sortable: true
    },

    {
      header: t('Kvitansiya raqami'),
      col: (row: CellModalType) => row.numberReceipt,
      width: 'max-w-20',
      sortable: true
    },
    {
      header: t('Tolangan summa'),
      col: (row: CellModalType) => row.payedSumm,
      sortable: true
    },
    {
      header: t('To’lov turi'),
      col: (row: CellModalType) => row.typePay,
      sortable: true
    },
    {
      header: t('To’lov sanasi'),
      col: (row: CellModalType) => row.datePay,
      width: 'max-w-20',
      sortable: true
    },
    {
      header: (
        <div className='bg-white pl-4  text-center shadow-sm'>
          <TbTableOptions color='#23242780' size={18} />
        </div>
      ),
      width: 'max-w-8',
      col: (row: CellModalType) => (
        <div className='dropdown dropdown-left  dropdown-bottom'>
          <div tabIndex={0} role='button' className='btn  bg-white'>
            <SlOptionsVertical size={14} />
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content z-50 w-52 rounded-lg bg-base-100 p-2 shadow'
          >
            <li>
              <a className='flex items-center gap-2'>
                <BiPrinter />
                {t('Pechat qilish')}
              </a>
            </li>
            <li>
              <a className='flex items-center gap-2'>
                <FiEdit2 />
                {t('Ozgartirish')}
              </a>
            </li>
            <li>
              <a className='flex items-center gap-2'>
                <AiOutlineDelete />
                {t('Ochirish')}
              </a>
            </li>
          </ul>
        </div>
      )
    }
  ]

  const modalData: CellModalType[] = [
    {
      id: 3948290,
      numberCard: '13874',
      numberReceipt: '77503',
      payedSumm: '8 113 015 so’m',
      typePay: 'Naqd; Terminal',
      buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
      datePay: '26.09.2024, 15:09'
    },
    {
      id: 3946582,
      numberCard: '13874',
      numberReceipt: '77503',
      payedSumm: '8 113 015 so’m',
      typePay: 'Naqd; Terminal',
      buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
      datePay: '26.09.2024, 15:09'
    },
    {
      id: 394782,
      numberCard: '13874',
      numberReceipt: '77503',
      payedSumm: '8 113 015 so’m',
      typePay: 'Naqd; Terminal',
      buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
      datePay: '26.09.2024, 15:09'
    },
    {
      id: 339482,
      numberCard: '13874',
      numberReceipt: '77503',
      payedSumm: '8 113 015 so’m',
      typePay: 'Naqd; Terminal',
      buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
      datePay: '26.09.2024, 15:09'
    },
    {
      id: 394842,
      numberCard: '13874',
      numberReceipt: '77503',
      payedSumm: '8 113 015 so’m',
      typePay: 'Naqd; Terminal',
      buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
      datePay: '26.09.2024, 15:09'
    },
    {
      id: 394382,
      numberCard: '13874',
      numberReceipt: '77503',
      payedSumm: '8 113 015 so’m',
      typePay: 'Naqd; Terminal',
      buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
      datePay: '26.09.2024, 15:09'
    },
    {
      id: 394821,
      numberCard: '13874',
      numberReceipt: '77503',
      payedSumm: '8 113 015 so’m',
      typePay: 'Naqd; Terminal',
      buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
      datePay: '26.09.2024, 15:09'
    }
  ]
  return (
    <div className='container'>
      <Breadcrumb
        breadcrumbs={[
          { label: t('Kassa'), href: `/${locale}/cashbox` },
          { label: t('Ismoilov Shaxzod Farrux ogli') }
        ]}
      />
      <ProfileBlock />
      <div className='mt-4 grid grid-cols-3 gap-4'>
        <RoundedBlock>
          <div className='relative flex gap-3'>
            <ListLogIcon />
            <div>
              <h5 className='mb-1 text-sm'>{t('Tolangan xizmatlar')}:</h5>
              <b className='text-lg font-bold leading-6'>
                2 451 500{' '}
                <span className='pl-1 text-xs font-semibold text-[#23242780]'>
                  {t('som')}
                </span>
              </b>
            </div>
          </div>
        </RoundedBlock>
        <RoundedBlock>
          <div className='relative flex gap-3'>
            <ProductListCountIcon />
            <div>
              <h5 className='mb-1 text-sm'>
                {t('Xarid qilgan tovarlar soni')}:
              </h5>
              <b className='text-lg font-bold leading-6'>23 {t('ta')}</b>
            </div>
            <a
              href='#'
              className='absolute right-0 top-0 inline-block cursor-pointer text-sm font-semibold text-[#23242780] underline decoration-dashed underline-offset-4'
            >
              {t('Korish')}
            </a>
          </div>
        </RoundedBlock>
        <RoundedBlock>
          <div className='flex gap-3'>
            <BalanceIcon2 />
            <div>
              <h5 className='mb-1 text-sm'>{t('Jami qarzdorlik')}:</h5>
              <div>
                <b className='text-lg font-bold leading-6 text-error'>
                  - 1 846 843
                </b>
                <span className='pl-1 text-sm font-semibold text-error'>
                  {t('som')}
                </span>
              </div>
            </div>
          </div>
        </RoundedBlock>
      </div>
      <div className='mt-4 grid grid-cols-12 gap-4'>
        <div className='col-span-8'>
          <RoundedBlock>
            <Heading5>{t('Tolanmagan xizmatlar va tovarlar')}</Heading5>
            <Table
              columns={columns}
              data={data.slice(page * perPage, page * perPage + perPage)}
              sortBy={sortBy}
              setSortBy={handleSort}
              classRow={classRow}
              hoverable={false}
              stripped={false}
            />
            <div className='flex items-center justify-between pb-4'>
              <p className='mb-0 text-sm leading-5 text-[#23242780]'>
                {t('Tanlangan jami xizmat va tovarlar narxi')}:
              </p>
              <div>
                <b className='text-lg font-bold leading-6 text-error'>
                  - 1 846 843
                </b>
                <span className='pl-1 text-sm font-semibold text-error'>
                  {t('som')}
                </span>
              </div>
            </div>
          </RoundedBlock>
        </div>
        <div className='col-span-4'>
          <RoundedBlock>
            <Heading5>{t('Tolov')}</Heading5>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Kartani tanlang' />
              <AppInput
                value='12845 - 2024 Cтационарный карта 27.09.2024'
                placeholder='Karta'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Tolov turi' />
              <AppSelect options={selectOptions} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel
                isRequired={true}
                text='Terminaldan yechish uchun summa'
              />
              <AppInput
                value='36764'
                placeholder='Terminaldan yechish uchun summa'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Naqd pul olinadigan summa' />
              <AppInput value='36764' placeholder='Naqd pul olinadigan summa' />
            </div>
            <Button onClick={() => setOpen(true)}>
              {t('Tolov qilish va chop etish')} <ListIcon />{' '}
            </Button>
          </RoundedBlock>
        </div>
      </div>
      <Modal
        bg='bg-background'
        title='Xarid qilgan xizmatlar va tovarlar'
        open={open}
        size='lg'
        onClose={handleClose}
      >
        <div className='flex flex-col gap-3 py-4'>
          <Table
            columns={modalColumns}
            data={modalData.slice(page * perPage, page * perPage + perPage)}
            sortBy={sortBy}
            setSortBy={handleSort}
            classRow={classRow}
            hoverable={false}
            stripped={false}
          />
        </div>
        <div className='flex justify-end gap-1 py-2'>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            {t('Bekor qilish')}
          </Button>
          <Button variant='contained' color='secondary'>
            {t('Yaratish')}
          </Button>
        </div>
      </Modal>
    </div>
  )
}
