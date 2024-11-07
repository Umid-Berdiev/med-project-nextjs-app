import BlankLayout from '@/src/@layouts/BlankLayout'
import { Locale } from '@/src/configs/i18n'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: { locale: Locale }
}

const Layout = ({ children, params }: Props) => {
  return <BlankLayout>{children}</BlankLayout>
}

export default Layout
