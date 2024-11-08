import { ReactNode } from 'react'
import Heading4 from './typography/Heading4'

export default function TableHeader({
  title,
  actions
}: {
  title: string
  actions?: ReactNode
}) {
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='text-[23px] font-semibold'>{title}</div>
      {actions && <div className='flex gap-4'>{actions}</div>}
    </div>
  )
}