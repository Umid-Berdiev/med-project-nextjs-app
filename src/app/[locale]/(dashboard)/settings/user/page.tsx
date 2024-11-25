'use client'
import { useState } from 'react'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { ITab, ITabContent } from '@/src/utils/interfaces'
import { useParams } from 'next/navigation'
import Breadcrumb from '@/src/components/Breadcrumbs'
import UserPage from '@/src/app/[locale]/(dashboard)/settings/user/detail/user'
import RolePage from '@/src/app/[locale]/(dashboard)/settings/user/detail/role'
import { useTranslations } from '@/src/configs/t'
import { Locale } from '@/src/configs/i18n'

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
