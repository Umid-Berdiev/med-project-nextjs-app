import Breadcrumb from '@/src/components/Breadcrumbs'
import DiagnosticsTableWrapper from '@/src/views/diagnostics/DiagnosticsTableWrapper'

export default function DiagnosticsIndexPage() {
  return (
    <div className='container'>
      <Breadcrumb breadcrumbs={[{ label: 'Diagnostika' }]} />
      <DiagnosticsTableWrapper />
    </div>
  )
}
