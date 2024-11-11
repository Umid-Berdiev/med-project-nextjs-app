// DoctorsProfileDeatil.tsx
'use client'
import ProfileBlock from './ProfileBlock'
import { Tab, TabContent, TabList, TabPanel } from '@/src/components/tabs/Tab'
import PatientExamination from './patient-examination/PatientExamination'
import { SyntheticEvent, useState } from 'react'

export default function DoctorsProfileDeatil({
  tabContentList
}: {
  tabContentList: { [key: string]: React.ReactElement }
}) {
  const [activeTab, setActiveTab] = useState('patient-examination')

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }
  return (
    <div>
      <ProfileBlock />
      <div className='my-4'>
        <TabContent activeTab={activeTab}>
          <TabList
            onChange={handleChange}
            activeColor='text-black'
            bgColor='bg-white'
            className='text-[#23242780]'
          >
            <Tab
              label='Bemorni ko’rikdan o’tkazish'
              value='patient-examination'
            />
            <Tab label='Tibbiy karta' value='medical-record' />
            <Tab label='Ambulator tekshiruv' value='ambulatory-examination' />
          </TabList>
          <TabPanel value='patient-examination'>
            <PatientExamination />
          </TabPanel>
          <TabPanel value='medical-record'>Tibbiy karta</TabPanel>
          <TabPanel value='ambulatory-examination'>
            Ambulator tekshirish
          </TabPanel>
        </TabContent>
      </div>
    </div>
  )
}
