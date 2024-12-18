'use client'
import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import TheSidebar from '../components/Sidebar'
import { Locale } from '../configs/i18n'
import { useAuth } from '../hooks/useAuth'
import { withAxios } from '../utils/api/api'
import endpoints from '../utils/api/endpoints'
import { Loader } from '../components/spinner/Loader'
import { useRouter } from 'next/navigation'
export default function VerticalLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}) {
  const { user, updateUser, loading } = useAuth()
  const router = useRouter()
  const fetchData = async () => {
    const { data } = await withAxios()(endpoints.auth.me)

    updateUser({
      ...data?.result?.userProfile
    })
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (loading) return <Loader />
  if (!user) {
    router.push(`/${params.locale}/login`)
  }

  return (
    // <div className='flex'>
    //   <TheSidebar />
    //   <div className='flex-grow'>
    //     <Header locale={params.locale} />
    //     {children}
    //   </div>
    // </div>

    // make layout with sidebar that can be toggled on mobile view and that has a max width of 256px on desktop view
    <div className='flex h-screen'>
      <TheSidebar />
      {/* make main content scrollable if it's inner blocks have more width than it */}
      <div
        className='
        scrollbar-thin
        scrollbar-thumb-rounded-full
        scrollbar-thumb-gray-300
        scrollbar-track-gray-100
        scrollbar-thumb-hover:scrollbar-thumb-gray-500
        scrollbar-track-hover:scrollbar-track-gray-200
        flex-grow
        overflow-auto
      '
      >
        <Header locale={params.locale} />
        {children}
      </div>
    </div>
  )
}
