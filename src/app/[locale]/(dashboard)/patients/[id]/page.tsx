'use client'
import { useState } from 'react'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { ITab, ITabContent, ITabContentList } from '@/src/utils/interfaces'
import { useParams, useRouter } from 'next/navigation'
import Breadcrumb from '@/src/components/Breadcrumbs'
import ProfileBlock from '@/src/views/doctors-profile/detail/ProfileBlock'

export default function PatientsDetailPage() {
  const { locale, id, tab } = useParams()
  const tabContentList = [
    {
      id: '1',
      label: 'Bemor tarixi',
      content: 'Bemor tarixi'
    },
    {
      id: '2',
      label: 'Shaxsiy ma’lumotlari',
      content: 'Shaxsiy ma’lumotlari'
    },
    {
      id: '3',
      label: 'Loglar tarixi',
      content: 'Loglar tarixi'
    },
    {
      id: '4',
      label: 'Med karta',
      content: 'Med karta'
    },
    {
      id: '5',
      label: 'Stat karta',
      content: 'Stat karta'
    },
    {
      id: '6',
      label: 'Buyurtmalar',
      content: 'Buyurtmalar'
    },
    {
      id: '7',
      label: 'PDF fayllar',
      content: 'PDF fayllar'
    },
    {
      id: '8',
      label: 'Kurslar',
      content: 'Kurslar'
    }
  ]
  const [activeTab, setActiveTab] = useState<string>(
    Array.isArray(tab) ? tab[0] : tab
  )
  const router = useRouter()
  const tabs: ITab[] = tabContentList.map(tab => ({
    id: tab.id.toString(),
    label: tab.label
  }))

  const tabContents: ITabContent[] = tabContentList.map(tab => ({
    id: tab.id,
    content: tab.content
  }))

  return (
    <div>
      <Breadcrumb
        breadcrumbs={[
          { label: 'Bosh sahifa', href: `/${locale}/dashboard` },
          { label: 'Bemorlar', href: `/${locale}/patients` },
          { label: 'Ismoilov Shaxzod Farrux o’g’li' }
        ]}
      />
      <ProfileBlock />
      <div className='my-4'>
        <Tablist
          activeColor='text-black'
          bgColor='bg-white'
          className='text-[#23242780]'
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={e => {
            setActiveTab(e)
          }}
        />
        <Tabs activeTab={activeTab} tabContents={tabContents} />
      </div>
    </div>
  )
}
