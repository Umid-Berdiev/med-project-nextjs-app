import AppAccordionTable, {
  AccordionProps
} from '@/src/components/Accordion/AppAccordionTable'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import PlusCircleIcon from '@/src/components/icons/PlusCircleIcon'
import Modal from '@/src/components/Modal'
import Pagination from '@/src/components/pagination/Pagination'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import classnames from 'classnames'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { BiFile, BiPencil, BiPlusCircle, BiTrash } from 'react-icons/bi'

export default function Group() {
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

  const [open, setOpen] = React.useState(false)
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
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

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='w-full max-w-72'>
          <AppInput isSearch iconPosition='right' placeholder={t('Qidirish')} />
        </div>
        <Button onClick={() => setOpen(!open)}>
          {t('Qo’shish')} <PlusCircleIcon />
        </Button>
      </div>
      <div className='rounded-md border-none'>
        <div>
          {items.map((item: AccordionProps, index: number) => (
            <AppAccordionTable
              key={index}
              {...item}
              className='border-b bg-white px-2 py-2  pl-4'
            />
          ))}
        </div>
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
        title='Qo’shish'
        open={open}
        size='lg'
        onClose={handleClose}
      >
        {states.map((res, index) => (
          <div key={index}>
            <div
              className={classnames(
                'mb-4 grid grid-cols-12  gap-4 rounded-xl  p-2',
                index ? 'bg-white' : 'bg-[#2324270D]',
                `ml-${index + 1}`
              )}
            >
              {index + 1 == states.length ? (
                <input
                  value={res.name}
                  onChange={e => {
                    states[index].name = e.target.value
                    setStates([...states])
                  }}
                  placeholder={t('Nomini kiriting')}
                  className='col-span-11 h-9 w-full rounded-lg border border-[#2324271A] px-3 text-[13px] font-normal text-[#161624] outline-none  focus:border-secondary focus:shadow-custom-blue'
                />
              ) : (
                <div className='col-span-11 px-3 text-sm'>{res.name}</div>
              )}
              <div
                className='col-span-1 flex items-center justify-center'
                onClick={() => {
                  setOpenDelete(true)
                }}
              >
                {Boolean(res?.name) && <BiTrash color='red' size={20} />}
              </div>
            </div>

            {Boolean(res.name) && index + 1 == states.length && (
              <div
                className={classnames(
                  `mt-4 cursor-pointer rounded-xl bg-white p-2`,
                  `ml-${states.reduce((a, b) => a + b.id, 0) + 1}`
                )}
                onClick={() =>
                  setStates([...states, { id: states.length + 1 }])
                }
              >
                <div className='flex items-center justify-center gap-4'>
                  <div className='text-sm text-secondary'>
                    {t('Pastki toifa qo’shish')}
                  </div>
                  <BiPlusCircle size={20} className='text-secondary' />
                </div>
              </div>
            )}
          </div>
        ))}
        <div className='flex justify-end'>
          <Button className='mt-4'>{t('Qo’shish')}</Button>
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
            {t('Siz ushbu Gruppa tibbiy xizmatini o’chirib yubormoqchimisiz?')}
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
    </div>
  )
}
