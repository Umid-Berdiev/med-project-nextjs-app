'use client'

import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputCheckbox from '@/src/components/forms/AppInputCheckbox'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import ListsIcon from '@/src/components/icons/ListsIcon'
import PencilIcon from '@/src/components/icons/PencilIcon'
import PlusCircleIcon from '@/src/components/icons/PlusCircleIcon'
import Modal from '@/src/components/Modal'
import Heading4 from '@/src/components/typography/Heading4'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

// import { useState } from 'react'
import CustomEditor from '@/src/components/CustomEditor'
import DownArrowIcon from '@/src/components/icons/DownArrowIcon'
import { BiSolidPrinter } from 'react-icons/bi'
import TemplatesConstructor from './TemplatesConstructor'
import Table from '@/src/components/table/Table'
import Pagination from '@/src/components/pagination/Pagination'
import { tableData } from './mock-data'

type RowDatas = { [key: string]: string }

interface ITemplate {
  id: number
  name: string
  date: string
  category: Category[]
}

interface Category {}

export default function TemplateTableWrapper() {
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

  const columns: Record<string, any>[] = [
    {
      header: t('№'),
      col: (row: ITemplate) => row.id,
      sortable: true
    },
    {
      header: t('Nomi'),
      col: (row: ITemplate) => row.name,
      sortable: true
    },
    {
      header: t('Ketegoriya/Usluga'),
      col: (row: ITemplate) => (
        <div>
          {row?.category[0]} /{' '}
          <span className='text-[#23242780]'>{row?.category[1]}</span>
        </div>
      ),
      sortable: true
    },
    {
      header: t('Yaratilgan sana'),
      col: (row: ITemplate) => row.date,
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
            <ListsIcon />
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
            className='flex size-7 items-center justify-center rounded bg-white p-0 text-danger shadow-sm'
          >
            <DeleteIcon />
          </Link>
        </div>
      )
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
      <Heading4 className=''>{t('Narxlar varaqasi')}</Heading4>
      <div className='mt-5 flex items-center justify-between gap-3'>
        <div className='flex w-full gap-4'>
          <div className='max-w-60'>
            <AppInput
              isSearch
              iconPosition='right'
              placeholder={t('Qidirish')}
            />
          </div>
          <AppSelect
            className='max-w-60'
            options={[]}
            placeholder={t('Kategoriya')}
          />
          <AppSelect
            className='max-w-60'
            options={[]}
            placeholder={t('Usluga')}
          />
        </div>
        <div className='flex gap-3'>
          {/* <Button variant='outlined' color='secondary' endIcon={<FaFileAlt />}>
            {t('Eksport')}
          </Button> */}
          <Button onClick={() => setOpen(!open)}>
            {t('Qo’shish')} <PlusCircleIcon />
          </Button>
        </div>
      </div>
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
        page={page}
        size={perPage}
        totalCount={tableData.length}
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
        <div className='grid w-full grid-cols-12 gap-4'>
          <RoundedBlock className='col-span-3 !gap-4'>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired text={t('Shablon nomi')} />
              <AppInput placeholder={t('Shablon nomini kiriting')} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Shablon turi' />
              <AppSelect placeholder='Shablon turini kiriting' options={[]} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Kategoriya' />
              <AppSelect placeholder='Tanlang' options={[]} />
            </div>
            {/* akkordion */}
            <div className='mx-auto mt-10 w-full max-w-3xl'>
              <div className='overflow-hidden rounded-md border border-b-0 border-[E9EAEA]'>
                {/* First Row (Main Accordion) */}
                <div className='border-b border-base-300'>
                  <input
                    type='checkbox'
                    id='firstAccordion'
                    className='peer hidden'
                  />
                  <label
                    htmlFor='firstAccordion'
                    className='mb-0 flex cursor-pointer items-center border-b border-b-[#E9EAEA] bg-base-100 px-4 
                    py-2 text-sm font-medium hover:bg-base-200'
                  >
                    <span className='me-3 transition-transform duration-200 peer-checked:rotate-180'>
                      <DownArrowIcon />
                    </span>
                    <span>Bioximiya izlanish</span>
                  </label>
                  <div className='bg-base-50 hidden border-b-[#E9EAEA] text-xs peer-checked:block'>
                    {/* Nested Accordion (Second Level) */}
                    <div className=' border-base-300'>
                      <input
                        type='checkbox'
                        id='secondAccordion'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='secondAccordion'
                        className='mb-0 flex cursor-pointer items-center border-b border-b-[#E9EAEA] bg-base-100 px-11 
                    py-2 text-sm font-medium hover:bg-base-200'
                      >
                        <span className='me-3 transition-transform duration-200 peer-checked:rotate-90'>
                          <DownArrowIcon />
                        </span>
                        <span>Qon ivish vaqti</span>
                      </label>
                      <div className='bg-base-50 hidden px-11 text-xs peer-checked:block'>
                        <AppInputCheckbox
                          className='block text-[13px] font-medium'
                          onChange={handleTabChange}
                          options={[
                            {
                              value: '1',
                              label: 'Qon ivish vaqti'
                            }
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Row (Another Independent Accordion) */}
                <div className='border-b border-base-300'>
                  <input
                    type='checkbox'
                    id='secondMainAccordion'
                    className='peer hidden'
                  />
                  <label
                    htmlFor='secondMainAccordion'
                    className='mb-0 flex cursor-pointer items-center border-b border-b-[#E9EAEA] bg-base-100 px-4 
                    py-2 text-sm font-medium hover:bg-base-200'
                  >
                    <span className='me-3 transition-transform duration-200 peer-checked:rotate-180'>
                      <DownArrowIcon />
                    </span>
                    <span>Ekspress test</span>
                  </label>
                  <div className='bg-base-50 hidden border-b-[#E9EAEA] text-xs peer-checked:block'>
                    {/* Nested Accordion (Second Level) */}
                    <div className=' border-base-300'>
                      <input
                        type='checkbox'
                        id='secondMMAccordion'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='secondMMAccordion'
                        className='mb-0 flex cursor-pointer items-center border-b border-b-[#E9EAEA] bg-base-100 px-11 
                    py-2 text-sm font-medium hover:bg-base-200'
                      >
                        <span className='me-3 transition-transform duration-200 peer-checked:rotate-90'>
                          <DownArrowIcon />
                        </span>
                        <span>Qon olish xizmati</span>
                      </label>
                      <div className='bg-base-50 hidden px-11 text-xs peer-checked:block'>
                        <AppInputCheckbox
                          className='block text-[13px] font-medium'
                          onChange={handleTabChange}
                          options={[
                            {
                              value: '1',
                              label: 'Qon olish xizmati'
                            }
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* akkordion */}
          </RoundedBlock>
          <TemplatesConstructor />

          <RoundedBlock className='col-span-9'>
            <CustomEditor />
          </RoundedBlock>
        </div>
        <div className='mt-4 flex justify-end gap-4 bg-white p-4'>
          <Button
            variant='outlined'
            endIcon={<BiSolidPrinter />}
            color='secondary'
            onClick={handleClose}
          >
            {t('Print')}
          </Button>
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
            Siz ushbu <b>Shablon 1</b> shablonini o’chirib yubormoqchimisiz?
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
