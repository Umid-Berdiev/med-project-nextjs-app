'use client'

import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import ServicesBlock from '@/src/components/blocks/ServicesBlock'
import Breadcrumb from '@/src/components/Breadcrumbs'
import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputCheckbox from '@/src/components/forms/AppInputCheckbox'
import AppInputDate from '@/src/components/forms/AppInputDate'
import AppInputRadio from '@/src/components/forms/AppInputRadio'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import Heading1 from '@/src/components/typography/Heading1'
import Heading6 from '@/src/components/typography/Heading6'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'

export default function PatientsAddPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const { t } = useTranslations(locale as Locale)
  const handleTabChange = (selectedValue: string) => {
    console.log(`Selected tab: ${selectedValue}`)
  }

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

  return (
    <div className='container'>
      <Breadcrumb
        breadcrumbs={[
          { label: t('Bemorlar'), href: `/${locale}/patients` },
          { label: t("Bemor qo'shish") }
        ]}
      />
      <section>
        <div className='flex items-center justify-between'>
          <Heading1>{t('Bemor qo’shish')}</Heading1>
          <Button>
            {t('Qo’shish')}{' '}
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.99984 1.66675C14.6022 1.66675 18.3332 5.39771 18.3332 10.0001C18.3332 14.6025 14.6022 18.3334 9.99984 18.3334C5.39746 18.3334 1.6665 14.6025 1.6665 10.0001C1.6665 5.39771 5.39746 1.66675 9.99984 1.66675ZM9.99984 5.83342C9.68342 5.83342 9.42193 6.06854 9.38054 6.37361L9.37484 6.45842V9.37508H6.45817C6.11299 9.37508 5.83317 9.6549 5.83317 10.0001C5.83317 10.3165 6.0683 10.578 6.37336 10.6194L6.45817 10.6251H9.37484V13.5417C9.37484 13.8869 9.65466 14.1667 9.99984 14.1667C10.3163 14.1667 10.5777 13.9316 10.6191 13.6266L10.6248 13.5417V10.6251H13.5415C13.8867 10.6251 14.1665 10.3453 14.1665 10.0001C14.1665 9.68367 13.9314 9.42217 13.6263 9.38079L13.5415 9.37508H10.6248V6.45842C10.6248 6.11324 10.345 5.83342 9.99984 5.83342Z'
                fill='white'
              />
            </svg>
          </Button>
        </div>
        <RoundedBlock className='my-4 xl:grid-cols-12'>
          <div className='grid gap-5 lg:grid-cols-3 xl:col-span-8'>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Karta turi' />
              <AppSelect options={selectOptions} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Tartib raqam' />
              <AppInput defaultValue='36764' placeholder='Familiya' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Sana' />
              <AppInputDate mode='single' />
            </div>
          </div>
          <div className='xl:col-span-4'>
            <div className='col-span-12'>
              <AppLabel text='Bemorni izlash' />
              <AppInput isSearch={true} placeholder='Bemorni izlash' />
            </div>
          </div>
        </RoundedBlock>
        <RoundedBlock className='mb-4'>
          <div className='grid gap-5 lg:grid-cols-2 xl:grid-cols-3'>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Familiya' />
              <AppInput placeholder='Familiya' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Ism' />
              <AppInput placeholder='Ism' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Otasining ismi' />
              <AppInput placeholder='Otasining ismi' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text={t("Tug'ilgan sanasi")} />
              <AppInputDate placeholder='KK.OO.YYYY' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Jinsi' />
              <AppInputRadio onChange={handleTabChange} options={maleOptions} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Ligota' />
              <AppInputRadio
                onChange={handleTabChange}
                options={ligotaOptions}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel isRequired={true} text='Telefon raqami' />
              <AppInput placeholder='+998 90 123 45 67' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Qo’shimcha telefon raqami' />
              <AppInput placeholder='+998 90 123 45 67' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Natijani korish' />
              <AppInputCheckbox
                className='grid-cols-4'
                onChange={handleTabChange}
                options={smsOptions}
              />
            </div>
          </div>
          <hr className='col-span-12' />
          <div className='col-span-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-5'>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Xujjat turi' />
              <AppSelect options={documentOptions} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Xujjat seriyasi va raqami' />
              <AppInput placeholder='AB1234567' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Berilgan sanasi' />
              <AppInputDate placeholder='KK.OO.YYYY' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Amal qilish muddati' />
              <AppInputDate placeholder='KK.OO.YYYY' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Kim tomonidan berilgan' />
              <AppInput placeholder='Toshkent shahar, Yunusobod IIB' />
            </div>
          </div>
          <div className='col-span-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4'>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Davlat' />
              <AppSelect options={stateOptions} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Viloyat' />
              <AppSelect options={regionOptions} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Tuman' />
              <AppSelect options={districtOptions} />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Ro’yxatda turgan manzil' />
              <AppInput placeholder='Abdulla Qodiriy 14' />
            </div>
          </div>
          <div className='col-span-12 grid grid-cols-2 gap-5'>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Yashash manzili' />
              <AppInput placeholder='Abdulla Qodiriy 14' />
            </div>
            <div className='flex flex-col gap-1'>
              <AppLabel text='Ish joyi' />
              <AppInput placeholder='Toshkent Shahar hokimligi' />
            </div>
          </div>
        </RoundedBlock>
        <div className='grid gap-5 sm:grid-cols-12'>
          <ServicesBlock className='sm:col-span-7 xl:col-span-8' />
          <RoundedBlock className='sm:col-span-5 xl:col-span-4'>
            <Heading6>{t('Kalkulyator')}</Heading6>
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
      </section>
    </div>
  )
}
