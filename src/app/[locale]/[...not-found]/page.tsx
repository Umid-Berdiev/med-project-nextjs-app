// Type Imports

import BlankLayout from '@/src/@layouts/BlankLayout'
import { Providers } from '@/src/components/Provider'
import { Locale } from '@/src/configs/i18n'
import NotFound from '@/src/views/NotFound'

const NotFoundPage = ({ params }: { params: { locale: Locale } }) => {
  return (
    <Providers>
      <BlankLayout>
        <NotFound locale={params.locale} />
      </BlankLayout>
    </Providers>
  )
}

export default NotFoundPage
