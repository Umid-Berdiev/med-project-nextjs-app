import Button from '@/src/components/Button'
import CustomEditor from '@/src/components/CustomEditor'
import { BiPlusCircle } from 'react-icons/bi'
import { FiFileText } from 'react-icons/fi'

export default function Recommendations() {
  return (
    <div className='flex flex-col gap-2'>
      <CustomEditor />
      <div>
        <Button
          startIcon={<FiFileText />}
          variant='text'
          color='secondary'
          size='small'
          className='text-xs '
        >
          Shablondan tanlash
        </Button>
        <Button
          startIcon={<BiPlusCircle />}
          variant='text'
          color='secondary'
          size='small'
          className='text-xs '
        >
          Shablonga qo’shish
        </Button>
      </div>
      <div className='flex w-full justify-end gap-2'>
        <Button variant='outlined' color='secondary' size='small'>
          Oldingisi
        </Button>
        <Button variant='contained' color='secondary' size='small'>
          Saqlash
        </Button>
      </div>
    </div>
  )
}
