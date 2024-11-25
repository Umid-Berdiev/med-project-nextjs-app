import Button from '@/src/components/Button'
import CustomEditor from '@/src/components/CustomEditor'
import Modal from '@/src/components/Modal'
import Table, { ITableColumn } from '@/src/components/table/Table'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import { BiPlusCircle } from 'react-icons/bi'
import { FiFileText } from 'react-icons/fi'

export default function Complaints() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)

  const [open, setOpen] = useState(false)
  const [openTpemp, setOpenTemp] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  type CellType = {
    id: number
    name: string
    createdAt: string
    select: boolean
  }
  const columns: ITableColumn<CellType>[] = [
    {
      header: '№',
      col: (_: CellType, index?: number) =>
        index !== undefined ? index + 1 : 0
    },

    {
      header: 'Nomi',
      headerAlign: 'center',
      alignItem: 'center',
      col: (row: CellType) => row.name,
      sortable: true
    },

    {
      header: 'Yaratilgan sana',
      col: (row: CellType) => row.createdAt,
      sortable: true
    },

    {
      header: 'Tanlash',
      col: (row: CellType) => (
        <div className='flex justify-center'>
          <input
            type='checkbox'
            className='checkbox checkbox-sm rounded border-secondary [--chkbg:theme(colors.secondary)] [--chkfg:white] '
          />
        </div>
      )
    }
  ]

  const data: CellType[] = [
    {
      id: 1,
      name: 'Shablon nomi yoziladi',
      createdAt: '2023-01-01',
      select: false
    },
    {
      id: 2,
      name: 'Shablon nomi yoziladi',
      createdAt: '2023-01-01',
      select: false
    },
    {
      id: 3,
      name: 'Shablon nomi yoziladi',
      createdAt: '2023-01-01',
      select: false
    }
  ]

  return (
    <div className='flex flex-col gap-3'>
      <div>
        <div className='text-[rgba(35, 36, 39, 1)] text-xs font-semibold'>
          Bemor shikoyati
        </div>
        <CustomEditor />
        <div>
          <Button
            startIcon={<FiFileText />}
            onClick={handleClick}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] '
          >
            Shablondan tanlash
          </Button>
          <Button
            startIcon={<BiPlusCircle />}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] '
            onClick={() => setOpenTemp(true)}
          >
            Shablonga qo’shish
          </Button>
        </div>
      </div>
      <div>
        <div className='text-[rgba(35, 36, 39, 1)] text-xs font-semibold'>
          Аnamnesis Morbi
        </div>
        <CustomEditor />
        <div>
          <Button
            startIcon={<FiFileText />}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] '
          >
            Shablondan tanlash
          </Button>
          <Button
            startIcon={<BiPlusCircle />}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] '
            onClick={() => setOpenTemp(true)}
          >
            Shablonga qo’shish
          </Button>
        </div>
      </div>
      <div>
        <div className='text-[rgba(35, 36, 39, 1)] text-xs font-semibold'>
          Аnamnesis Vitae
        </div>
        <CustomEditor />
        <div>
          <Button
            startIcon={<FiFileText />}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] '
          >
            Shablondan tanlash
          </Button>
          <Button
            startIcon={<BiPlusCircle />}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] '
            onClick={() => setOpenTemp(true)}
          >
            Shablonga qo’shish
          </Button>
        </div>
      </div>
      <div className='flex w-full justify-end'>
        <Button variant='contained' color='secondary'>
          Keyingisi
        </Button>
      </div>
      <Modal title='Shablonlar' open={open} size='lg' onClose={handleClose}>
        <Table columns={columns} data={data} stripped hoverable />
        <div className='flex justify-end gap-1 py-2'>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Bekor qilish
          </Button>
          <Button variant='contained' color='secondary'>
            Qo&apos;shish
          </Button>
        </div>
      </Modal>
      <Modal
        title="Shablon qo'shish"
        open={openTpemp}
        size='lg'
        onClose={() => setOpenTemp(false)}
      >
        <form className='flex h-full flex-col gap-2'>
          <div className='w-full'>
            <label className='mb-1 text-xs font-semibold leading-4 text-[#232427]'>
              <span className='pr-1 text-[#E6533C]'>*</span>
              {t('Nomi')}
            </label>
            <input
              type='text'
              id='input'
              placeholder={t('Shablon nomi')}
              className='h-9 w-full rounded-lg border border-[#2324271A] px-3 text-[13px]  text-[#161624] outline-none'
            />
          </div>
          <CustomEditor height={220} />
          <div className='modal-action  flex  justify-end gap-1 py-1'>
            <Button
              variant='outlined'
              color='secondary'
              onClick={() => setOpenTemp(false)}
            >
              Bekor qilish
            </Button>
            <Button variant='contained' color='secondary'>
              Qo&apos;shish
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
