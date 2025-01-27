'use client'
import Breadcrumb from '@/src/components/Breadcrumbs'
import TemplatesTableWrapper from '@/src/views/settings/templates/TemplatesTableWrapper'
import FileIcon from '@/src/components/icons/iconTemplate/FileIcon'
import CalendarIcon from '@/src/components/icons/iconTemplate/СalendarIcon'
import ReasonIcon from '@/src/components/icons/iconTemplate/ReasonIcon'
import NumberIcon from '@/src/components/icons/iconTemplate/NumberIcon'
import Button from '@/src/components/Button'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import EyeIcon from '@/src/components/icons/iconTemplate/EyeIcon'
import CloseEyeIcon from '@/src/components/icons/iconTemplate/CloseEyeIcon'
import { useState } from 'react'
export default function TemplatesPage() {
  const { locale } = useParams()
  const [isOpenXsModal, setIsOpenXsModal] = useState(false)

  const { t } = useTranslations(locale as Locale)
  return (
    <div className='container'>
      <Breadcrumb
        breadcrumbs={[{ label: 'Sozlamalar' }, { label: 'Shablonlar' }]}
      />

      <TemplatesTableWrapper />
    
    </div>
  )
}
