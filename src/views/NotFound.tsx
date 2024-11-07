'use client'

// Next Imports
import Link from 'next/link'
import Button from '../app/components/Button'

const NotFound = () => {
  return (
    <div className='min-bs-[100dvh] relative flex items-center justify-center overflow-x-hidden p-6'>
      <div className='flex flex-col items-center text-center'>
        <div className='is-[90vw] sm:is-[unset] my-8 flex flex-col gap-2'>
          <div className='text-8xl font-medium text-primary'>404</div>
          <div className=' text-lg'>Page Not Found ⚠️</div>
        </div>

        <Button>
          <Link href='/'>Go back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound
