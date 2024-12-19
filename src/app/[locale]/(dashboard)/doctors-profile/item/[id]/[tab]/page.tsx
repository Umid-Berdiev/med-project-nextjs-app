import { Locale } from '@/src/configs/i18n'
import { ITabContentList } from '@/src/utils/interfaces'
import AmbulatoryExamination from '@/src/views/doctors-profile/detail/ambulatory-examination/AmbulatoryExamination'
import DoctorsProfileDeatil from '@/src/views/doctors-profile/detail/DoctorsProfileDeatil'
import DoctorsProfileDeatilItem from '@/src/views/doctors-profile/detail/DoctorsProfileDeatilItem'
import MedicalRecord from '@/src/views/doctors-profile/detail/medical-record/MedicalRecord'
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'

const PatientExamination = dynamic(
  () =>
    import(
      '@/src/views/doctors-profile/detail/patient-examination/FullComplaints'
    )
)

const tabContentList: ITabContentList[] = [
  {
    id: 'patient-examination',
    content: <PatientExamination />,
    label: "Bemorni ko'rikdan o'tkazish"
  },
  { id: 'medical-record', content: <MedicalRecord />, label: 'Tibbiy karta' },
  {
    id: 'ambulatory-examination',
    content: <AmbulatoryExamination />,
    label: 'Ambulator tekshiruv'
  }
]

const DoctorsProfileDetail = async ({
  params
}: {
  params: { id: number; locale: Locale; tab: string }
}) => {
  if (tabContentList.find(tab => tab.id === params.tab))
    return <DoctorsProfileDeatilItem tabContentList={tabContentList} />
  else redirect(`/${params.locale}/not-found`)
}

export default DoctorsProfileDetail
