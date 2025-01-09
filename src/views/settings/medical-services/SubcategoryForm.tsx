'use client'

import Button from '@/src/components/Button'
import Modal from '@/src/components/Modal'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import classNames from 'classnames'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import SubcategoryItem from './SubcategoryItem'

export default function SubcategoryForm({
  formData,
  setFormData,
  deleteForm
}: {
  formData: Record<string, any>
  setFormData: (value: Record<string, any>) => void
  deleteForm: () => void
}) {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [indexForDelete, setIndexForDelete] = useState<number | null>(null)

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false)
  }

  const handleDeleteItem = () => {
    const newFormData = { ...formData }
    newFormData.children.splice(indexForDelete, 1)
    setFormData(newFormData)
    setOpenDeleteModal(false)
  }

  const deleteChild = (index: number) => () => {
    setIndexForDelete(index)
    setOpenDeleteModal(true)
  }

  return (
    <div className='mx-4 space-y-2'>
      <SubcategoryItem
        data={formData.name}
        setData={(value: string) => {
          const newFormData = { ...formData }
          newFormData.name = value
          setFormData(newFormData)
        }}
        setOpenDeleteModal={deleteForm}
      />

      <div className='space-y-2'>
        {formData.children.map((res: Record<string, any>, index: number) => (
          <SubcategoryForm
            key={index}
            formData={res}
            setFormData={(value: Record<string, any>) => {
              const newFormData = { ...formData }
              newFormData.children[index] = value
              setFormData(newFormData)
            }}
            deleteForm={deleteChild(index)}
          />
        ))}
      </div>

      {formData.name && (
        <div
          className={classNames(
            `cursor-pointer rounded-xl bg-white p-2`,
            `mx-4`
          )}
          onClick={() => {
            const newFormData = { ...formData }
            newFormData.children.push({
              name: '',
              children: []
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

      {/* delete modal */}
      <Modal
        bg='bg-[#F9F9F9]'
        title={t("O'chirib yuborish")}
        open={openDeleteModal}
        size='lg/2'
        onClose={handleCloseDeleteModal}
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
            onClick={handleCloseDeleteModal}
          >
            {t('Bekor qilish')}
          </Button>
          <Button
            variant='contained'
            className='bg-[#E6533C]'
            color='error'
            onClick={handleDeleteItem}
          >
            {t("O'chirish")}
          </Button>
        </div>
      </Modal>
    </div>
  )
}
