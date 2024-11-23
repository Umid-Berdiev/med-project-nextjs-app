'use client'
import { Tab, TabList, TabPanel } from '@/src/components/tabs/Tab'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { ITab, ITabContent } from '@/src/utils/interfaces'
import { useState } from 'react'
import HistoryContent from './HistoryContent'

export default function PatientsHistory() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs: ITab[] = [
    { id: 'all', label: 'Hammasi' },
    {
      id: 'diagnostic',
      label: 'Diagnostika'
    },
    {
      id: 'consultation',
      label: 'Konsultatsiya'
    },
    {
      id: 'labaratory',
      label: 'Labaratoriya'
    },
    {
      id: 'operatsiya',
      label: 'Operatsiya'
    },
    {
      id: 'fizioterapiya',
      label: 'Fizioterapiya'
    },
    {
      id: 'products',
      label: 'Tovarlar'
    },
    {
      id: 'additional_services',
      label: "Qo'shimcha xizmatlar"
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
