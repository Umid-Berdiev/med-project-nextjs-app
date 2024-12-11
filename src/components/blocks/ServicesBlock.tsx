import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import AppDropdownWithRadio from '../dropdowns/AppDropdownWithRadio'
import AppSelect from '../forms/AppSelect'
import Heading6 from '../typography/Heading6'
import RoundedBlock from './RoundedBlock'

export default function ServicesBlock({ className }: { className?: string }) {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [selectedReception, setSelectedReception] = useState('allergolog')
  const [selectedDiagnostic, setSelectedDiagnostic] = useState('allergolog')
  const [selectedAdditionService, setSelectedAdditionService] =
    useState('allergolog')
  const [selectedOperation, setSelectedOperation] = useState('allergolog')
  const [selectedDoctor, setSelectedDoctor] = useState('allergolog')

  const doctorsList = [
    {
      label: 'Dr. John Doe',
      value: 'john_doe'
    },
    {
      label: 'Dr. Jane Doe',
      value: 'jane_doe'
    },
    {
      label: 'Dr. John Smith',
      value: 'john_smith'
    },
    {
      label: 'Dr. Jane Smith',
      value: 'jane_smith'
    }
  ]

  const receptionOptions = [
    {
      name: t('Allergolog'),
      value: 'allergolog'
    },
    {
      name: t('Aritmolog'),
      value: 'aritmolog'
    },
    {
      name: t('Anestaziolog'),
      value: 'anestaziolog'
    },
    {
      name: t('Detaksikolog'),
      value: 'detaksikolog'
    }
  ]

  const diagnosticOptions = [
    {
      name: t('Allergolog'),
      value: 'allergolog'
    },
    {
      name: t('Aritmolog'),
      value: 'aritmolog'
    },
    {
      name: t('Anestaziolog'),
      value: 'anestaziolog'
    },
    {
      name: t('Detaksikolog'),
      value: 'detaksikolog'
    }
  ]

  return (
    <RoundedBlock className={className}>
      <Heading6>{t('Xizmatlar')}</Heading6>
      <div className='flex flex-wrap gap-3'>
        <AppDropdownWithRadio
          options={receptionOptions}
          title={t('Qabul')}
          selectedOption={selectedReception}
          setSelectedOption={setSelectedReception}
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t('Diagnostika')}
          selectedOption={selectedDiagnostic}
          setSelectedOption={setSelectedDiagnostic}
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t("Qo'shimcha xizmatlar")}
          selectedOption={selectedAdditionService}
          setSelectedOption={setSelectedAdditionService}
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t('Operatsiya')}
          selectedOption={selectedOperation}
          setSelectedOption={setSelectedOperation}
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t('Fizioterapiya')}
          selectedOption={selectedOperation}
          setSelectedOption={setSelectedOperation}
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t('Labaratoriya')}
          selectedOption={selectedOperation}
          setSelectedOption={setSelectedOperation}
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t('Stomatologiya')}
          selectedOption={selectedOperation}
          setSelectedOption={setSelectedOperation}
        />
      </div>
      {selectedReception === 'allergolog' && (
        <div className=''>
          <p className='text-base font-semibold'>{t('Allergolog')}</p>
          <div className='flex w-full gap-5'>
            <label className='basis-1/2'>
              <span className='text-xs font-semibold'>{t('Shifokor')}</span>
              <AppSelect selectedValue={selectedDoctor} options={doctorsList} />
            </label>
            <label className='basis-1/2'>
              <span className='text-xs font-semibold'>{t('Xizmat turi')}</span>
              <AppSelect selectedValue={selectedDoctor} options={doctorsList} />
            </label>
          </div>
        </div>
      )}
    </RoundedBlock>
  )
}
