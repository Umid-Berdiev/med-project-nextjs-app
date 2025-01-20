'use client'

import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputDate from '@/src/components/forms/AppInputDate'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import Modal from '@/src/components/Modal'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import TableHeader from '@/src/components/table/TableHeader'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { DiagnosticsTableCellType, ITab } from '@/src/utils/interfaces'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { SlOptionsVertical } from 'react-icons/sl'
import { TbTableOptions } from 'react-icons/tb'
import ProfileBlock from './detail/ProfileBlock'
import { diagnosticsTableData } from './mock-data'

export default function DiagnosticsTableWrapper() {
  const { locale, id, tab } = useParams()

  const { t } = useTranslations(locale as Locale)
  const [sortBy, setSortBy] = useState<
    | {
        column: string
        direction: 'asc' | 'desc'
      }
    | undefined
  >(undefined)
  const [activeTab, setActiveTab] = useState<string>('1')
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

  const columns: ITableColumn<DiagnosticsTableCellType>[] = [
    {
      header: '№',
      col: (_: DiagnosticsTableCellType, index?: number) =>
        index !== undefined ? index + 1 : 0
    },
    {
      header: 'ID',
      headerAlign: 'center',
      alignItem: 'center',
      col: (row: DiagnosticsTableCellType) => row.id,
      sortable: true
    },
    {
      header: t('Bemor ism familiyasi'),
      // headerAlign: 'center',
      // alignItem: 'center',
      col: (row: DiagnosticsTableCellType) => row.name,
      sortable: true
    },
    {
      header: t('Xizmatlar soni'),
      col: (row: DiagnosticsTableCellType) => row.service_count,
      sortable: true
    },
    {
      header: t('Jami summa'),
      col: (row: DiagnosticsTableCellType) => row.total_sum,
      sortable: true
    },
    {
      header: t('Holati'),
      col: (row: DiagnosticsTableCellType) => row.status,
      sortable: true
    },
    {
      header: t('Tugilgan kuni'),
      col: (row: DiagnosticsTableCellType) => row.birthDate,
      sortable: true
    },
    {
      header: t('Telefon raqami'),
      col: (row: DiagnosticsTableCellType) => row.phone
    },
    {
      header: t('Sana'),
      col: (row: DiagnosticsTableCellType) => row.createdAt,
      sortable: true
    },
    {
      header: (
        <div className='text-center'>
          <TbTableOptions size={18} />
        </div>
      ),
      col: (row: DiagnosticsTableCellType) => (
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
          </ul>
        </div>
      )
    }
  ]

  const handleClose = () => {
    setOpen(false)
  }

  const classRow = (row: DiagnosticsTableCellType) => {
    return row.id % 3 == 0 ? 'bg-softError ' : 'bg-softSuccess'
  }
  const router = useRouter()

  // 1-Umumiy klinik tekshiruvlar, 2-Biokimyoviy tekshiruvlar, 3-Gormonlar tekshiruvi, 4-TORCH infeksiyalari, 5-Onkomarkerlar, 6-Allergologik tekshiruv, 7-Ekspress test, 8-Koagulogramma, 9-Barcha Natijalar
  const tabs: ITab[] = [
    { id: '1', label: t('Umumiy klinik tekshiruvlar') },
    { id: '2', label: t('Biokimyoviy tekshiruvlar') },
    { id: '3', label: t('Gormonlar tekshiruvi') },
    { id: '4', label: t('TORCH infeksiyalari') },
    { id: '5', label: t('Onkomarkerlar') },
    { id: '6', label: t('Allergologik tekshiruv') },
    { id: '7', label: t('Ekspress test') },
    { id: '8', label: t('Koagulogramma') },
    { id: '9', label: t('Barcha Natijalar') }
  ]

  useEffect(() => {
    if (tab) {
      if (Array.isArray(tab)) {
        setActiveTab(tab[0])
      } else {
        setActiveTab(tab)
      }
    }
  }, [tab])

  return (
    <>
      <TableHeader
        title={t('Diagnostics')}
        actions={
          <>
            <Button variant='text' color='primary'>
              <span className='border-b border-dashed border-secondary'>
                {t('Filtr')}
              </span>
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<FaFileAlt />}
            >
              {t('Eksport')}
            </Button>
          </>
        }
      />
      <Table
        columns={columns}
        data={diagnosticsTableData.slice(
          page * perPage,
          page * perPage + perPage
        )}
        sortBy={sortBy}
        setSortBy={handleSort}
        classRow={classRow}
        hoverable={false}
        stripped={false}
      />
      <Pagination
        page={page}
        size={perPage}
        totalCount={diagnosticsTableData.length}
        changeCurrentPage={e => setPage(e)}
        changePerPage={e => setPerPage(e)}
      />

      <Modal
        bg='bg-background'
        title='Diagnostika natijalari'
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
          <div className='grid grid-cols-4 gap-4'>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Natija raqami')} />
              <AppInput placeholder={t('Natija raqami')} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Qabul qilingan sana')} />
              <AppInputDate
                mode='single'
                placeholder={t('Qabul qilingan sana')}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Natija sanasi')} />
              <AppInputDate mode='single' placeholder={t('Natija sanasi')} />
            </div>
            <div className=''>
              <div className='flex gap-4'>
                <div className='flex flex-col gap-1'>
                  <AppLabel text={t('Vazni')} />
                  <AppInput placeholder={t('Vazni')} />
                </div>
                <div className='flex flex-col gap-1'>
                  <AppLabel text={t("Bo'yi")} />
                  <AppInput placeholder={t("Bo'yi")} />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('FISH shifokor labarant')} />
              <AppInput placeholder={t('FISH shifokor labarant')} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Ijrochi')} />
              <AppSelect
                options={[
                  { value: '1', label: 'Ijrochi1' },
                  { value: '2', label: 'Ijrochi2' },
                  { value: '3', label: 'Ijrochi3' }
                ]}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Tavsiya')} />
              <AppInput placeholder={t('Tavsiya')} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t("Bo'lim")} />
              <AppInput placeholder={t("Bo'lim")} />
            </div>
          </div>
        </div>
        <div className='my-4'>
          {/* create buttons group with active one */}
          <div className='flex gap-1 overflow-x-auto rounded-lg border p-1'>
            {tabs.map(tab => (
              <Button
                key={tab.id}
                variant='text'
                color='primary'
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm ${activeTab === tab.id ? '!bg-secondary text-white' : ''}`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
          <div>
            {activeTab === '1' && (
              <div className='overflow-x-auto'>
                <table className='table table-zebra'>
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-end gap-1 py-2'>
          <Button variant='contained' color='secondary'>
            {t('Saqlash')}
          </Button>
        </div>
      </Modal>
    </>
  )
}
