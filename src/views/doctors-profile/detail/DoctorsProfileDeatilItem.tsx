'use client'
import ProfileBlock from './ProfileBlock'
import { useState } from 'react'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { ITab, ITabContent, ITabContentList } from '@/src/utils/interfaces'
import { useParams, useRouter } from 'next/navigation'
import Breadcrumb from '@/src/components/Breadcrumbs'
import { useTranslations } from '@/src/configs/t'
import { Locale } from '@/src/configs/i18n'

export default function DoctorsProfileDeatilItem({
  tabContentList
}: {
  tabContentList: ITabContentList[]
}) {
  const { locale, id, tab } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [activeTab, setActiveTab] = useState<string>(
    Array.isArray(tab) ? tab[0] : tab
  )
  const router = useRouter()
  const tabs: ITab[] = tabContentList.map(tab => ({
    id: tab.id,
    label: t(tab.label)
  }))

  const tabContents: ITabContent[] = tabContentList.map(tab => ({
    id: tab.id,
    content: tab.content
  }))

  return (
    <div>
      <Breadcrumb
        breadcrumbs={[
          { label: t('Shifokor kabineti'), href: `/${locale}/doctors-profile` },
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
            router.push(`/${locale}/doctors-profile/item/${id}/${e}`)
          }}
        />
        <Tabs activeTab={activeTab} tabContents={tabContents} />
      </div>
    </div>
  )
}
