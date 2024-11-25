'use client'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { ITab, ITabContent } from '@/src/utils/interfaces'
import { useState } from 'react'
import Complaints from './Complaints'
import Diagnoz from './Diagnoz'
import ObjectiveExamination from './ObjectiveExamination'
import Recommendations from './Recommendations'

export default function PatientExamination() {
  const [activeTab, setActiveTab] = useState('complaints')

  const tabs: ITab[] = [
    { id: 'complaints', label: 'Shikoyatlar' },
    { id: 'objective-examination', label: "Ob'ektiv tekshiruv" },
    { id: 'diagnosis', label: 'Diagnoz' },
    { id: 'recommendations', label: 'Tavsiyalar' }
  ]

  const tabContents: ITabContent[] = [
    { id: 'complaints', content: <Complaints /> },
    { id: 'objective-examination', content: <ObjectiveExamination /> },
    { id: 'diagnosis', content: <Diagnoz /> },
    { id: 'recommendations', content: <Recommendations /> }
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
