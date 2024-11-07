// Type Imports

import BlankLayout from '@/src/@layouts/BlankLayout'
import { Locale } from '@/src/configs/i18n'
import NotFound from '@/src/views/NotFound'

const NotFoundPage = ({ params }: { params: { locale: Locale } }) => {
  return (
    <BlankLayout>
      <NotFound />
    </BlankLayout>
  )
}

export default NotFoundPage
