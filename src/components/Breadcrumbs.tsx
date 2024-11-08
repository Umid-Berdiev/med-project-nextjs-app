import Link from 'next/link'
import { BiHome } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'

export type BreadcrumbLinkType = {
  label: string
  href?: string
}

export default function Breadcrumb({
  breadcrumbs
}: {
  breadcrumbs: BreadcrumbLinkType[]
}) {
  return (
    <div className='flex w-full flex-col gap-3 py-6 align-middle'>
      <div className='breadcrumbs flex items-center'>
        <div className='mr-2 flex gap-2 align-middle'>
          <Link
            key='1'
            color='inherit'
            href='/'
            className='flex gap-1 align-middle'
          >
            <GoHome size={18} />
          </Link>
        </div>

        {breadcrumbs.slice(0, -1).map((link, index) => (
          <div key={index} className='flex gap-2'>
            <span> / </span>
            <Link key={index + 1} color='inherit' href={link?.href ?? '/'}>
              {link.label}
            </Link>
          </div>
        ))}
        <div className='flex gap-2 text-sm'>
          <span> / </span>{' '}
          <div>{breadcrumbs[breadcrumbs.length - 1].label}</div>
        </div>
      </div>
    </div>
  )
}
