'use client'
import { useCallback, useEffect, useState } from 'react'
import SimplePagination from './SimplePagination'

import { useSearchParams, useRouter } from 'next/navigation'
import { IPagination } from '@/src/utils/interfaces'

const Pagination = ({
  meta: { page, pageCount, totalCount, size },
  changeCurrentPage,
  changePerPage
}: {
  meta: IPagination
  changeCurrentPage: (page: number) => void
  changePerPage: (size: number) => void
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const perPageParams = searchParams.get('perPage')

  // Initialize state with perPageParams or default to "10"
  const [perPage, setPerPage] = useState(perPageParams || '10')

  // Update perPage state when URL param changes
  useEffect(() => {
    if (perPageParams) {
      setPerPage(perPageParams)
    }
  }, [perPageParams])

  // Handler for changing perPage
  const changePerPageHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newPerPage = e.target.value
      setPerPage(newPerPage)
      changePerPage(Number(newPerPage))

      // Update URL search params
      const params = new URLSearchParams(searchParams.toString())
      params.set('perPage', newPerPage)
      router.replace(`?${params.toString()}`)
    },
    [changePerPage, searchParams, router]
  )

  // Handler for changing current page with bounds checking
  const changeCurrentPageHandler = useCallback(
    (value: number) => {
      if (pageCount && value > pageCount) {
        changeCurrentPage(pageCount)
      } else {
        changeCurrentPage(value)
      }
    },
    [pageCount, changeCurrentPage]
  )

  return (
    <div className='font-inter text-customDark mt-6 flex w-full flex-wrap items-center justify-between gap-3 text-[13px] font-semibold text-opacity-50'>
      <div className='flex items-center gap-2'>
        <span className=''>{"Ko'rsatilmoqda"}</span>
        <select
          value={perPage}
          onChange={changePerPageHandler}
          className='text-customDark rounded-lg border-[#2324271A] px-3 py-1.5 text-[13px] font-semibold text-opacity-50'
        >
          <option value={'10'}>10</option>
          <option value={'20'}>20</option>
          <option value={'25'}>25</option>
          <option value={'50'}>50</option>
        </select>
        <span className='min-w-12'>
          {'dan'} {totalCount}
        </span>
      </div>
      <div className='min-[400px] max-[50%] flex gap-1'>
        <SimplePagination
          activePage={page}
          pageCount={pageCount as number}
          changeCurrentPage={changeCurrentPageHandler}
        />
      </div>
    </div>
  )
}

export default Pagination
