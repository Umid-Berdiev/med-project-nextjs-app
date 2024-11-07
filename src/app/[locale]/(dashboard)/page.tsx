'use client';

import AppInputRadio from '@/src/components/forms/AppInputRadio';
import AppSelect from '@/src/components/forms/AppSelect';
import AppInput from '@/src/components/forms/AppInput';
import AppLabel from '@/src/components/forms/AppLabel';
import Heading1 from '@/src/components/typography/Heading1'
import { useTranslations } from 'next-intl'

export default function DashboardPage() {
  const t = useTranslations('')

  const handleTabChange = (selectedValue: string) => {
    console.log(`Selected tab: ${selectedValue}`);
  };

  const selectOptions = ['Option 1', 'Option 2', 'Option 3'];

  const radioOptions = [
    { label: 'Rezident', value: 'option1' },
    { label: 'Chet el fuqarosi', value: 'option2' },
    { label: 'Order', value: 'option3' },
  ];

  return (
    <div className='container p-4'>
      <section className=''>
        <Heading1>{t('Bemor qo’shish')}</Heading1>
        <div className='grid grid-cols-4 gap-5'>
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
            <AppInput value='23.09.2024' />
          </div>

        </div>
        <div>
          <AppLabel isRequired={true} text='Ligota' />
          <div>
            <AppInputRadio onChange={handleTabChange} options={radioOptions} />
          </div>
        </div>
      </section>
    </div>
  )
}
