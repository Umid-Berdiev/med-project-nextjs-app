import { ThemeProvider } from '@/src/components/ThemeProvider'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import '@/src/styles/globals.css'

import '@/src/styles/custom.scss'
import { Toaster } from 'react-hot-toast'

// const roboto = Roboto_Flex({
//   subsets: ['latin', 'cyrillic'],
//   variable: '--roboto',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// })

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--inter',
  weight: ['400', '500', '600', '700']
})

// const magnetTrial = localFont({
//   src: [
//     {
//       path: '../fonts/MagnetTrial/MagnetTrial-Regular.ttf',
//       weight: '400',
//       style: 'normal'
//     },
//     {
//       path: '../fonts/MagnetTrial/MagnetTrial-Medium.ttf',
//       weight: '500',
//       style: 'normal'
//     },
//     {
//       path: '../fonts/MagnetTrial/MagnetTrial-SemiBold.ttf',
//       weight: '600',
//       style: 'normal'
//     },
//     {
//       path: '../fonts/MagnetTrial/MagnetTrial-Bold.ttf',
//       weight: '700',
//       style: 'normal'
//     }
//   ],
//   variable: '--magnet-trial'
// })

// const manrope = Manrope({
//   subsets: ['latin', 'cyrillic'],
//   variable: '--manrope',
//   weight: ['200', '300', '400', '500', '600', '700', '800']
// })

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html
      className={`${inter.variable} scroll-smooth`}
      lang={locale}
      dir={'ltr'}
      suppressHydrationWarning
    >
      <body>
        <Toaster />
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='light'
          themes={[
            'light'
            // 'dark'
            // 'instagram',
            // 'facebook',
            // 'discord',
            // 'netflix',
            // 'twilight',
            // 'reddit'
          ]}
        >
          <NextTopLoader
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            easing='ease'
            speed={200}
            shadow='0 0 10px #2299DD,0 0 5px #2299DD'
            color='var(--primary)'
            showSpinner={false}
          />
          <main className='mx-auto'>{children}</main>
          {/* <TheFooter /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
