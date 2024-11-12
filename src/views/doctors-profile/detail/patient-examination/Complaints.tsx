import Button from '@/src/components/Button'
import CustomEditor from '@/src/components/CustomEditor'
import Modal from '@/src/components/Modal'

import React from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import { FiFileText } from 'react-icons/fi'

export default function Complaints() {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <div className='text-[rgba(35, 36, 39, 1)] text-[12px] font-semibold'>
          Bemor shikoyati
        </div>
        <CustomEditor />
        <div>
          <Button
            startIcon={<FiFileText />}
            onClick={handleClick}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] font-normal'
          >
            Shablondan tanlash
          </Button>
          <Button
            startIcon={<BiPlusCircle />}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] font-normal'
          >
            Shablonga qo’shish
          </Button>
        </div>
      </div>
      <div>
        <div className='text-[rgba(35, 36, 39, 1)] text-[12px] font-semibold'>
          Аnamnesis Morbi
        </div>
        <CustomEditor />
        <div>
          <Button
            startIcon={<FiFileText />}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] font-normal'
          >
            Shablondan tanlash
          </Button>
          <Button
            startIcon={<BiPlusCircle />}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] font-normal'
          >
            Shablonga qo’shish
          </Button>
        </div>
      </div>
      <div>
        <div className='text-[rgba(35, 36, 39, 1)] text-[12px] font-semibold'>
          Аnamnesis Vitae
        </div>
        <CustomEditor />
        <div>
          <Button
            startIcon={<FiFileText />}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] font-normal'
          >
            Shablondan tanlash
          </Button>
          <Button
            startIcon={<BiPlusCircle />}
            variant='text'
            color='secondary'
            size='small'
            className='text-[11px] font-normal'
          >
            Shablonga qo’shish
          </Button>
        </div>
      </div>
      <div className='flex w-full justify-end'>
        <Button variant='contained' color='secondary'>
          Keyingisi
        </Button>
      </div>
      <Modal open={open} onClick={handleClose} onClose={handleClose}>
        <div>
          <h1>Modal</h1>
        </div>
      </Modal>
    </div>
  )
}
