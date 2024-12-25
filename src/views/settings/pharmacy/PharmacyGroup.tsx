import AppAccordionTable, {
  AccordionProps
} from '@/src/components/Accordion/AppAccordionTable'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppLabel from '@/src/components/forms/AppLabel'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import PencilIcon from '@/src/components/icons/PencilIcon'
import PlusCircleIcon from '@/src/components/icons/PlusCircleIcon'
import Modal from '@/src/components/Modal'
import Pagination from '@/src/components/pagination/Pagination'
import Table, { ITableColumn } from '@/src/components/table/Table'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { BiFile, BiPencil, BiTrash } from 'react-icons/bi'
import { tableData } from './mock-data'

export default function PharmacyGroup() {
  const [sortBy, setSortBy] = React.useState<{
    direction: 'asc' | 'desc'
    column: string
  }>({
    direction: 'asc',
    column: 'id'
  })
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const itemResultChild: AccordionProps[] = [
    {
      disabled: true,
      content: <div className='flex gap-2'></div>,
      iconPosition: 'start',
      border: false,
      header: (
        <div className='flex w-full items-center justify-between'>
          <div className='text-sm'>Qon ivish vaqti</div>
          <Link
            href='/settings/medical-services/Group'
            className='flex gap-2 text-sm text-[#2C9A73]'
          >
            <BiFile size={20} /> <span>Sablon 2</span>
          </Link>
          <div className='flex gap-2'>
            <button className='rounded-md bg-white p-1'>
              <BiPencil size={20} />
            </button>
            <button
              className='rounded-md bg-white p-1'
              onClick={() => {
                setOpenDelete(true)
              }}
            >
              <BiTrash color='red' size={20} />
            </button>
          </div>
        </div>
      )
    }
  ]

  const itemResult: AccordionProps[] = [
    {
      content: (
        <div className='flex gap-2 pl-4 '>
          {itemResultChild.map((item: AccordionProps, index: number) => (
            <AppAccordionTable
              key={'grand-child-' + index}
              {...item}
              className='border-b px-2 py-2 pl-4'
            />
          ))}{' '}
        </div>
      ),
      iconPosition: 'start',
      border: false,
      header: (
        <div className='flex w-full items-center justify-between'>
          <div className='text-sm'>Qon ivish vaqti</div>

          <div className='flex gap-2'>
            <button className='rounded-md bg-white p-1'>
              <BiPencil size={20} />
            </button>
            <button
              className='rounded-md bg-white p-1'
              onClick={() => {
                setOpenDelete(true)
              }}
            >
              <BiTrash color='red' size={20} />
            </button>
          </div>
        </div>
      )
    }
  ]

  const items: AccordionProps[] = [
    {
      content: (
        <>
          <div className='flex gap-2 bg-[#2324270D] pl-4'>
            {itemResult.map((item: AccordionProps, index: number) => (
              <AppAccordionTable
                key={'child-' + index}
                {...item}
                className='border-b px-2 py-2 '
              />
            ))}{' '}
          </div>
        </>
      ),
      iconPosition: 'start',
      border: false,
      header: (
        <div className='flex w-full items-center justify-between'>
          <div className='text-sm'>Bioximiya izlanish</div>
          <div className='flex gap-2'>
            <button className='rounded-md bg-white p-1'>
              <BiPencil size={20} />
            </button>
            <button
              className='rounded-md bg-white p-1'
              onClick={() => {
                setOpenDelete(true)
              }}
            >
              <BiTrash color='red' size={20} />
            </button>
          </div>
        </div>
      ),
      title: ''
    },
    {
      content: (
        <>
          <div className='flex gap-2'></div>
        </>
      ),
      iconPosition: 'start',
      border: false,
      header: (
        <div className='flex w-full items-center justify-between'>
          <div className='text-sm'>Ekspress test</div>
          <div className='flex gap-2'>
            <button className='rounded-md bg-white p-1'>
              <BiPencil size={20} />
            </button>
            <button
              className='rounded-md bg-white p-1'
              onClick={() => {
                setOpenDelete(true)
              }}
            >
              <BiTrash color='red' size={20} />
            </button>
          </div>
        </div>
      ),
      title: ''
    },
    {
      content: (
        <>
          <div className='flex gap-2'></div>
        </>
      ),
      iconPosition: 'start',
      border: false,
      header: (
        <div className='flex w-full items-center justify-between'>
          <div className='text-sm'>Ormarkerlar</div>
          <div className='flex gap-2'>
            <button className='rounded-md bg-white p-1'>
              <BiPencil size={20} />
            </button>
            <button
              className='rounded-md bg-white p-1'
              onClick={() => {
                setOpenDelete(true)
              }}
            >
              <BiTrash color='red' size={20} />
            </button>
          </div>
        </div>
      ),
      title: ''
    },
    {
      content: (
        <>
          <div className='flex gap-2'></div>
        </>
      ),
      iconPosition: 'start',
      border: false,
      header: (
        <div className='flex w-full items-center justify-between'>
          <div className='text-sm'>Koagulogramma</div>
          <div className='flex gap-2'>
            <button className='rounded-md bg-white p-1'>
              <BiPencil size={20} />
            </button>
            <button
              className='rounded-md bg-white p-1'
              onClick={() => {
                setOpenDelete(true)
              }}
            >
              <BiTrash color='red' size={20} />
            </button>
          </div>
        </div>
      ),
      title: ''
    }
  ]

  const columns: ITableColumn<Record<string, any>>[] = [
    {
      header: t('Nomi'),
      col: (row: Record<string, any>) => row.name,
      sortable: true
    },
    {
      header: t('Tartib raqami'),
      col: (row: Record<string, any>) => row.order,
      sortable: true
    },
    {
      header: t('Yetkazib beruvchi'),
      col: (row: Record<string, any>) => row.supplier,
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

  const [open, setOpen] = React.useState(false)
  const [states, setStates] = React.useState<{ name?: string; id: number }[]>([
    {
      name: '',
      id: 0
    }
  ])
  const [openDelete, setOpenDelete] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseDelete = () => {
    setOpenDelete(false)
  }

  const handleSort = (column: string) => {
    setSortBy(prev =>
      prev?.column === column
        ? { column, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { column, direction: 'asc' }
    )
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='w-full max-w-72'>
          <AppInput isSearch iconPosition='right' placeholder={t('Qidirish')} />
        </div>
        <Button onClick={() => setOpen(!open)}>
          {t("Qo'shish")} <PlusCircleIcon />
        </Button>
      </div>
      <div className='rounded-md border-none'>
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
          page={1}
          size={10}
          totalCount={20}
          changeCurrentPage={e => console.log(e)}
          changePerPage={e => console.log(e)}
        />
      </div>

      <Modal
        bg='bg-background'
        title="Qo'shish"
        open={open}
        size='lg/2'
        onClose={handleClose}
      >
        <div className='mt-4 space-y-6'>
          <div>
            <AppLabel text={t('Kategoriya nomi')} isRequired />
            <AppInput
              onChange={e => {
                //
              }}
              placeholder={t('Kategoriya nomini kiriting')}
            />
          </div>
          <div>
            <AppLabel text={t('Tartib raqami')} isRequired />
            <AppInput
              onChange={e => {
                //
              }}
              placeholder={t('Tartib raqamini kiriting')}
            />
          </div>
          <div className='form-control w-52'>
            <label className='cursor-pointer'>
              <p className='text-xs font-semibold text-[#232427]'>
                <span className='text-error'>* </span>
                <span>{t('Yetkazib beruvchi')}</span>
              </p>
            </label>
            <input
              type='checkbox'
              className='toggle toggle-accent'
              defaultChecked
            />
          </div>
          <div className='mt-4 flex'>
            <Button className='ml-auto'>{t("Qo'shish")}</Button>
          </div>
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
            {t("Siz ushbu Gruppa tibbiy xizmatini o'chirib yubormoqchimisiz?")}
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
            {t("O'chirish")}
          </Button>
        </div>
      </Modal>
    </div>
  )
}
