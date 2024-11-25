import { NextRequest, NextResponse } from 'next/server'

const customMiddleware = async (
  req: NextRequest
): Promise<NextResponse | undefined> => {
  const locale = req.cookies.get('NEXT_LOCALE')?.value || 'ru'
  const token = req.cookies.get('_med_control_token')?.value

  // Agar `/login` yoki `/patients` sahifasida bo'lsa, qayta yo'naltirmaslik uchun
  if (
    req.nextUrl.pathname === `/${locale}/login` ||
    req.nextUrl.pathname === `/${locale}/patients`
  ) {
    return undefined
  }

  if (!token) {
    console.log('Redirecting to login...')
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url))
  }

  if (req.nextUrl.pathname === `/${locale}`) {
    console.log('Redirecting to patients...')
    return NextResponse.redirect(new URL(`/${locale}/patients`, req.url))
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
