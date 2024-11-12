import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'

type Props = {
  open: boolean
  onClick: () => void
  onClose: () => void
  size?: 'md' | 'lg'
  children: React.ReactNode
}

const Modal = ({ open, onClick, onClose, size, children }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (modalRef.current) {
      if (open) {
        modalRef.current.setAttribute('open', 'true')
      } else {
        modalRef.current.removeAttribute('open')
      }
    }
  }, [open])

  const handleClose = () => {
    onClose()
    if (modalRef.current) {
      modalRef.current.removeAttribute('open')
    }
  }

  return (
    <dialog ref={modalRef} id='my_modal_1' className='modal'>
      <form
        method='dialog'
        className={classnames(
          'modal-box',
          size === 'lg' ? 'w-11/12 max-w-5xl' : ''
        )}
      >
        <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'>
          ✕
        </button>

        {children}
        <div className='modal-action'>
          <button className='btn' onClick={onClick}>
            Save
          </button>
          <button className='btn' onClick={handleClose}>
            Close
          </button>
        </div>
      </form>
    </dialog>
  )
}

export default Modal
