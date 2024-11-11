import type { ReactElement } from 'react'

import dynamic from 'next/dynamic'
import DoctorsProfileDeatil from '@/src/views/doctors-profile/detail/DoctorsProfileDeatil'
import { redirect } from 'next/navigation'
import { Locale } from '@/src/configs/i18n'

const PatientExamination = dynamic(
  () =>
    import(
      '@/src/views/doctors-profile/detail/patient-examination/PatientExamination'
    )
)

const tabContentList: { [key: string]: ReactElement } = {
  'patient-examination': <PatientExamination />
}

const DoctorsProfileDetail = async ({
  params
}: {
  params: { id: number; locale: Locale; tab: string }
}) => {
  console.log('locale', params.locale)
  console.log('id', params.id)
  console.log('tab', params.tab)

  if (tabContentList[params.tab])
    return <DoctorsProfileDeatil tabContentList={tabContentList} />
  // else redirect(`/${locale}/not-found`)
}

export default DoctorsProfileDetail
