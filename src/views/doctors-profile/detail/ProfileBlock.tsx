export default function ProfileBlock() {
  return (
    <div>
      <div className='mx-auto flex max-w-md items-center justify-between rounded-lg bg-white p-4 shadow-md'>
        <div className='flex items-center space-x-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-yellow-200 text-lg font-bold text-gray-700'>
            IS
          </div>
          <div>
            <p className='font-semibold text-gray-800'>
              Ismoilov Shaxzod Farrux o`g`li
            </p>
            <div className='flex items-center space-x-2'>
              <span className='text-sm text-gray-500'>ID: 38042</span>
              <span className='rounded bg-red-200 px-2 py-1 text-xs text-red-600'>
                QARZDOR
              </span>
            </div>
          </div>
        </div>

        <div className='text-right'>
          <p className='font-medium text-gray-700'>+998 83 956 6961</p>
          <p className='text-sm text-gray-500'>12.02.2000</p>
        </div>
      </div>
    </div>
  )
}
