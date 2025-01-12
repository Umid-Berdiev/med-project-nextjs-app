import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import classnames from 'classnames'
export type AccordionProps = {
  disabled?: boolean
  title?: string
  header?: React.ReactNode
  content: React.ReactNode
  iconPosition?: string
  checkbox?: boolean
  className?: string
  border?: boolean
}

const AppAccordionTable: React.FC<AccordionProps> = ({
  content,
  title,
  header,
  iconPosition = 'start',
  checkbox = false,
  className,
  border = true,
  disabled = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`w-full  ${border ? 'border' : ''}`}>
      <div
        className={classnames(
          'flex w-full cursor-pointer items-center gap-2 ',
          className
        )}
        onClick={disabled ? undefined : toggleCollapse}
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
            {disabled ? '' : isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
            {header ?? <span>{title}</span>}
          </div>
        </div>
      </div>

      {/* Collapsible Content */}
      {isExpanded && <div>{content}</div>}
    </div>
  )
}

export default AppAccordionTable
