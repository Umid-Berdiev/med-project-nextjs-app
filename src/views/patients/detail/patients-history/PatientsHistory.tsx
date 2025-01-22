'use client'
import { Tab, TabList, TabPanel } from '@/src/components/tabs/Tab'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { ITab, ITabContent } from '@/src/utils/interfaces'
import { useState } from 'react'
import HistoryContent from './HistoryContent'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/src/configs/t'
import { Locale } from '@/src/configs/i18n'

export default function PatientsHistory() {
  const [activeTab, setActiveTab] = useState('all')
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const tabs: ITab[] = [
    { id: 'all', label: t('Hammasi') },
    {
      id: 'diagnostic',
      label: t('Diagnostika')
    },
    {
      id: 'consultation',
      label: t('Konsultatsiya')
    },
    {
      id: 'labaratory',
      label: t('Labaratoriya')
    },
    {
      id: 'operatsiya',
      label: t('Operatsiya')
    },
    {
      id: 'fizioterapiya',
      label: t('Fizioterapiya')
    },
    {
      id: 'products',
      label: t('Tovarlar')
    },
    {
      id: 'additional_services',
      label: t("Qo'shimcha xizmatlar")
    }
  ]

  const tabContents: ITabContent[] = [
    { id: 'all', content: <HistoryContent /> },
    { id: 'diagnostic', content: <HistoryContent /> },
    { id: 'consultation', content: <HistoryContent /> },
    { id: 'labaratory', content: <HistoryContent /> },
    { id: 'operatsiya', content: <HistoryContent /> },
    { id: 'fizioterapiya', content: <HistoryContent /> },
    { id: 'products', content: <HistoryContent /> },
    { id: 'additional_services', content: <HistoryContent /> }
  ]
  return (
    <div>
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
    </div>
  )
}
