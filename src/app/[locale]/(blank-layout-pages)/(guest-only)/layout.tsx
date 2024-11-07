import { Locale } from '@/src/configs/i18n'
import { ReactNode } from 'react'

const Layout = ({
  children,
  params
}: {
  children: ReactNode
  params: { locale: Locale }
}) => {
  return <div lang={params.locale}>{children}</div>
}

export default Layout
