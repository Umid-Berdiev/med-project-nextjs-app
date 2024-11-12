'use client'
import ProfileBlock from './ProfileBlock'
import { useState } from 'react'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { ITab, ITabContent, ITabContentList } from '@/src/utils/interfaces'
import { useParams, useRouter } from 'next/navigation'

export default function DoctorsProfileDeatil({
  tabContentList
}: {
  tabContentList: ITabContentList[]
}) {
  const { locale, id, tab } = useParams()

  const [activeTab, setActiveTab] = useState<string>(
    Array.isArray(tab) ? tab[0] : tab
  )
  const router = useRouter()
  const tabs: ITab[] = tabContentList.map(tab => ({
    id: tab.id,
    label: tab.label
  }))

  const tabContents: ITabContent[] = tabContentList.map(tab => ({
    id: tab.id,
    content: tab.content
  }))

  return (
    <div>
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
            router.push(`/${locale}/doctors-profile/${id}/${e}`)
          }}
        />
        <Tabs activeTab={activeTab} tabContents={tabContents} />
      </div>
    </div>
  )
}
