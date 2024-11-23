'use client'
import { useState } from 'react'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { ITab, ITabContent, ITabContentList } from '@/src/utils/interfaces'
import { useParams, useRouter } from 'next/navigation'
import Breadcrumb from '@/src/components/Breadcrumbs'
import ProfileBlock from '@/src/views/patients/detail/ProfileBlock'
import AppCard from '@/src/components/cards/AppCard'
import ListFileIcon from '@/src/components/icons/ListFileIcon'
import Link from 'next/link'
import BalanceIcon from '@/src/components/icons/BalanceIcon'
import FileListIcon from '@/src/components/icons/FileListIcon'
import PatientsHistory from '@/src/views/patients/detail/patients-history/PatientsHistory'
import Select from '@/src/components/forms/AppSelect'
import PersonalInfo from '@/src/views/patients/detail/personal-info/PersonalInfo'

export default function PatientsDetailPage() {
  const { locale, id } = useParams()
  const tabContentList = [
    {
      id: '1',
      label: 'Bemor tarixi',
      content: <PatientsHistory />
    },
    {
      id: '2',
      label: 'Shaxsiy ma’lumotlari',
      content: <PersonalInfo />
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
    tabContentList[0].id.toString()
  )
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
          { label: 'Bemorlar', href: `/${locale}/patients` },
          { label: 'Ismoilov Shaxzod Farrux o’g’li' }
        ]}
      />
      <ProfileBlock />
      <div className='my-4 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <AppCard
          icon={<ListFileIcon />}
          title='Loglarning soni:'
          value='32'
          actions={
            <div className='flex items-start'>
              <Link
                href='#'
                className='border-b border-dashed text-[#23242780]'
              >
                Ko`rish
              </Link>
            </div>
          }
        />
        <AppCard
          icon={<BalanceIcon />}
          title='Balans:'
          value="- 1 846 843 so'm"
          color='text-red-500'
        />
        <AppCard
          icon={<FileListIcon />}
          title='Xarid qilgan tovarlar soni:'
          value='23 ta'
          actions={
            <div className='flex items-start'>
              <Link
                href='#'
                className='border-b border-dashed text-[#23242780]'
              >
                Ko`rish
              </Link>
            </div>
          }
        />
      </div>

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
          filter={
            <Select
              options={[
                {
                  value: '1',
                  label: '12845 - 2024 Cтационарный карта 27.09.2024'
                }
              ]}
              selectedValue='1'
              placeholder="Ro'yxatdan tanlang"
              onSelect={e => {
                console.log(e)
              }}
            />
          }
        />
        <Tabs activeTab={activeTab} tabContents={tabContents} />
      </div>
    </div>
  )
}
