import DoctorsProfileTable from '@/src/views/doctors-profile/DoctorsProfileTable'
export const metadata = {
  title: 'Med| Shifokorlar',
  description: 'Med| Shifokorlar'
}
export default function PageComponent({
  params: { locale }
}: {
  params: { locale: string }
}) {
  return (
    <div className='container'>
      <DoctorsProfileTable />
    </div>
  )
}
