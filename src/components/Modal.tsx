import cn from 'classnames'
import React, { useRef } from 'react'
type Props = {
  children: React.ReactNode
  open: boolean
  disableClickOutside?: boolean
  onClose(): void
  size?: 'lg' | 'md' | 'lg/2' | 'sm'
  title?: string
  bg?: string
}

const Modal = ({
  children,
  open,
  disableClickOutside,
  onClose,
  size,
  title,
  bg
}: Props) => {
  const ref = useRef(null)
  // useOnClickOutside(ref, () => {
  //   if (!disableClickOutside) {
  //     onClose()
  //   }
  // })

  const modalClass = cn(
    {
      'modal-open ': open
    },
    'modal '
  )

  return (
    <div className={modalClass}>
      <div
        className={`modal-box bg-background ${bg} ${size === 'lg' ? ' max-w-screen-2xl' : size === 'md' ? 'max-w-5xl' : size === 'lg/2' ? 'max-w-[640px]' : 'max-w-sm'}`}
        ref={ref}
      >
        <button
          className='btn btn-circle btn-ghost btn-sm absolute right-3 top-3'
          onClick={onClose}
        >
          ✕
        </button>
        <h1 className='text-lg font-semibold text-[#232427]'>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default Modal
