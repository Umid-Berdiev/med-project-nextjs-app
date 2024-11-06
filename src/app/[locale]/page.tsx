'use client';

import Heading2 from '@/src/components/typography/Heading2'
import { useTranslations } from 'next-intl'
import InputComponent from './components/InputComponent'
import SelectComponent from './components/SelectComponent'

export default function DashboardPage() {
  const t = useTranslations('')

  const handleSelectChange = (value: string) => {
    console.log('Selected:', value);
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className='container p-4'>
      <section className=''>
        <div className='p-4 rounded-xl bg-white w-full grid grid-cols-4 gap-5 '>
          <SelectComponent label="Choose an option" options={options} onSelect={handleSelectChange} />
          <InputComponent label="Tartib raqam" placeholder="36764" />
          <InputComponent label="Bemorni izlash" placeholder="Bemorni izlash" />
        </div>
      </section>
      <Heading2>{t('Start your journey')}</Heading2>
      <p>
        {t(
          'This nextjs template includes theme swicher, lang switcher and tailwindcss with daisyUI'
        )}
      </p>
    </div>
  )
}
