// Next Imports
import { Locale } from '@/src/configs/i18n'

type Props = {
  params: {
    locale: Locale
  }
}

const LoginPage = async ({ params }: Props) => {
  return (
    <div className='flex h-full flex-col items-center justify-center p-6'>
      {params.locale}
    </div>
  )
}

export default LoginPage
