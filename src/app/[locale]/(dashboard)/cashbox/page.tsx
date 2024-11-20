import Breadcrumb from '@/src/components/Breadcrumbs'

export default function CashboxPage() {
  return (
    <div className='container p-4'>
      <Breadcrumb breadcrumbs={[{ label: 'Kassa' }]} />
      <section>{/* TODO: kassa sahifasi shu yerda bo'ladi */}</section>
    </div>
  )
}
