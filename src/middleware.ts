import { NextRequest, NextResponse } from 'next/server'
import { i18n, Locale } from './configs/i18n'

const customMiddleware = async (
  req: NextRequest
): Promise<NextResponse | undefined> => {
  const potentialLang = req.nextUrl.pathname.split('/')[1]
  const locale = i18n.locales.includes(potentialLang as Locale)
    ? potentialLang
    : i18n.defaultLocale
  const token = req.cookies.get('_med_control_token')?.value
  console.log(locale)

  // Agar `/login` yoki `/patients` sahifasida bo'lsa, qayta yo'naltirmaslik uchun
  if (
    req.nextUrl.pathname === `/${locale}/login` ||
    req.nextUrl.pathname === `/${locale}/home`
  ) {
    return undefined
  }
  if (req.nextUrl.pathname === `/`) {
    return NextResponse.redirect(new URL(`/${locale}`, req.url))
  }

  if (!token) {
    console.log('Redirecting to login...')
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url))
  }

  if (req.nextUrl.pathname === `/${locale}`) {
    console.log('Redirecting to patients...')
    return NextResponse.redirect(new URL(`/${locale}/home`, req.url))
  }

  return undefined // Agar shartlardan hech biri bajarilmasa
}

export default async function middleware(req: NextRequest) {
  const customResponse = await customMiddleware(req)
  if (customResponse) {
    return customResponse
  }
}

export const config = {
  matcher: ['/', '/(ru|uz)/:path*']
}
