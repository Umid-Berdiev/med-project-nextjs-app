import Breadcrumb from '@/src/components/Breadcrumbs'
import PriceTableWrapper from '@/src/views/settings/templates/TemplatesTableWrapper'

export default function TemplatesPage() {
  return (
    <div className='container'>
      <Breadcrumb
        breadcrumbs={[{ label: 'Sozlamalar' }, { label: 'Narxlar varaqasi' }]}
      />
      <PriceTableWrapper />
    </div>
  )
}
