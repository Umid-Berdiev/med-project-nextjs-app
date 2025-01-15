'use client'

import Breadcrumb from '@/src/components/Breadcrumbs'
import { Loader } from '@/src/components/spinner/Loader'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { getServicesQuery } from '@/src/utils/api/api-services'
import { IServices, ITab, ITabContent } from '@/src/utils/interfaces'
import GroupV2 from '@/src/views/settings/medical-services/GroupV2'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export default function MedicalServicesPage() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [tabContentList, setTabContentList] = useState<
    { id: string; label: string; content: any }[]
  >([])

  const [activeTab, setActiveTab] = useState<string>('')
  const tabs: ITab[] = tabContentList.map(tab => ({
    id: tab.id.toString(),
    label: tab.label
  }))

  const tabContents: ITabContent[] = useMemo(
    () =>
      tabContentList.map(tab => ({
        id: tab.id,
        content: tab.content
      })),
    [tabContentList]
  )

  useEffect(() => {
    getServicesQuery({ parent: 1 }).then(res => {
      const resData = res?.result?.data?.map((item: IServices) => ({
        id: item.id ? item.id.toString() : '',
        label: item.title,
        content: <GroupV2 services={item.child || []} />
      }))

      setTabContentList(resData || [])
    })
  }, [])

  useEffect(() => {
    if (tabContentList.length > 0) {
      setActiveTab(tabContentList[0].id.toString())
    }
  }, [tabContentList])

  return (
    <div>
      <Breadcrumb
        breadcrumbs={[
          { label: 'Sozlamalar', href: `/${locale}/settings/user` },
          { label: 'Tibbiy xizmatlar' }
        ]}
      />
      {tabContents.length > 0 ? (
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
      ) : (
        <Loader />
      )}
    </div>
  )
}
