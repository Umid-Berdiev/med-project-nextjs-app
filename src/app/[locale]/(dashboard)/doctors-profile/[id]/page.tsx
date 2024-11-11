import type { ReactElement } from 'react'

import dynamic from 'next/dynamic'
import DoctorsProfileDeatil from '@/src/views/doctors-profile/detail/DoctorsProfileDeatil'

const PatientExamination = dynamic(
  () => import('@/src/views/doctors-profile/detail/PatientExamination')
)

const tabContentList: { [key: string]: ReactElement } = {
  'patient-examination': <PatientExamination />
}

const DoctorsProfileDetail = async () => {
  return <DoctorsProfileDeatil tabContentList={tabContentList} />
}

export default DoctorsProfileDetail
