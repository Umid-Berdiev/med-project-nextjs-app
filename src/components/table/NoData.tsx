import Button from '../Button'
import EmptyIcon from '../icons/EmptyIcon'

export default function NoData() {
  return (
    <div className='flex h-96 w-full flex-col items-center justify-center gap-2 rounded-lg bg-white'>
      <EmptyIcon />
      <div className='font-semibold'>Hech narsa topilmadi</div>
      <div>Filterlarni o’zgartiring yoki tozalang</div>
      <Button variant='contained'>Filterni tozalash</Button>
    </div>
  )
}
