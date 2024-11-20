import { locales } from '@/i18n/request'
import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { localePrefix } from './navigation'

type CustomMiddleware = (req: NextRequest) => Promise<NextRequest>
const customMiddleware: CustomMiddleware = async req => {
  console.log('Custom middleware executed before next-intl')
  // console.log(req.cookies.get('NEXT_LOCALE')?.value)
  const locale = req.cookies.get('NEXT_LOCALE')?.value

  // redirect to dashboard if the path is /
  if (req.nextUrl.pathname === `/${locale}`) {
    req.nextUrl.pathname = `/${locale}/patients`
  }

  return req
}

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'ru',
  localePrefix
})

export default async function middleware(
  req: NextRequest
): Promise<ReturnType<typeof intlMiddleware>> {
  await customMiddleware(req)
  return intlMiddleware(req)
}

export const config = {
  matcher: ['/', '/(ru|uz)/:path*']
}
