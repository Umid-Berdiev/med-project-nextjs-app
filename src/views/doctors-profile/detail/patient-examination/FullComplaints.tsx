'use client'
import React from 'react'
import Complaints from './Complaints'
import ObjectiveExamination from './ObjectiveExamination'
import Diagnoz from './Diagnoz'
import Recommendations from './Recommendations'
import Heading4 from '@/src/components/typography/Heading4'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/src/configs/t'
import { Locale } from '@/src/configs/i18n'
import Heading5 from '@/src/components/typography/Heading5'
import CustomEditor from '@/src/components/CustomEditor'
import Button from '@/src/components/Button'
import { FiFileText } from 'react-icons/fi'
import { BiPlusCircle } from 'react-icons/bi'

export default function FullComplaints() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  return (
    <div className='flex flex-col gap-4'>
      <Heading5>{t('Shikoyatlar')}</Heading5>
      <Complaints />
      <Heading5>{t("Ob'ektiv tekshiruv")}</Heading5>
      <ObjectiveExamination />
      <Heading5>{t('Diagnoz')}</Heading5>
      <Diagnoz />
      <Heading5>{t('Tavsiyalar')}</Heading5>
      <div className='flex flex-col gap-2'>
        <CustomEditor />
        <div>
          <Button
            startIcon={<FiFileText />}
            variant='text'
            color='secondary'
            size='small'
            className='text-xs '
          >
            Shablondan tanlash
          </Button>
          <Button
            startIcon={<BiPlusCircle />}
            variant='text'
            color='secondary'
            size='small'
            className='text-xs '
          >
            Shablonga qo’shish
          </Button>
        </div>
        <div className='flex w-full justify-end gap-2'>
          <Button variant='outlined' color='secondary' size='small'>
            Saqlash va chop etish
          </Button>
          <Button variant='contained' color='secondary' size='small'>
            Saqlash
          </Button>
        </div>
      </div>
    </div>
  )
}
