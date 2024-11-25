import { useTranslations } from '@/src/configs/t'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoTwitter
} from 'react-icons/bi'
import { Locale } from '../configs/i18n'
import AppLogo from './icons/AppLogo'

export default function TheFooter() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  return (
    <footer className=''>
      <div className='container flex flex-col gap-y-8 pb-6 pt-12'>
        <div className='flex flex-row'>
          <div className='max-w-[227px]'>
            <AppLogo />
            <p className='mt-6'>
              {t('Yorqin kelajagingizni ISFT Instituti bilan boshlang!')}
            </p>
          </div>
          <div className='ml-auto flex lg:gap-x-10'>
            <div className='lg:min-w-[210px]'>
              <p className='font-serif font-bold'>{t('Tezkor havolalar')}</p>
              <ul className='mt-2 flex flex-col'>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    {t('Biz haqimizda')}
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    {t('Karyera')}
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    {t('Yangiliklar')}
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    {t('FAQ')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className='lg:min-w-[210px]'>
              <p className='font-serif font-bold'>{t('Foydali havolalar')}</p>
              <ul className='mt-2 flex flex-col'>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    {t('Online kitoblar')}
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    {t('Konferensiyalar')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className='lg:min-w-[210px]'>
              <p className='font-serif font-bold'>{t("Ta'lim dasturlari")}</p>
              <ul className='mt-2 flex flex-col'>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    {t('Bakalavriat')}
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    {t('Magistratura')}
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    {t("Ikkinchi oliy ta'lim")}
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    {t('Xorijiy fuqarolar qabuli')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className='lg:min-w-[210px]'>
              <p className='font-serif font-bold'>{t('Sotsial medialar')}</p>
              <ul className='mt-2 flex flex-col'>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    <BiLogoFacebook className='inline-block text-2xl' />
                    <span className='ml-3'>Facebook</span>
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    <BiLogoInstagram className='inline-block text-2xl' />
                    <span className='ml-3'>Instagram</span>
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    <BiLogoTwitter className='inline-block text-2xl' />
                    <span className='ml-3'>Twitter</span>
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href={'/'} className='text-sm'>
                    <BiLogoLinkedinSquare className='inline-block text-2xl' />
                    <span className='ml-3'>LinkedIn</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='text-center'>
          <p>
            <span>© {new Date().getFullYear()}</span>{' '}
            <Link href={'/'}>isft.uz</Link>,{' '}
            <span>{t('Barcha huquqlar himoyalangan')}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
