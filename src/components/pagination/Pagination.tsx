'use client'
import { useCallback, useEffect, useState } from 'react'
import SimplePagination from './SimplePagination'

import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import classNames from 'classnames'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

const Pagination = ({
  page,
  totalCount,
  size,
  changeCurrentPage,
  changePerPage
}: {
  page: number
  totalCount: number
  size: number
  changeCurrentPage: (page: number) => void
  changePerPage: (size: number) => void
}) => {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const pageCount = Math.ceil(totalCount / size)
  const searchParams = useSearchParams()
  const router = useRouter()

  const [perPage, setPerPage] = useState(size)

  useEffect(() => {
    if (size) {
      setPerPage(size)
    }
  }, [size])

  const changePerPageHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newPerPage = e.target.value
      setPerPage(Number(newPerPage))
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
    <div className='font-inter text-customDark mt-6 flex w-full flex-wrap items-center justify-between gap-3 text-sm font-semibold text-opacity-50'>
      <div className='flex items-center gap-2'>
        <select
          value={perPage}
          onChange={changePerPageHandler}
          className='text-customDark rounded-lg border-[#2324271A] px-3 py-1.5 text-sm font-semibold text-opacity-50'
        >
          <option value={'10'}>10</option>
          <option value={'20'}>20</option>
          <option value={'25'}>25</option>
          <option value={'50'}>50</option>
        </select>
        <span className='min-w-12'>
          {totalCount} {t('tadan')}
        </span>
      </div>
      <div className='min-[400px] max-[50%] flex gap-1'>
        <SimplePagination
          activePage={page}
          pageCount={pageCount as number}
          changeCurrentPage={changeCurrentPageHandler}
        />
      </div>
      <div className='flex items-center gap-2 align-middle'>
        <span className='text-customDark'>{t("Sahifaga o'tish")}</span>
        <input
          className={classNames(
            'h-9 w-full rounded-lg border border-[#2324271A] px-3 text-sm  text-[#161624] outline-none',
            'max-w-9'
          )}
          value={page + 1}
          onChange={e => changeCurrentPage(Number(e.target.value) - 1)}
        />
      </div>
    </div>
  )
}

export default Pagination
