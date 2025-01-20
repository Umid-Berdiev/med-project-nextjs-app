'use client'

import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputDate from '@/src/components/forms/AppInputDate'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { ITab, ITabContent } from '@/src/utils/interfaces'
import ProfileBlock from '@/src/views/doctors-profile/detail/ProfileBlock'
import DiagnosticTable from '@/src/views/laboratory/detail/DiagnosticTable'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const tabs: ITab[] = [
  { id: 'Koagulogramma', label: 'Koagulogramma' },
  { id: 'Fermentlar', label: 'Fermentlar' },
  { id: 'Diagnoz', label: 'Diagnoz' },
  { id: 'Fibrinogen', label: 'Fibrinogen' },
  { id: 'Statsionar', label: 'Statsionar' },
  {
    id: 'Barchasi',
    label: 'Barchasi'
  }
]

const tabContents: ITabContent[] = [
  {
    id: 'Koagulogramma',
    content: (
      <div>
        <DiagnosticTable />
      </div>
    )
  },
  { id: 'Fermentlar', content: 'Fermentlar' },
  { id: 'Diagnoz', content: 'Diagnoz' },
  { id: 'Fibrinogen', content: 'Barcha natijalar' },
  { id: 'Statsionar', content: 'Statsionar' },
  { id: 'Barchasi', content: 'Barchasi' }
]

export default function LabaratoryResultPage() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [activeTab, setActiveTab] = useState('Koagulogramma')

  return (
    <>
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
        <div className='col-span-12 grid grid-cols-8 gap-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8'>
          <div className='col-span-2 flex flex-col gap-1'>
            <AppLabel text='Natija raqami' />
            <AppInput placeholder='Natija raqami' />
          </div>
          <div className='col-span-2 flex flex-col gap-1'>
            <AppLabel text='Qabul qilingan sana' />
            <AppInputDate mode='single' placeholder='Qabul qilingan sana' />
          </div>
          <div className='col-span-2 flex flex-col gap-1'>
            <AppLabel text='Natija sanasi' />
            <AppInputDate mode='single' placeholder='Natija sanasi' />
          </div>
          <div className='col-span-1 flex flex-col gap-1'>
            <AppLabel text={t('Vazni')} />
            <AppInput placeholder={t('Vazni')} disabled />
          </div>
          <div className='col-span-1 flex flex-col gap-1'>
            <AppLabel text={t("Bo'yi")} />
            <AppInput placeholder={t("Bo'yi")} disabled />
          </div>
          <div className='col-span-2 flex flex-col gap-1'>
            <AppLabel text={t('FISH shifokor labarant')} />

            <AppInput placeholder={t('Shifokor labarant')} />
          </div>
          <div className='col-span-2 flex flex-col gap-1'>
            <AppLabel text={t('Ijrochi')} />
            <AppSelect
              options={[
                {
                  value: 'Abdullayev Alibek - II toifa',
                  label: 'Abdullayev Alibek - II toifa'
                }
              ]}
              selectedValue='Abdullayev Alibek - II toifa'
            />
          </div>
          <div className='col-span-2 flex flex-col gap-1'>
            <AppLabel text={t('Tavsiya')} />
            <AppInput />
          </div>
          <div className='col-span-2 flex flex-col gap-1'>
            <AppLabel text={t('Bolim')} />
            <AppInput placeholder={t('Bolim')} />
          </div>
        </div>
      </div>
      <RoundedBlock>
        <div className='my-4'>
          <Tablist
            activeColor='text-white'
            bgColor='bg-secondary'
            className='text-textDark'
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={setActiveTab}
          />
          <Tabs activeTab={activeTab} tabContents={tabContents} />
        </div>
      </RoundedBlock>
      <div className='flex justify-end gap-1 py-2'>
        <Button variant='outlined' color='secondary'>
          {t('Bekor qilish')}
        </Button>
        <Button variant='contained' color='secondary'>
          {t('Saqlash')}
        </Button>
      </div>
    </>
  )
}
