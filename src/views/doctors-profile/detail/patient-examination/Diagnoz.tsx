import Button from '@/src/components/Button'
import Select from '@/src/components/forms/AppSelect'
import React from 'react'
import { BiPlusCircle, BiTrash } from 'react-icons/bi'
import { FiFileText } from 'react-icons/fi'
import { PiPlusCircle } from 'react-icons/pi'

export default function Diagnoz() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2'>
        <div className='flex gap-2'>
          <div className='flex h-8 w-8 items-start rounded-md bg-white p-2 text-sm shadow-sm'>
            01
          </div>
          <button className='h-8 w-8 rounded-md bg-white p-2 shadow-sm'>
            <BiTrash className='text-error' />
          </button>
          <Select
            options={[
              {
                value: '1',
                label: 'Diagnoz1'
              }
            ]}
            placeholder="Ro'yxatdan tanlang"
            onSelect={e => {
              console.log(e)
            }}
          />
        </div>
        <div className='flex flex-col'>
          <textarea
            rows={5}
            className='textarea textarea-bordered  w-full max-w-lg'
            placeholder="Ob'ektiv tekshiruvni yozing"
          ></textarea>
          <div className='flex gap-2'>
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
      </div>
      <div className='flex w-full items-center justify-center rounded-md border border-dashed border-[#23242740] p-10 text-[#23242740]'>
        <PiPlusCircle /> Yangi qo`shish
      </div>
      <div className='flex w-full justify-end gap-2'>
        <Button variant='outlined' color='secondary' size='small'>
          Oldingisi
        </Button>
        <Button variant='contained' color='secondary' size='small'>
          Keyingisi
        </Button>
      </div>
    </div>
  )
}
