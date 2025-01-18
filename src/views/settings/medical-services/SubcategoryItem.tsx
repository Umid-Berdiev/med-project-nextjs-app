'use client'

import Button from '@/src/components/Button'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import classNames from 'classnames'
import { useParams } from 'next/navigation'
import { BiTrash } from 'react-icons/bi'

export default function SubcategoryItem({
  data,
  setData,
  setOpenDeleteModal
}: {
  data: string
  setData: (value: string) => void
  setOpenDeleteModal: () => void
}) {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)

  return (
    <div
      className={classNames(
        'flex gap-4 rounded-xl p-2',
        data ? 'bg-white' : 'bg-[#2324270D]'
      )}
    >
      <input
        defaultValue={data}
        onChange={e => {
          // @ts-ignore
          setData(e.target.value)
        }}
        placeholder={t('Nomini kiriting')}
        className='h-9 flex-grow rounded-lg border border-[#2324271A] px-3 text-sm text-[#161624] outline-none focus:border-secondary focus:shadow-custom-blue'
      />
      <Button
        variant='tonal'
        className='flex w-12 items-center justify-center'
        onClick={setOpenDeleteModal}
      >
        <BiTrash color='red' size={20} />
      </Button>
    </div>
  )
}
