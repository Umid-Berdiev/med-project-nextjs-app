import React, { useState } from 'react'
import AppInputCheckbox from '@/src/components/forms/AppInputCheckbox'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

type AccordionProps = {
  title: string
  header?: React.ReactNode
  content: React.ReactNode
  iconPosition?: 'start' | 'end'
}

const AppAccordion: React.FC<AccordionProps> = ({
  content,
  title,
  header,
  iconPosition = 'start'
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='w-full rounded-md border p-4 shadow-md'>
      {/* Header Section */}
      <div
        className='flex cursor-pointer items-center justify-between'
        onClick={toggleCollapse}
      >
        <div
          className={`flex items-center gap-3 ${
            iconPosition === 'start' ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          {/* Checkbox */}
          <input
            checked={isExpanded}
            onChange={toggleCollapse}
            type='checkbox'
            className='checkbox checkbox-sm rounded border-secondary [--chkbg:theme(colors.secondary)] [--chkfg:white]'
          />

          {/* Icon and Title/Header */}
          <div className='flex items-center gap-2'>
            {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
            {header ?? <span>{title}</span>}
          </div>
        </div>
      </div>

      {/* Collapsible Content */}
      {isExpanded && (
        <div className='mt-4 border-t pt-4'>
          <div>{content}</div>
        </div>
      )}
    </div>
  )
}

export default AppAccordion
