'use client'

import Breadcrumb from '@/src/components/Breadcrumbs'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { getServicesQuery } from '@/src/utils/api/api-services'
import { ITab, ITabContent } from '@/src/utils/interfaces'
import Group from '@/src/views/settings/medical-services/Group'
import GroupV2 from '@/src/views/settings/medical-services/GroupV2'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MedicalServicesPage() {
  const { locale, id } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [tabContentList, setTabContentList] = useState<
    {
      id: string
      label: string
      content: React.ReactNode
    }[]
  >()

  const [activeTab, setActiveTab] = useState<string>(
    tabContentList[0]?.id.toString()
  )
  const tabs: ITab[] = tabContentList?.map(tab => ({
    id: tab.id.toString(),
    label: tab.label
  }))

  const tabContents: ITabContent[] = tabContentList?.map(tab => ({
    id: tab.id,
    content: tab.content
  }))

  useEffect(() => {
    getServicesQuery({
      // parent: 1,
      // parent_id: 1
      // expand: 'child'
    }).then(res => {
      console.log(res)
    })
  }, [])

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
