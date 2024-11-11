import { ITablistProps, ITabsProps } from '@/src/utils/interfaces'
import classnames from 'classnames'
import React from 'react'

const Tablist: React.FC<ITablistProps> = ({
  tabs,
  activeTab,
  onTabClick,
  activeColor = 'text-black',
  bgColor = 'bg-white',
  className = '',
  variant = 'standart'
}) => {
  return (
    <div
      className={classnames(
        `tabs-boxed ${variant === 'fullWidth' ? 'tabs' : ''}`,
        className
      )}
      role='tablist'
    >
      {tabs.map(tab => (
        <a
          role='tab'
          id={`tab-item-${tab.id}`}
          className={classnames(
            className,
            `tab ${activeTab == tab.id ? `${bgColor} ${activeColor}` : ''}`
          )}
          key={tab.id}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.label}
        </a>
      ))}
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
