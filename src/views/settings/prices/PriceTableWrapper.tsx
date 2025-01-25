'use client'

import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
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
import { useState } from 'react'

// import { useState } from 'react'
import PlusRoundIcon from '@/src/components/icons/PlusRoundIcon'
import { FaFileAlt } from 'react-icons/fa'
import { tableData } from './mock-data'

type RowDatas = { [key: string]: string }

type UserTableCellType = {
  fullname: string
  position: string
  login: string
  filial: string
  role: string
  registrationDate: string
  lastDate: string
}

export default function PriceTableWrapper() {
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
  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const columns: Record<string, any>[] = [
    {
      header: t('ID'),
      col: (row: IPrice) => row.id,
      sortable: true
    },
    {
      header: t('Sana'),
      col: (row: IPrice) => row.date,
      sortable: true
    },
    {
      header: t('Holati'),
      col: (row: IPrice) =>
        row.state === 'Tasdiqlangan' ? (
          <span className='w-40 rounded-lg bg-success px-2 py-1 text-center text-white'>
            {row.state}
          </span>
        ) : row.state === 'Tanlanmadi' ? (
          <span className='w-40 rounded-lg bg-contentTertiary px-2 py-1 text-center text-white'>
            {row.state}
          </span>
        ) : (
          <span className='w-40 rounded-lg bg-danger px-2 py-1 text-center text-white'>
            {row.state}
          </span>
        ),
      sortable: true
    },
    {
      header: t('Eksport'),
      col: (row: IPrice) => (
        <span className='text-secondary'>{row.export}</span>
      ),
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

  const [columns11, setColumns11] = useState<string[]>([
    'xizmatlar_nomi',
    'xizmatlar_kategoriyasi'
  ]) // Jadval ustunlari
  const [datas, setDatas] = useState<RowDatas[]>([
    { xizmatlar_nomi: 'Qon ivish vaqti', xizmatlar_kategoriyasi: 'Gruppa' },
    { xizmatlar_nomi: 'Qon izlanish', xizmatlar_kategoriyasi: 'Gruppa' }
  ]) // Jadval ma'lumotlari
  const [editingColumn, setEditingColumn] = useState<string | null>(null) // Tahrirlanayotgan ustun nomi

  // Yangi ustun qo‘shish funksiyasi
  const addColumn = () => {
    const newColumn = '' // Yangi ustun uchun bo'sh nom
    setColumns11([...columns11, newColumn])
    setEditingColumn(newColumn) // Tahrirlash rejimiga o‘tish

    // Har bir qatorga yangi ustunni qo‘shish
    const updatedDatas = datas.map(row => ({ ...row, [newColumn]: '' }))
    setDatas(updatedDatas)
  }

  // Ustun nomini saqlash funksiyasi
  const saveColumnName = (oldName: string, newName: string) => {
    // if ((!newName || columns11.includes(newName)) && step) {
    //   alert("Yangi ustun nomini to‘ldiring yoki takrorlanmas nom tanlang!");
    //   return;
    // }

    // Ustunni yangilash
    const updatedColumns11 = columns11.map(col =>
      col === oldName ? newName : col
    )
    setColumns11(updatedColumns11)

    // Ma'lumotlarda ustun nomini yangilash
    const updatedDatas = datas.map(row => {
      const newRow: RowDatas = {}
      for (const key in row) {
        newRow[key === oldName ? newName : key] = row[key]
      }
      return newRow
    })
    setDatas(updatedDatas)

    // Tahrirlash rejimini yopish
    setEditingColumn(null)
  }

  // Ustunni tahrirlash funksiyasi
  const editColumn = (columnName: string) => {
    setEditingColumn(columnName)
  }

  // Ustunni o‘chirish funksiyasi
  const deleteColumn = (columnToDelete: string) => {
    const updatedColumns11 = columns11.filter(col => col !== columnToDelete)
    setColumns11(updatedColumns11)

    // Ma'lumotlardan ustunni o‘chirish
    const updatedDatas = datas.map(row => {
      const { [columnToDelete]: _, ...rest } = row // O'chirilayotgan ustunni olib tashlash
      return rest
    })
    setDatas(updatedDatas)
  }

  // Jadval hujayrasini o'zgartirish funksiyasi
  const handleChange = (
    rowIndex: number,
    columnName: string,
    value: string
  ) => {
    const updatedDatas = [...datas]
    updatedDatas[rowIndex][columnName] = value
    setDatas(updatedDatas)
  }

  return (
    <>
      <Heading4 className=''>{t('Narxlar varaqasi')}</Heading4>
      <div className='mt-5 flex items-center justify-between'>
        <div className='w-full max-w-72'>
          <AppInput isSearch iconPosition='right' placeholder={t('Qidirish')} />
        </div>
        <div className='flex gap-3'>
          <Button variant='outlined' color='secondary' endIcon={<FaFileAlt />}>
            {t('Eksport')}
          </Button>
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
        <RoundedBlock className='mb-4'>
          <div className='grid grid-cols-4 gap-4'>
            <AppInput
              isSearch
              iconPosition='right'
              placeholder={t('Qidirish')}
            />
            <AppSelect
              placeholder='Xizmatlar kategoriyasi'
              options={[
                { label: 'Xizmat 1', value: '2' },
                { label: 'Xizmat 2', value: '1' }
              ]}
            />
          </div>
        </RoundedBlock>
        <RoundedBlock className='mb-4'>
          <div className='overflow-x-auto'>
            <table style={{ marginTop: '10px', width: '100%' }}>
              <thead>
                <tr>
                  {columns11.map((col, index) => (
                    <th className='py-3 pl-4 text-sm font-bold' key={index}>
                      {editingColumn === col ? (
                        <AppInput
                          type='text'
                          placeholder={t('Yangi ustun nomi')}
                          autoFocus
                          onBlur={e => saveColumnName(col, e.target.value)}
                          onKeyDown={e => {
                            if (e.key === 'Enter')
                              saveColumnName(col, e.currentTarget.value)
                          }}
                        />
                      ) : (
                        <div className='flex items-center gap-4 pr-4'>
                          <span>{col || 'Yangi ustun'}</span>
                          {index > 1 && (
                            <div className='flex items-center gap-3'>
                              <button
                                className='flex size-7 items-center justify-center rounded shadow-[0px_2px_5px_0px_#00000012]'
                                onClick={() => editColumn(col)}
                              >
                                <PencilIcon />
                              </button>
                              <button
                                className='flex size-7 items-center justify-center rounded shadow-[0px_2px_5px_0px_#00000012]'
                                onClick={() => deleteColumn(col)}
                              >
                                <DeleteIcon currentColor='#E6533C' />
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </th>
                  ))}
                  {/* Yangi ustun qo‘shish tugmasi */}
                  <th>
                    <button
                      className='ml-4 flex gap-2 whitespace-nowrap text-sm text-[#29CED2]'
                      onClick={addColumn}
                    >
                      Narx ustunini qo’shish <PlusRoundIcon />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {datas.map((row, rowIndex) => (
                  <tr className='text-sm text-[#232427]' key={rowIndex}>
                    {columns11.map((col, colIndex) => (
                      <td
                        style={{ width: '240px', minWidth: '240px' }}
                        className={`${rowIndex % 2 ? 'border-y border-[#DFE0E0] bg-[#F4F4F4]' : 'bg-white'} py-3 pl-4`}
                        key={colIndex}
                      >
                        {colIndex > 1 ? (
                          <AppInput
                            type='text'
                            value={row[col] || ''}
                            onChange={e =>
                              handleChange(rowIndex, col, e.target.value)
                            }
                          />
                        ) : (
                          row[col]
                        )}
                      </td>
                    ))}
                    {/* Bo'sh ustun - tugma joylashishi uchun */}
                    <td
                      className={`${rowIndex % 2 ? 'border-y border-[#DFE0E0] bg-[#F4F4F4]' : 'bg-white'} py-3 pl-4`}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RoundedBlock>

        <div className='flex justify-end gap-1 py-2'>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            {t('Saqlash')}
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
            Siz ushbuID: 1234 narxlar varaqasini o’chirib yubormoqchimisiz?
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
