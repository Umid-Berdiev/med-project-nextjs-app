import React from 'react'

export default function ProfileBlock() {
  return (
    <div>
      <div className='flex w-full items-center justify-between rounded-lg bg-white p-4  sm:flex-col md:flex md:flex-col lg:flex-row'>
        <div className='flex items-center space-x-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-avatar-gradient text-lg font-bold text-gray-700'>
            IS
          </div>
          <div>
            <p className='font-semibold text-gray-800'>
              Ismoilov Shaxzod Farrux o`g`li
            </p>
            <div className='flex items-center space-x-2'>
              <span className='text-sm text-gray-500'>ID: 38042</span>
              <span className='rounded bg-[#FDEEEC] px-2 py-1 text-xs text-[#E6533C]'>
                QARZDOR
              </span>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <div className='mr-1 flex flex-col'>
            <span className='text-[12px] font-normal text-[#23242780]'>
              Telefon raqami:
            </span>
            <p className='text-lg font-semibold text-textDark'>
              +998 83 956 6961
            </p>
          </div>
          <div className='h-[58px] w-px bg-[#2324271A]'></div>
          <div className='ml-1 flex flex-col'>
            <span className='text-[12px] font-normal text-[#23242780]'>
              Tug’ilgan sanasi:
            </span>
            <p className='text-lg font-semibold text-textDark'>12.02.2000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
