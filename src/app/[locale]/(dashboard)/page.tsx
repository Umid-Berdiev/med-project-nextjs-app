'use client'

import AppInput from '@/src/components/forms/AppInput';
import AppInputDate from '@/src/components/forms/AppInputDate';
import AppInputRadio from '@/src/components/forms/AppInputRadio';
import AppInputCheckbox from '@/src/components/forms/AppInputCheckbox';
import AppLabel from '@/src/components/forms/AppLabel';
import AppSelect from '@/src/components/forms/AppSelect';
import Heading1 from '@/src/components/typography/Heading1';
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import { useTranslations } from 'next-intl';
import Breadcrumb from '@/src/components/Breadcrumbs'
import Heading6 from '@/src/components/typography/Heading6';

export default function DashboardPage() {
  const t = useTranslations('')

  const handleTabChange = (selectedValue: string) => {
    console.log(`Selected tab: ${selectedValue}`);
  };

  const selectOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '0' },
  ];
  const ligotaOptions = [
    { label: 'Rezident', value: 'option1' },
    { label: 'Chet el fuqarosi', value: 'option2' },
    { label: 'Order', value: 'option3' },
  ];

  const maleOptions = [
    { label: 'Erkak', value: '1' },
    { label: 'Ayol', value: '0' },
  ];

  const documentOptions = [
    { label: 'Ozbekiston pasporti', value: '1' },
    { label: 'Chet el pasporti', value: '0' },
  ];

  const stateOptions = [
    { label: 'Ozbekiston ', value: '1' },
    { label: 'Turkmaniston', value: '0' },
  ];

  const regionOptions = [
    { label: 'Toshkent', value: '1' },
    { label: 'Jizzax', value: '0' },
  ];

  const districtOptions = [
    { label: 'Chilonzor', value: '1' },
    { label: 'Olmazor', value: '0' },
  ];
  const smsOptions = [
    { label: 'Sms', value: '1' },
    { label: 'Link', value: '0' },
  ];

  return (
    <div className='container p-4'>
      <Breadcrumb breadcrumbs={[{ label: 'Bemor qo’shish' }]} />
      <section>
        <Heading1>{t('Bemor qo’shish')}</Heading1>
        <RoundedBlock className='grid-cols-12 mb-4'>
          <div className='grid gap-5 col-span-8 grid-cols-3'>
            <div>
              <AppLabel isRequired={true} text='Karta turi' />
              <AppSelect options={selectOptions} />
            </div>
            <div>
              <AppLabel isRequired={true} text='Tartib raqam' />
              <AppInput value="36764" placeholder='Familiya' />
            </div>
            <div>
              <AppLabel isRequired={true} text='Sana' />
              <AppInputDate />
            </div>
          </div>
          <div className='col-span-4'>
            <div className='col-span-12'>
              <AppLabel text='Bemorni izlash' />
              <AppInput isSearch={true} placeholder='Bemorni izlash' />
            </div>
          </div>
        </RoundedBlock>
        <RoundedBlock className='mb-4'>
          <div className='grid gap-5 grid-cols-3 col-span-12'>
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
              <AppLabel isRequired={true} text='Tug’ilgan sanasi' />
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
              <AppInputCheckbox className='grid-cols-4' onChange={handleTabChange} options={smsOptions} />

            </div>
          </div>
          <hr className='col-span-12' />
          <div className='grid gap-5 grid-cols-5 col-span-12'>
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
          <div className='grid gap-5 grid-cols-4 col-span-12'>
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
          <div className='grid gap-5 grid-cols-2 col-span-12'>
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
          <RoundedBlock className='col-span-9'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ipsum distinctio harum!
          </RoundedBlock>
          <RoundedBlock className='col-span-3'>
          <Heading6>{t('Kalkulyator')}</Heading6>
          </RoundedBlock>
        </div>



      </section>
    </div>
  )
}
