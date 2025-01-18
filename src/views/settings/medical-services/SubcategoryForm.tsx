'use client'

import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import classNames from 'classnames'
import { useParams } from 'next/navigation'
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

  const deleteChild = (index: number) => () => {
    const newFormData = { ...formData }
    newFormData.children.splice(index, 1)
    setFormData(newFormData)
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
    </div>
  )
}
