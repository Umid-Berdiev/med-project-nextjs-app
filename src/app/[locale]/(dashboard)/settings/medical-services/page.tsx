'use client'

import RolePage from '@/src/app/[locale]/(dashboard)/settings/user/detail/role'
import UserPage from '@/src/app/[locale]/(dashboard)/settings/user/detail/user'
import Breadcrumb from '@/src/components/Breadcrumbs'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { ITab, ITabContent } from '@/src/utils/interfaces'
import Group from '@/src/views/settings/medical-services/Group'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function MedicalServicesPage() {
  const { locale, id } = useParams()
  const { t } = useTranslations(locale as Locale)
  const tabContentList = [
    {
      id: '1',
      label: t('Gruppa'),
      content: <Group />
    },
    {
      id: '2',
      label: t('Diagnostika'),
      content: <Group />
    },
    {
      id: '3',
      label: t('Qo’shimcha xizmatlar'),
      content: <Group />
    },
    {
      id: '4',
      label: t('Labaratoriya'),
      content: <Group />
    },
    {
      id: '5',
      label: t('Qabul'),
      content: <Group />
    },
    {
      id: '6',
      label: t('Qo’shimcha xizmatlar'),
      content: <Group />
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
          { label: 'Sozlamalar', href: `/${locale}/settings/user` },
          { label: 'Tibbiy xizmatlar' }
        ]}
      />
      <div className='my-4'>
        <Tablist
          className='text-[#23242780]'
          activeColor='text-black'
          bgColor='bg-white'
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
