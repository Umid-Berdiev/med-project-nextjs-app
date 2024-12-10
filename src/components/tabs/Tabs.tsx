import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { ITablistProps, ITabsProps } from '@/src/utils/interfaces'
import classnames from 'classnames'
import { useParams } from 'next/navigation'
import React from 'react'

const Tablist: React.FC<ITablistProps> = ({
  tabs,
  activeTab,
  onTabClick,
  activeColor = 'text-black',
  bgColor = 'bg-white',
  className = '',
  variant = 'standart',
  filter
}) => {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)

  return (
    <div className='flex justify-between'>
      <div
        className={classnames(
          `tabs-boxed`,
          variant === 'standart' && 'inline-flex', // Makes the Tablist fit the content
          className
        )}
        role='tablist'
      >
        {tabs.map(tab => (
          <a
            role='tab'
            id={`tab-item-${tab.id}`}
            className={classnames(
              `tab`,
              activeTab === tab.id ? `${bgColor} ${activeColor}` : ''
            )}
            key={tab.id}
            onClick={() => onTabClick(tab.id)}
          >
            {t(tab.label)}
          </a>
        ))}
      </div>
      <div>{filter}</div>
    </div>
  )
}

const Tabs: React.FC<ITabsProps> = ({ activeTab, tabContents }) => {
  const activeContent = tabContents.find(content => content.id === activeTab)

  return (
    <div className='mt-4'>
      {activeContent ? (
        <div>{activeContent.content}</div>
      ) : (
        <p>No content available</p>
      )}
    </div>
  )
}
export { Tablist, Tabs }
