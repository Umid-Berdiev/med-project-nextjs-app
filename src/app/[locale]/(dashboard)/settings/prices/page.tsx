import Breadcrumb from '@/src/components/Breadcrumbs'
import PriceTableWrapper from '@/src/views/settings/prices/PriceTableWrapper'

export default function PricesPage() {
  return (
    <div className='container'>
      <Breadcrumb
        breadcrumbs={[{ label: 'Sozlamalar' }, { label: 'Narxlar varaqasi' }]}
      />
      <PriceTableWrapper />
    </div>
  )
}
