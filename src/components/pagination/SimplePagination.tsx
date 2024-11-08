import { act, useMemo } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

interface PaginationButtonProps {
  handleClick: () => void
  disabled: boolean
  page?: number | string
  activePage?: number
}

interface SimplePaginationProps {
  activePage: number
  pageCount: number
  changeCurrentPage: (page: number) => void
}

function PaginationButton({
  handleClick,
  disabled,
  page,
  activePage
}: PaginationButtonProps) {
  return (
    <button
      className={`hover:bg-customDark flex h-8 w-8 items-center justify-center rounded-lg disabled:cursor-not-allowed disabled:hover:bg-transparent ${
        page === activePage
          ? 'hover:bg-customSuccessDeep bg-button text-white hover:bg-opacity-100'
          : 'hover:bg-customDark hover:bg-opacity-5'
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {page === '...' ? '...' : Number(page) + 1}
    </button>
  )
}

function PaginationPrevButton({
  handleClick,
  disabled
}: PaginationButtonProps) {
  return (
    <button
      className={`hover:bg-customDark flex h-8 w-8 items-center justify-center rounded-lg hover:bg-opacity-5 disabled:cursor-not-allowed disabled:hover:bg-transparent`}
      onClick={handleClick}
      disabled={disabled}
    >
      <HiArrowLeft />
    </button>
  )
}

function PaginationNextButton({
  handleClick,
  disabled
}: PaginationButtonProps) {
  return (
    <button
      className={`hover:bg-customDark flex h-8 w-8 items-center justify-center rounded-lg hover:bg-opacity-5 disabled:cursor-not-allowed disabled:hover:bg-transparent`}
      onClick={handleClick}
      disabled={disabled}
    >
      <HiArrowRight />
    </button>
  )
}

export default function SimplePagination({
  activePage = 0,
  pageCount = 1,
  changeCurrentPage
}: SimplePaginationProps) {
  const visiblePages = useMemo(() => {
    const maxVisiblePages = 3
    const halfVisiblePages = Math.floor(maxVisiblePages / 2)
    const startPage = Math.max(0, activePage - halfVisiblePages)
    const endPage = Math.min(pageCount, startPage + maxVisiblePages - 1)

    const pages: (number | string)[] = Array.from(
      { length: endPage - startPage },
      (_, i) => startPage + i
    )
    console.log(activePage, pageCount, startPage, endPage, pages)

    if (startPage > 1) {
      pages.unshift('...')
      pages.unshift(0)
    } else if (startPage === 1) {
      pages.unshift(0)
    }

    if (endPage < pageCount - 1) {
      pages.push('...')
      pages.push(pageCount - 1)
    } else if (endPage === pageCount - 1) {
      pages.push(pageCount - 1)
    }

    return pages
  }, [activePage, pageCount])

  return (
    <div className='flex gap-2'>
      {activePage > 0 && (
        <PaginationPrevButton
          handleClick={() => changeCurrentPage(activePage - 1)}
          disabled={activePage === 0}
        />
      )}

      {visiblePages.map((_page, index) => (
        <PaginationButton
          page={_page}
          handleClick={() => changeCurrentPage(_page as number)}
          activePage={activePage}
          key={index}
          disabled={_page === '...'}
        />
      ))}

      {activePage + 1 < pageCount && (
        <PaginationNextButton
          handleClick={() => changeCurrentPage(activePage + 1)}
          disabled={activePage + 1 === pageCount}
        />
      )}
    </div>
  )
}
