'use client'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const BlankLayout = (props: Props) => {
  const { children } = props

  return <div className='h-screen w-screen'>{children}</div>
}

export default BlankLayout
