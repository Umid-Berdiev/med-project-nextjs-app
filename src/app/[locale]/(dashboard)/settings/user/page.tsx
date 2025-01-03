'use client'

import RolePage from '@/src/app/[locale]/(dashboard)/settings/user/detail/role'
import UserPage from '@/src/app/[locale]/(dashboard)/settings/user/detail/user'
import Breadcrumb from '@/src/components/Breadcrumbs'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { ITab, ITabContent } from '@/src/utils/interfaces'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function PatientsDetailPage() {
  const { locale, id } = useParams()
  const { t } = useTranslations(locale as Locale)
  const tabContentList = [
    {
      id: '1',
      label: t('Foydalanuvchilar'),
      content: <UserPage />
    },
    {
      id: '2',
      label: t('Rollar'),
      content: <RolePage />
    }
  ]
  const [activeTab, setActiveTab] = useState<string>(
    tabContentList[1].id.toString()
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
          { label: 'Foydalanuvchi' }
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
