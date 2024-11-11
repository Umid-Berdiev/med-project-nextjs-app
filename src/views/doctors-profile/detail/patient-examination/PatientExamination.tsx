'use client'
import { Tab, TabContent, TabList, TabPanel } from '@/src/components/tabs/Tab'

export default function PatientExamination() {
  return (
    <div>
      <div className='my-4'>
        <TabContent activeTab='complaints'>
          <TabList
            activeColor='text-white'
            bgColor='bg-secondary'
            className='text-[#23242780]'
          >
            <Tab label='Shikoyatlar' value='complaints' />
            <Tab label="Ob'ektiv tekshiruv" value='objective-examination' />
            <Tab label='Diagnoz' value='diagnosis' />
            <Tab label='Tavsiyalar' value='recommendations' />
          </TabList>
          <TabPanel value='complaints'>
            <PatientExamination />
          </TabPanel>
          <TabPanel value='objective-examination'>Ob`ektiv tekshiruv</TabPanel>
          <TabPanel value='diagnosis'>Ambulator tekshirish</TabPanel>
          <TabPanel value='recommendations'>Ambulator tekshirish</TabPanel>
        </TabContent>
      </div>
    </div>
  )
}
