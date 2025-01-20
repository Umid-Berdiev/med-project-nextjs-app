import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import AppDropdownWithCheckbox from '../dropdowns/AppDropdownWithCheckbox'
import AppDropdownWithRadio from '../dropdowns/AppDropdownWithRadio'
import AppInputDate from '../forms/AppInputDate'
import AppLabel from '../forms/AppLabel'
import AppSelect from '../forms/AppSelect'
import Heading6 from '../typography/Heading6'
import RoundedBlock from './RoundedBlock'

export default function ServicesBlock({ className }: { className?: string }) {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [selectedReception, setSelectedReception] = useState('allergolog')
  const [selectedReception2, setSelectedReception2] = useState('')
  const [selectedDiagnostic, setSelectedDiagnostic] = useState('allergolog')
  const [selectedAdditionService, setSelectedAdditionService] =
    useState('allergolog')
  const [selectedOperation, setSelectedOperation] = useState('allergolog')
  const [selectedLaboratory, setSelectedLaboratory] = useState('')
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

  const testBloodOptions = [
    {
      name: t('Qon_olish_xizmati'),
      value: '1',
      price: '110 000 som'
    },
    {
      name: t('Lipidniy_spektr'),
      value: '2',
      price: '88 000 som'
    },
    {
      name: t('Qondagi_leykotsidlar_tahlili'),
      value: '3',
      price: '88 000 som'
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
          name='reception-radio'
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t('Diagnostika')}
          selectedOption={selectedDiagnostic}
          setSelectedOption={setSelectedDiagnostic}
          name='diagnostic-radio'
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t("Qo'shimcha xizmatlar")}
          selectedOption={selectedAdditionService}
          setSelectedOption={setSelectedAdditionService}
          name='addition-service-radio'
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t('Operatsiya')}
          selectedOption={selectedOperation}
          setSelectedOption={setSelectedOperation}
          name='operation-radio'
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t('Fizioterapiya')}
          selectedOption={selectedOperation}
          setSelectedOption={setSelectedOperation}
          name='physiotherapy-radio'
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t('Labaratoriya')}
          selectedOption={selectedOperation}
          setSelectedOption={setSelectedOperation}
          name='lab-radio'
        />
        <AppDropdownWithRadio
          options={diagnosticOptions}
          title={t('Stomatologiya')}
          selectedOption={selectedLaboratory}
          setSelectedOption={setSelectedLaboratory}
          name='stomatology-radio'
        />
      </div>
      {selectedReception === 'allergolog' && (
        <div className=''>
          <p className='text-base font-semibold'>{t('Allergolog')}</p>
          <div className='mt-3 grid grid-cols-2 gap-5 '>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Shifokor')} />
              <AppSelect selectedValue={selectedDoctor} options={doctorsList} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Xizmat turi')} />
              <AppSelect selectedValue={selectedDoctor} options={doctorsList} />
            </div>
          </div>
        </div>
      )}
      {selectedReception === 'allergolog' && (
        <div className=''>
          <p className='text-base font-semibold'>{t('Statsionar')}</p>
          <div className='mb-5 mt-3 grid grid-cols-2 gap-5'>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Javobgar shifokor')} />
              <AppSelect
                options={[
                  {
                    label: 'Istalgan shifokor',
                    value: '1'
                  },
                  {
                    label: 'Istalgan shifokor 2',
                    value: '2'
                  }
                ]}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Hamshira')} />
              <AppSelect
                options={[
                  {
                    label: 'Yoq',
                    value: '1'
                  },
                  {
                    label: 'Bor',
                    value: '2'
                  }
                ]}
              />
            </div>
          </div>
          <div className='mb-5 grid grid-cols-2 gap-5'>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Palata')} />
              <AppSelect
                options={[
                  {
                    label: 'Palata 1',
                    value: '1'
                  },
                  {
                    label: 'Palata 2',
                    value: '2'
                  }
                ]}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Tarif')} />
              <AppSelect
                options={[
                  {
                    label: 'Tarif 1',
                    value: '1'
                  },
                  {
                    label: 'Tarif 2',
                    value: '2'
                  }
                ]}
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div className='flex flex-col gap-1'>
              <AppLabel text={t('Ovqatlanish')} />
              <AppDropdownWithCheckbox
                title={t('Ovqatlanish')}
                selectedOption={selectedReception2}
                setSelectedOption={setSelectedReception2}
                name='food-checkbox'
                options={testBloodOptions}
              />
            </div>
            <div className='flex w-full basis-1/2 gap-5'>
              <div className='flex flex-col gap-1'>
                <AppLabel text={t('Kunlar soni')} />
                <AppSelect
                  options={[
                    {
                      label: '10',
                      value: '1'
                    },
                    {
                      label: '20',
                      value: '2'
                    }
                  ]}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <AppLabel text={t('Boshlanish kuni')} />
                <AppInputDate placeholder={t('Sana tanlang')} />
              </div>
            </div>
          </div>
        </div>
      )}
    </RoundedBlock>
  )
}
