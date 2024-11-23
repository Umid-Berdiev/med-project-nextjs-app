import React, { useRef } from 'react'
import cn from 'classnames'
import { useOnClickOutside } from 'usehooks-ts'
type Props = {
  children: React.ReactNode
  open: boolean
  disableClickOutside?: boolean
  onClose(): void
  size?: 'lg' | 'md'
  title?: string
}

const Modal = ({
  children,
  open,
  disableClickOutside,
  onClose,
  size,
  title
}: Props) => {
  const ref = useRef(null)
  useOnClickOutside(ref, () => {
    if (!disableClickOutside) {
      onClose()
    }
  })

  const modalClass = cn(
    {
      'modal-open ': open
    },
    'modal '
  )
  return (
    <div className={modalClass}>
      <div
        className={`modal-box ${size === 'lg' ? ' max-w-5xl' : ''}`}
        ref={ref}
      >
        <button
          className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
          onClick={onClose}
        >
          ✕
        </button>
        <h1 className='text-[18px] font-semibold text-[#232427]'>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default Modal