'use client'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const BlankLayout = (props: Props) => {
  const { children } = props

  return <div className='is-full bs-full'>{children}</div>
}

export default BlankLayout
