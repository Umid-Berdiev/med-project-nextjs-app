// TabComponents.tsx
import React, { ReactNode, SyntheticEvent, useState } from 'react'
import classnames from 'classnames'

interface TabProps {
  label: string
  value: string
  activeTab?: string
  setActiveTab?: (value: string) => void
  onChange?: (event: SyntheticEvent, value: string) => void
  activeColor?: string
  bgColor?: string
  className?: string
}

interface TabPanelProps {
  value: string
  activeTab?: string
  children: ReactNode
}

interface TabsProps {
  activeTab?: string
  setActiveTab?: (value: string) => void
  children: ReactNode
}

interface TabListProps {
  activeTab?: string
  setActiveTab?: (value: string) => void
  onChange?: (event: SyntheticEvent, value: string) => void
  activeColor?: string
  bgColor?: string
  className?: string
  children: ReactNode
  variant?: 'standart' | 'fullWidth'
}

const TabList = ({
  activeTab = '',
  setActiveTab = () => {},
  onChange = () => {},
  activeColor = 'text-black',
  bgColor = 'bg-white',
  className = '',
  variant = 'standart',
  children
}: TabListProps) => {
  return (
    <div
      className={classnames(
        `tabs-boxed ${variant === 'fullWidth' ? 'tabs' : ''}`,
        className
      )}
      role='tablist'
    >
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              activeTab,
              setActiveTab,
              onChange,
              activeColor,
              bgColor,
              className
            })
          : child
      )}
    </div>
  )
}

const Tab = ({
  label,
  value,
  activeTab = '',
  setActiveTab = () => {},
  onChange = () => {},
  activeColor = 'text-black',
  bgColor = 'bg-white',
  className = ''
}: TabProps) => {
  const isActive = activeTab === value

  const handleClick = (e: SyntheticEvent) => {
    setActiveTab(value)
    onChange(e, value)
  }

  return (
    <a
      role='tab'
      id={`tab-item-${value}`}
      className={classnames(
        className,
        `tab ${isActive ? `${bgColor} ${activeColor}` : ''}`
      )}
      onClick={handleClick}
    >
      {label}
    </a>
  )
}

const TabPanel = ({ value, activeTab = '', children }: TabPanelProps) => {
  return activeTab === value ? (
    <div className='tab-content' role='tabpanel' id={`tab-panel-${value}`}>
      {children}
    </div>
  ) : null
}

export { TabList, Tab, TabPanel }
