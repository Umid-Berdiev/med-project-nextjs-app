'use client'
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import AppInput from '@/src/components/forms/AppInput'
import AppInputCheckbox from '@/src/components/forms/AppInputCheckbox'
import AppInputDate from '@/src/components/forms/AppInputDate'
import AppInputRadio from '@/src/components/forms/AppInputRadio'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import Heading6 from '@/src/components/typography/Heading6'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'

export default function MedicalRecord() {
  const handleTabChange = (selectedValue: string) => {
    console.log(`Selected tab: ${selectedValue}`)
  }
  const cardTypes = [
    { label: 'Ambulator karta', value: '1' },
    { label: 'Karta turi 2', value: '0' }
  ]
  const selectOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '0' }
  ]
  const ligotaOptions = [
    { label: 'Rezident', value: 'option1' },
    { label: 'Chet el fuqarosi', value: 'option2' },
    { label: 'Order', value: 'option3' }
  ]

  const maleOptions = [
    { label: 'Erkak', value: '1' },
    { label: 'Ayol', value: '0' }
  ]

  const documentOptions = [
    { label: 'Ozbekiston pasporti', value: '1' },
    { label: 'Chet el pasporti', value: '0' }
  ]

  const stateOptions = [
    { label: 'Ozbekiston ', value: '1' },
    { label: 'Turkmaniston', value: '0' }
  ]

  const regionOptions = [
    { label: 'Toshkent', value: '1' },
    { label: 'Jizzax', value: '0' }
  ]

  const districtOptions = [
    { label: 'Chilonzor', value: '1' },
    { label: 'Olmazor', value: '0' }
  ]
  const smsOptions = [
    { label: 'Sms', value: '1' },
    { label: 'Link', value: '0' }
  ]
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1)
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)

  return (
    <div>
      <RoundedBlock className='mb-4'>
        <div className='grid grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            <AppLabel isRequired={true} text='Karta turi' />
            <AppSelect selectedValue='1' options={cardTypes} />
          </div>
          <div>
            <AppLabel isRequired={true} text='Tartib raqam' />
            <AppInput />
          </div>
          <div>
            <AppLabel isRequired={true} text='Sana' />
            <AppInputDate placeholder='KK.OO.YYYY' />
          </div>
          <div>
            <AppLabel text='Bemorni izlash' />
            <AppInput isSearch={true} placeholder='Bemorni izlash' />
          </div>
          <div>
            <AppLabel isRequired={true} text='Familiya' />
            <AppInput placeholder='Familiya' />
          </div>
          <div>
            <AppLabel isRequired={true} text='Ism' />
            <AppInput placeholder='Ism' />
          </div>
          <div>
            <AppLabel text='Otasining ismi' />
            <AppInput placeholder='Otasining ismi' />
          </div>
          <div>
            <AppLabel isRequired={true} text={t("Tug'ilgan sanasi")} />
            <AppInputDate placeholder='KK.OO.YYYY' />
          </div>
          <div>
            <AppLabel isRequired={true} text='Jinsi' />
            <AppInputRadio onChange={handleTabChange} options={maleOptions} />
          </div>
          <div>
            <AppLabel text='Ligota' />
            <AppInputRadio onChange={handleTabChange} options={ligotaOptions} />
          </div>
          <div>
            <AppLabel isRequired={true} text='Telefon raqami' />
            <AppInput placeholder='+998 90 123 45 67' />
          </div>
          <div>
            <AppLabel text='Qo’shimcha telefon raqami' />
            <AppInput placeholder='+998 90 123 45 67' />
          </div>
          <div>
            <AppLabel text='Natijani korish' />
            <AppInputCheckbox
              className='grid-cols-4'
              onChange={handleTabChange}
              options={smsOptions}
            />
          </div>
        </div>
        <hr className='col-span-12' />
        <div className='col-span-12 grid grid-cols-5 gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
          <div>
            <AppLabel text='Xujjat turi' />
            <AppSelect options={documentOptions} />
          </div>
          <div>
            <AppLabel text='Xujjat seriyasi va raqami' />
            <AppInput placeholder='AB1234567' />
          </div>
          <div>
            <AppLabel text='Berilgan sanasi' />
            <AppInputDate placeholder='KK.OO.YYYY' />
          </div>
          <div>
            <AppLabel text='Amal qilish muddati' />
            <AppInputDate placeholder='KK.OO.YYYY' />
          </div>
          <div>
            <AppLabel text='Kim tomonidan berilgan' />
            <AppInput placeholder='Toshkent shahar, Yunusobod IIB' />
          </div>
        </div>
        <div className='col-span-12 grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
          <div>
            <AppLabel text='Davlat' />
            <AppSelect options={stateOptions} />
          </div>
          <div>
            <AppLabel text='Viloyat' />
            <AppSelect options={regionOptions} />
          </div>
          <div>
            <AppLabel text='Tuman' />
            <AppSelect options={districtOptions} />
          </div>
          <div>
            <AppLabel text='Ro’yxatda turgan manzil' />
            <AppInput placeholder='Abdulla Qodiriy 14' />
          </div>
        </div>
        <div className='col-span-12 grid grid-cols-2 gap-5'>
          <div>
            <AppLabel text='Yashash manzili' />
            <AppInput placeholder='Abdulla Qodiriy 14' />
          </div>
          <div>
            <AppLabel text='Ish joyi' />
            <AppInput placeholder='Toshkent Shahar hokimligi' />
          </div>
        </div>
      </RoundedBlock>

      <div className='grid grid-cols-12 gap-5'>
        <RoundedBlock className='col-span-8'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          ipsum distinctio harum!
        </RoundedBlock>
        <RoundedBlock className='col-span-4'>
          <Heading6>{'Kalkulyator'}</Heading6>
          <div className='gap-1 rounded-lg border border-[#2324270D] px-3'>
            {numbers.map(number => (
              <div
                className='flex items-center justify-between border-b border-[#F4F4F4] py-3 text-sm'
                key={number}
              >
                <span className='font-semibold leading-[18px] text-[#23242780]'>
                  Fizoterapent - Konsultatsiya
                </span>
                <span className=' font-semibold leading-[18px]'>
                  <b className='font-semibold text-[#29CED2]'>
                    10{number} 000{' '}
                  </b>
                  so’m
                </span>
              </div>
            ))}
          </div>
        </RoundedBlock>
      </div>
    </div>
  )
}
