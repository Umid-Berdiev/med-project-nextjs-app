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
import ListsIcon from '@/src/components/icons/ListsIcon'
import PencilIcon from '@/src/components/icons/PencilIcon'
import PlusCircleIcon from '@/src/components/icons/PlusCircleIcon'
import Modal from '@/src/components/Modal'
import Pagination from '@/src/components/pagination/Pagination'
import Table from '@/src/components/table/Table'
import Heading4 from '@/src/components/typography/Heading4'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { IPrice } from '@/src/utils/interfaces'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from "react";

// import { useState } from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { tableData } from './mock-data'
import PlusRoundIcon from '@/src/components/icons/PlusRoundIcon'
import { BiPrinter, BiSolidPrinter } from 'react-icons/bi'
import CustomEditor from '@/src/components/CustomEditor'

type RowDatas = { [key: string]: string };


interface ITemplate {
  id: number
  name: string
  date: string
  category: Category[]
}

interface Category {

}


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
  const [open, setOpen] = useState(true)
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
        <div>{row?.category[0]} / <span className='text-[#23242780]'>{row?.category[1]}</span></div>
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
            className='text-danger flex size-7 items-center justify-center rounded bg-white p-0 shadow-sm'
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
      <div className='mt-5 gap-3 flex items-center justify-between'>
        <div className='w-full flex gap-4'>
          <div className='max-w-60'><AppInput isSearch iconPosition='right' placeholder={t('Qidirish')} /></div>
          <AppSelect className='max-w-60' options={[]} placeholder={t('Kategoriya')} />
          <AppSelect className='max-w-60' options={[]} placeholder={t('Usluga')} />
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
        <div className="w-full grid grid-cols-12 gap-4">
          <RoundedBlock className='col-span-3 !gap-4'>
            <div >
              <AppLabel isRequired text={t('Shablon nomi')} />
              <AppInput placeholder={t('Shablon nomini kiriting')} />
            </div>
            <div >
              <AppLabel isRequired={true} text='Shablon turi' />
              <AppSelect placeholder='Shablon turini kiriting' options={[]} />
            </div>
            <div >
              <AppLabel isRequired={true} text='Kategoriya' />
              <AppSelect placeholder='Tanlang' options={[]} />
            </div>
            {/* akkordion */}
            <div className="w-full max-w-3xl mx-auto mt-10">
              <div className="border border-base-300 rounded-md">
                {/* First Row (Main Accordion) */}
                <div className="border-b border-base-300">
                  <input type="checkbox" id="firstAccordion" className="hidden peer" />
                  <label
                    htmlFor="firstAccordion"
                    className="flex items-center px-4 py-2 cursor-pointer bg-base-100 hover:bg-base-200 text-sm font-medium"
                  >
                    <span className="peer-checked:rotate-90 transition-transform duration-200">▶</span>
                    <span>First Section11</span>
                  </label>
                  <div className="peer-checked:block hidden px-4 py-2 text-xs bg-base-50">
                    <p>This is the detailed content for the first section.</p>

                    {/* Nested Accordion (Second Level) */}
                    <div className="border-b border-base-300 mt-4">
                      <input type="checkbox" id="secondAccordion" className="hidden peer" />
                      <label
                        htmlFor="secondAccordion"
                        className="flex items-center px-4 py-2 cursor-pointer bg-base-100 hover:bg-base-200 text-sm font-medium"
                      >
                        <span>Second Section (Nested)</span>
                        <span className="peer-checked:rotate-90 transition-transform duration-200">▶</span>
                      </label>
                      <div className="peer-checked:block hidden px-4 py-2 text-xs bg-base-50">
                        <p>This is the detailed content for the second section.</p>

                        {/* Nested Accordion (Third Level) */}
                        <div className="border-b border-base-300 mt-4">
                          <input type="checkbox" id="thirdAccordion" className="hidden peer" />
                          <label
                            htmlFor="thirdAccordion"
                            className="flex justify-between items-center px-4 py-2 cursor-pointer bg-base-100 hover:bg-base-200 text-sm font-medium"
                          >
                            <span className="peer-checked:rotate-90 transition-transform duration-200">▶</span>
                            <span>Third Section (Nested)</span>
                          </label>
                          <div className="peer-checked:block hidden px-4 py-2 text-xs bg-base-50">
                            <p>This is the detailed content for the third section.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Row (Another Independent Accordion) */}
                <div className="border-b border-base-300">
                  <input type="checkbox" id="secondMainAccordion" className="hidden peer" />
                  <label
                    htmlFor="secondMainAccordion"
                    className="flex items-center px-4 py-2 cursor-pointer bg-base-100 hover:bg-base-200 text-sm font-medium"
                  >
                    <span>Second Main Section</span>
                    <span className="peer-checked:rotate-90 transition-transform duration-200">▶</span>
                  </label>
                  <div className="peer-checked:block hidden px-4 py-2 text-xs bg-base-50">
                    <p>This is the detailed content for the second main section.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* akkordion */}



          </RoundedBlock>
          <RoundedBlock className='col-span-9'>
            <CustomEditor />
          </RoundedBlock>
        </div>
        <div className='flex justify-end gap-4 p-4 bg-white mt-4'>
          <Button variant='outlined' endIcon={<BiSolidPrinter />} color='secondary' onClick={handleClose}>
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
