'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { GoHome } from 'react-icons/go'
import { Locale } from '../configs/i18n'

export type BreadcrumbLinkType = {
  label: string
  href?: string
}

export default function Breadcrumb({
  breadcrumbs
}: {
  breadcrumbs: BreadcrumbLinkType[]
}) {
  const { locale } = useParams() as { locale: Locale }

  return (
    <div className='flex w-full flex-col gap-3 align-middle'>
      <div className='breadcrumbs flex items-center gap-x-2'>
        <div className='flex gap-x-2 align-middle'>
          <Link href={`/${locale}/home`} className='flex gap-1 align-middle'>
            <GoHome size={12} />
          </Link>
        </div>

        {/* {breadcrumbs.slice(0, -1).map((link, index) => (
          <div key={index} className='flex gap-1'>
            <span> / </span>
            <Link className='text-xs' href={link.href ?? '/'}>
              {link.label}
            </Link>
          </div>
        ))}
        <div className='flex gap-1 text-sm'>
          <span> / </span>
          <div className='text-xs'>
            {breadcrumbs[breadcrumbs.length - 1].label}
          </div>
        </div> */}

        {breadcrumbs.map((link, index) => (
          <div key={index} className='flex items-center gap-x-2'>
            <span> / </span>
            {/* <Link href={link.href ? link.href : '/home'}>
              <span className='text-xs'>{link.label}</span>
            </Link> */}

            {link.href ? (
              <Link href={link.href}>
                <span className='text-xs'>{link.label}</span>
              </Link>
            ) : (
              <p className='mt-1 text-xs'>{link.label}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
