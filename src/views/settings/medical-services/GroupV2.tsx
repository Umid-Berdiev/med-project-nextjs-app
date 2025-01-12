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
import classNames from 'classnames'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { BiPencil, BiPlusCircle, BiTrash } from 'react-icons/bi'
import SubcategoryForm from './SubcategoryForm'
import { IServices } from '@/src/utils/interfaces'
import { deleteServicesQuery } from '@/src/utils/api/api-services'

export default function GroupV2({ services }: { services: IServices[] }) {
  const [currentData, setCurrentData] = useState<IServices>()

  const [openFormModal, setOpenFormModal] = useState(false)
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [formData, setFormData] = useState<{
    rootGroup: { title: string; id: string }
    child: IServices[]
  }>({
    rootGroup: {
      title: '',
      id: ''
    },
    child: []
  })
  const items = (data: IServices[]) =>
    data.map(res => {
      return {
        content: (
          <>
            <div className='flex gap-2 bg-[#2324270D] pl-4'>
              {items(res.child)?.map((item: AccordionProps, index: number) => (
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
            <div className='text-sm'>{res.title}</div>
            <div className='flex gap-2'>
              <button className='rounded-md bg-white p-1'>
                <BiPencil size={20} />
              </button>
              <button
                className='rounded-md bg-white p-1'
                onClick={() => {
                  setCurrentData(res)
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
    })
  const handleClose = () => {
    setOpenFormModal(false)
  }

  const handleCloseDelete = () => {
    setOpenDeleteModal(false)
  }

  const resetForm = () => {
    setFormData({
      rootGroup: {
        title: '',
        id: ''
      },
      child: []
    })
  }

  const handleDeleteChild = (indexForDelete: number) => {
    if (indexForDelete !== null) {
      const newFormData = { ...formData }
      newFormData.children.splice(indexForDelete, 1)
      setFormData(newFormData)
      // setOpenDeleteModal(false)
    } else {
      //
    }
  }
  const onDelete = async () => {
    if (currentData) {
      await deleteServicesQuery(currentData.id)
      setOpenDeleteModal(false)
      setCurrentData(undefined)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='w-full max-w-72'>
          <AppInput isSearch iconPosition='right' placeholder={t('Qidirish')} />
        </div>
        <Button onClick={() => setOpenFormModal(true)}>
          {t("Qo'shish")} <PlusCircleIcon />
        </Button>
      </div>
      <div className='rounded-md border-none'>
        <div>
          {items(services)?.map((item: AccordionProps, index: number) => (
            <AppAccordionTable
              key={index}
              {...item}
              className='border-b bg-white px-2 py-2  pl-4'
            />
          ))}
        </div>
        {/* <Pagination
          page={1}
          size={10}
          totalCount={20}
          changeCurrentPage={e => console.log(e)}
          changePerPage={e => console.log(e)}
        /> */}
      </div>

      {/* add modal */}
      <Modal
        bg='bg-background'
        title="Qo'shish"
        open={openFormModal}
        size='lg'
        onClose={() => handleClose()}
      >
        <div className='space-y-2'>
          <div
            className={classNames('flex gap-4 rounded-xl bg-[#2324270D] p-2')}
          >
            <input
              value={formData.rootGroup.title}
              placeholder={t('Nomini kiriting')}
              className='h-9 flex-grow rounded-lg border border-[#2324271A] px-3 text-sm text-[#161624] outline-none focus:border-secondary focus:shadow-custom-blue'
              onChange={e => {
                setFormData({
                  ...formData,
                  rootGroup: {
                    title: e.target.value,
                    id: `parent_${e.target.value}`
                  }
                })
              }}
            />
            <Button
              variant='tonal'
              className='flex w-12 items-center justify-center'
              onClick={resetForm}
            >
              <BiTrash color='red' size={20} />
            </Button>
          </div>
          <div className='flex flex-col gap-2'>
            {formData.child.map((res, index) => (
              <SubcategoryForm
                key={index}
                formData={res}
                setFormData={(value: IServices) => {
                  const newFormData = { ...formData }
                  newFormData.child[index] = value
                  newFormData.child[index].order = index

                  setFormData(newFormData)
                }}
                deleteForm={handleDeleteChild}
              />
            ))}
          </div>
          {formData.rootGroup.title && (
            <div
              className={classNames(
                `cursor-pointer rounded-xl bg-white p-2`,
                `mx-4`
              )}
              onClick={() => {
                const newFormData = { ...formData }
                newFormData.child.push({
                  title: '',
                  order: formData.child.length,
                  child: []
                })
                setFormData(newFormData)
              }}
            >
              <div className='flex items-center justify-center gap-4'>
                <div className='text-sm text-secondary'>
                  {t("Pastki toifa qo'shish")}
                </div>
                <BiPlusCircle size={20} className='text-secondary' />
              </div>
            </div>
          )}
        </div>
        <div className='flex justify-end'>
          <Button className='mt-4'>{t("Qo'shish")}</Button>
        </div>
      </Modal>

      {/* delete modal */}

      <Modal
        bg='bg-[#F9F9F9]'
        title={t("O'chirib yuborish")}
        open={openDelete}
        size='lg/2'
        onClose={handleCloseDelete}
      >
        <div className='my-4 block bg-white p-6'>
          <p className='text-center'>
            {t("Siz ushbu Gruppa tibbiy xizmatini o'chirib yubormoqchimisiz?")}
          </p>
          <div className='text-center text-error'>{currentData?.title}</div>
        </div>
        <div className='flex justify-end gap-1 py-2'>
          <Button
            variant='outlined'
            color='secondary'
            onClick={handleCloseDelete}
          >
            {t('Bekor qilish')}
          </Button>
          <Button
            variant='contained'
            className='bg-[#E6533C]'
            color='error'
            onClick={onDelete}
          >
            {t("O'chirish")}
          </Button>
        </div>
      </Modal>
    </div>
  )
}
