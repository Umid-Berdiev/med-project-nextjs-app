'use client'
import Button from '@/src/components/Button'
import CustomEditor from '@/src/components/CustomEditor'
import AppInput from '@/src/components/forms/AppInput'
import Table, { ITableColumn } from '@/src/components/table/Table'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import { BsFileEarmarkText } from 'react-icons/bs'
import { FiFileText } from 'react-icons/fi'
import { PiPlusCircleFill } from 'react-icons/pi'

const MRIBrain = () => {
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
  type CellType = {
    id: number
    name: string
    birthDate: string
    phone: string
    createdAt: string
    doctor: string
    balance: number
    ligota?: string
  }
  const columns: ITableColumn<CellType>[] = [
    {
      header: 'T/R',
      width: 'max-w-12',

      col: (_: CellType, index?: number) =>
        index !== undefined ? index + 1 : 0
    },

    {
      header: t('Kursatkich'),
      headerAlign: 'center',
      alignItem: 'center',
      col: (row: CellType) => "Ko'rsatkich nomi",
      sortable: true
    },

    {
      header: t('Norma'),
      col: (row: CellType) => '-',
      sortable: true
    },
    {
      header: t('Ulchov birligi'),
      col: (row: CellType) => '-',
      sortable: true
    },

    {
      header: <div className='text-center'>{t('Natija')}</div>,
      width: 'w-1/3',
      col: (row: CellType) => (
        <div className='flex w-full items-center gap-2 text-center'>
          <AppInput className='w-[90%]' />
          <BsFileEarmarkText className='text-secondary' size={25} />
          <PiPlusCircleFill className='text-secondary' size={25} />
        </div>
      )
    }
  ]

  const data: CellType[] = [
    {
      id: 1,
      name: 'Акулич Александр Александрович',
      birthDate: '1998-01-01',
      phone: '+998 33 332-12-14',
      createdAt: '2023-01-01',
      doctor: 'Dr. Smith',
      balance: 10000
    }
  ]

  return (
    <div>
      <Table
        columns={columns}
        data={data.slice(page * perPage, page * perPage + perPage)}
        sortBy={sortBy}
        setSortBy={handleSort}
        hoverable={false}
        stripped={true}
      />
      <div className='flex items-center justify-end py-3'>
        <div className='flex w-2/3 flex-col items-end justify-end'>
          <CustomEditor height={200} />
          <div className='flex w-full justify-start'>
            <Button
              startIcon={<FiFileText />}
              variant='text'
              color='secondary'
              size='small'
              className='text-xs '
            >
              Shablondan tanlash
            </Button>
            <Button
              startIcon={<BiPlusCircle />}
              variant='text'
              color='secondary'
              size='small'
              className='text-xs '
            >
              Shablonga qo’shish
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MRIBrain
