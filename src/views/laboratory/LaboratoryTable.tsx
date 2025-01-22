'use client'
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputDate from '@/src/components/forms/AppInputDate'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import Modal from '@/src/components/Modal'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { ITab, ITabContent } from '@/src/utils/interfaces'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import { TbTableOptions } from 'react-icons/tb'
import ProfileBlock from '../doctors-profile/detail/ProfileBlock'
import ImageUpload from './ImageUpload'
import MRIBrain from './MRI-brain'

const tabs: ITab[] = [
  { id: 'MRI-brain', label: 'MRT bosh miyasi' },
  { id: 'EXOCardiography', label: 'EXO Kardoigrafiya' },
  { id: 'image-upload', label: 'Rasm yuklash' },
  { id: 'results', label: 'Barcha natijalar' }
]

const tabContents: ITabContent[] = [
  { id: 'MRI-brain', content: <MRIBrain /> },
  { id: 'EXOCardiography', content: 'EXO Kardoigrafiya' },
  { id: 'image-upload', content: <ImageUpload /> },
  { id: 'results', content: 'Barcha natijalar' }
]
const LaboratoryTable = () => {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [activeTab, setActiveTab] = useState('MRI-brain')

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
      header: '№',
      width: 'max-w-12',

      col: (_: CellType, index?: number) =>
        index !== undefined ? index + 1 : 0
    },
    {
      header: t('ID'),
      width: 'max-w-12',
      col: (row: CellType) => row.id,
      sortable: true
    },
    {
      header: t('Bemor ism familiyasi'),
      headerAlign: 'center',
      alignItem: 'center',
      col: (row: CellType) => row.name,
      sortable: true
    },
    {
      header: t('Xizmatlar soni'),
      col: (row: CellType) => 2,
      sortable: true
    },
    {
      header: t('Jami summa'),
      col: (row: CellType) => <div>{row.balance} so`m</div>
    },
    {
      header: t('Holati'),
      col: (row: CellType) => 'To’lanmagan'
    },
    {
      header: t('Tug`ilgan kun'),
      col: (row: CellType) => row.birthDate,
      sortable: true
    },
    {
      header: t('Telefon raqami'),
      width: 'w-48',
      col: (row: CellType) => row.phone
    },

    {
      header: t('Sana'),
      width: 'w-48',

      col: (row: CellType) => row.createdAt,
      sortable: true
    },

    {
      header: (
        <div className='text-center'>
          <TbTableOptions size={18} />
        </div>
      ),
      col: (row: CellType) => (
        <div className='dropdown dropdown-left dropdown-bottom'>
          <div tabIndex={0} role='button' className='btn'>
            <SlOptionsVertical size={14} />
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content z-50 w-52 rounded-lg bg-base-100 p-2 shadow'
          >
            <li>
              <button onClick={() => setOpen(true)}>
                {t('Diagnostika natijalari')}
              </button>
            </li>
            <li>
              <Link href={`/${locale}/laboratory/${row.id}`}>
                {t('Laboratoriya natijalari')}
              </Link>
            </li>
          </ul>
        </div>
      )
    }
  ]
  const handleClose = () => {
    setOpen(false)
  }

  const data: CellType[] = [
    {
      id: 1,
      name: 'Акулич Александр Александрович',
      birthDate: '1998-01-01',
      phone: '+998 33 332-12-14',
      createdAt: '2023-01-01',
      doctor: 'Dr. Smith',
      balance: 10000
    },
    {
      id: 2,
      name: 'Акулич Александр Александрович',
      birthDate: '1993-02-02',
      phone: '+998 33 332-12-14',
      createdAt: '2023-02-01',
      doctor: 'Dr. Smith',
      balance: 20000
    },
    {
      id: 3,
      name: 'Акулич Александр Александрович',
      birthDate: '2001-03-03',
      phone: '+998 33 332-12-14',
      createdAt: '2023-03-01',
      doctor: 'Dr. Smith',
      balance: 400
    },
    {
      id: 4,
      name: 'Акулич Александр Александрович',
      birthDate: '1995-04-04',
      phone: '+998 33 332-12-14',
      createdAt: '2023-04-01',
      doctor: 'Dr. Smith',
      balance: 400
    },
    {
      id: 5,
      name: 'Акулич Александр Александрович',
      birthDate: '1997-05-05',
      phone: '+998 33 332-12-14',
      createdAt: '2023-05-01',
      doctor: 'Dr. Smith',
      balance: 500
    }
  ]
  const classRow = (row: CellType) => {
    return row.id % 3 == 0 ? 'bg-softError ' : 'bg-softSuccess'
  }

  return (
    <div>
      <Table
        columns={columns}
        data={data.slice(page * perPage, page * perPage + perPage)}
        sortBy={sortBy}
        setSortBy={handleSort}
        classRow={classRow}
        hoverable={false}
        stripped={false}
      />
      <Pagination
        page={page}
        size={perPage}
        totalCount={data.length}
        changeCurrentPage={e => setPage(e)}
        changePerPage={e => setPerPage(e)}
      />
      <Modal
        bg='bg-background'
        title={t('Diagnostika natijalari')}
        open={open}
        size='lg'
        onClose={handleClose}
      >
        <div className='flex flex-col gap-3 py-4'>
          <ProfileBlock />
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex items-center justify-between gap-2 rounded-lg bg-white p-3'>
              <span className='text-sm  text-contentTertiary'>
                {t('Tibbiy xizmatlar')}
              </span>
              <span className='text-sm text-secondary'>
                MRT bosh miyasi; EXO Kardiografiya
              </span>
            </div>
            <div className='flex items-center justify-between gap-2 rounded-lg bg-white p-3'>
              <span className='text-sm  text-contentTertiary'>
                {t('Yashash manzili')}
              </span>
              <span className='text-sm '>
                Toshkent shahar, Yunusobod 4, Abdulla Qodiriy 29, 5
              </span>
            </div>
          </div>
          <div className='col-span-12 grid grid-cols-8 gap-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8'>
            <div className='col-span-2 flex flex-col gap-1'>
              <AppLabel text='Natija raqami' />
              <AppInput placeholder='Natija raqami' />
            </div>
            <div className='col-span-2 flex flex-col gap-1'>
              <AppLabel text='Qabul qilingan sana' />
              <AppInputDate mode='single' placeholder='Qabul qilingan sana' />
            </div>
            <div className='col-span-2 flex flex-col gap-1'>
              <AppLabel text='Natija sanasi' />
              <AppInputDate mode='single' placeholder='Natija sanasi' />
            </div>
            <div className='col-span-1 flex flex-col gap-1'>
              <AppLabel text={t('Vazni')} />
              <AppInput placeholder={t('Vazni')} disabled />
            </div>
            <div className='col-span-1 flex flex-col gap-1'>
              <AppLabel text={t("Bo'yi")} />
              <AppInput placeholder={t("Bo'yi")} disabled />
            </div>
            <div className='col-span-2 flex flex-col gap-1'>
              <AppLabel text={t('FISH shifokor labarant')} />

              <AppInput placeholder={t('Shifokor labarant')} />
            </div>
            <div className='col-span-2 flex flex-col gap-1'>
              <AppLabel text={t('Ijrochi')} />
              <AppSelect
                options={[
                  {
                    value: 'Abdullayev Alibek - II toifa',
                    label: 'Abdullayev Alibek - II toifa'
                  }
                ]}
                selectedValue='Abdullayev Alibek - II toifa'
              />
            </div>
            <div className='col-span-2 flex flex-col gap-1'>
              <AppLabel text={t('Tavsiya')} />
              <AppInput />
            </div>
            <div className='col-span-2 flex flex-col gap-1'>
              <AppLabel text={t('Bolim')} />
              <AppInput placeholder={t('Bolim')} />
            </div>
          </div>
        </div>
        <RoundedBlock>
          <div className='my-4'>
            <Tablist
              activeColor='text-white'
              bgColor='bg-secondary'
              className='text-textDark'
              tabs={tabs}
              activeTab={activeTab}
              onTabClick={setActiveTab}
            />
            <Tabs activeTab={activeTab} tabContents={tabContents} />
          </div>
        </RoundedBlock>
        <div className='flex justify-end gap-1 py-2'>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            {t('Bekor qilish')}
          </Button>
          <Button variant='contained' color='secondary'>
            {t('Saqlash')}
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default LaboratoryTable
