import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import classnames from 'classnames'
export type AccordionProps = {
  title?: string
  header?: React.ReactNode
  content: React.ReactNode
  iconPosition?: 'start' | 'end'
  checkbox?: boolean
  className?: string
  border?: boolean
}

const AppAccordion: React.FC<AccordionProps> = ({
  content,
  title,
  header,
  iconPosition = 'start',
  checkbox = false,
  className,
  border = true
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`w-full rounded-md ${border ? 'border' : ''} p-2`}>
      <div
        className={classnames(
          'flex w-full cursor-pointer items-center gap-2 rounded-md p-2',
          className
        )}
        onClick={toggleCollapse}
      >
        <div
          className={`grid w-full items-center gap-3 ${
            iconPosition === 'start'
              ? 'grid-cols-[auto_1fr]'
              : 'grid-cols-[1fr_auto]'
          }`}
        >
          {checkbox ? (
            <input
              checked={isExpanded}
              onChange={toggleCollapse}
              type='checkbox'
              className='checkbox checkbox-sm rounded border-secondary [--chkbg:theme(colors.secondary)] [--chkfg:white]'
            />
          ) : (
            <div></div>
          )}

          {/* Icon and Title/Header */}
          <div className='flex items-center  gap-2'>
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
