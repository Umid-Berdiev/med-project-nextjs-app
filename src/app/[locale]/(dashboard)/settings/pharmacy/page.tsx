'use client'

import Breadcrumb from '@/src/components/Breadcrumbs'
import { Tablist, Tabs } from '@/src/components/tabs/Tabs'
import Heading4 from '@/src/components/typography/Heading4'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { ITab, ITabContent } from '@/src/utils/interfaces'
import PharmacyGroup from '@/src/views/settings/pharmacy/PharmacyGroup'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function PharmacyPage() {
  const { locale, id } = useParams()
  const { t } = useTranslations(locale as Locale)
  const tabContentList = [
    {
      id: '1',
      label: t('Kategoriyalar'),
      content: <PharmacyGroup />
    },
    {
      id: '2',
      label: t('Mahsulot guruhi'),
      content: <PharmacyGroup />
    },
    {
      id: '3',
      label: t("O'lchov birliklar"),
      content: <PharmacyGroup />
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
        breadcrumbs={[{ label: 'Sozlamalar' }, { label: 'Dorixona' }]}
      />
      <Heading4 className=''>{t('Dorixona')}</Heading4>
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
