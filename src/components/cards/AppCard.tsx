import React from 'react'
import classnames from 'classnames'
export default function AppCard({
  icon,
  title,
  value,
  actions,
  color
}: {
  icon: React.ReactNode
  title: string
  value: string
  actions?: React.ReactNode
  color?: string
}) {
  return (
    <div>
      <div className='flex  justify-between rounded-lg bg-white p-4 shadow'>
        <div className='flex items-center'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#E6FAF9]'>
            {icon}
          </div>

          <div className='ml-4'>
            <p className='text-sm text-gray-500'>{title}</p>
            <p className={classnames('text-lg font-bold ', color)}>{value}</p>
          </div>
        </div>

        {actions}
      </div>
    </div>
  )
}
