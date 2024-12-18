import BlankLayout from '@/src/@layouts/BlankLayout'
import { Providers } from '@/src/components/Provider'
import { Locale } from '@/src/configs/i18n'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: { locale: Locale }
}

const Layout = ({ children, params }: Props) => {
  return (
    <Providers>
      <BlankLayout>{children}</BlankLayout>
    </Providers>
  )
}

export default Layout
