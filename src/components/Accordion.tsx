import React, { useState } from 'react'

type AccordionItem = {
  id: number
  title: string
  header?: React.ReactNode
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
  iconPosition?: 'start' | 'end'
}

const AppAccordion: React.FC<AccordionProps> = ({
  items,
  iconPosition = 'start'
}) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setOpenItemId(prev => (prev === id ? null : id))
  }

  return (
    <div className='join join-vertical w-full'>
      {items.map(item => (
        <div
          key={item.id}
          className='collapse join-item collapse-arrow border border-base-300'
        >
          <input
            type='radio'
            name='accordion'
            checked={openItemId === item.id}
            readOnly
            onClick={() => toggleAccordion(item.id)}
          />
          <div
            className={`collapse-title flex text-xl font-medium ${
              iconPosition === 'start' ? 'flex-row' : 'flex-row-reverse'
            } items-center`}
          >
            <span className='mr-2'>&#9654;</span> {/* Icon */}
            {item.header ?? item.title}
          </div>
          <div className='collapse-content'>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AppAccordion
