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
    <div className='container pb-10'>
      <section className='flex flex-col items-center justify-center py-16'>
        <Heading2>{t('Start your journeyyy')}</Heading2>
        <p>
          {t(
            'This nextjs template includes theme swicher, lang switcher and tailwindcss with daisyUI'
          )}
        </p>
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
