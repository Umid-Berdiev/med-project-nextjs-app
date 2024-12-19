'use client'

import Button from '@/src/components/Button'
import AppInput from '@/src/components/forms/AppInput'
import AppInputPassword from '@/src/components/forms/AppInputPassword'
import AppLabel from '@/src/components/forms/AppLabel'
import AppLogo from '@/src/components/icons/AppLogo'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { withAxios } from '@/src/utils/api/api'
import endpoints from '@/src/utils/api/endpoints'
import { IResponseError } from '@/src/utils/interfaces'
import Cookies from 'js-cookie'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaRegUser } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import { ImSpinner9 } from 'react-icons/im'
interface FormValues {
  username: string
  password: string
}

const LoginPage = () => {
  const { locale } = useParams() as { locale: Locale }
  const { t } = useTranslations(locale)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true)
      const res = await withAxios().post(endpoints.auth.login, data)
      Cookies.set('_med_control_token', res.data.result?.access_token)
      toast.success(t('Tizimga muvaffaqiyatli kirdingiz'))
      router.push(`/${locale}/patients`)
    } catch (e) {
      const { response } = e as IResponseError
      const { errors } = response.data

      if (errors) {
        setError('username', {
          type: 'server',
          message: errors?.error as string
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-background p-16'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-[480px] flex-col gap-6 rounded-lg bg-white p-8 shadow-lg'
      >
        <div className='flex w-full justify-center'>
          <AppLogo width={200} height={70} />
        </div>
        <div className='text-center text-xl font-semibold text-gray-700'>
          {t('Tizimga kirish')}
        </div>

        <Controller
          name='username'
          control={control}
          rules={{ required: t('Loginni kiriting') }}
          render={({ field }) => (
            <div>
              <AppLabel isRequired text={t('Login')} />
              <AppInput
                value={field.value}
                onChange={field.onChange}
                placeholder={t('Loginingizni kiriting')}
                icon={<FaRegUser />}
                iconPosition='left'
              />
              {errors.username && (
                <div className='text-xs text-red-500'>
                  {errors.username.message}
                </div>
              )}
            </div>
          )}
        />

        <Controller
          name='password'
          control={control}
          rules={{ required: t('Parolni kiriting') }}
          render={({ field }) => (
            <div>
              <AppLabel isRequired text={t('Password')} />
              <AppInputPassword
                value={field.value}
                onChange={field.onChange}
                placeholder={t('Parolingizni kiriting')}
                icon={<FiLock />}
                iconPosition='left'
                onShowPassword={() => setShowPassword(!showPassword)}
                showPassword={showPassword}
              />
              {errors.password && (
                <div className='text-xs text-red-500'>
                  {errors.password.message}
                </div>
              )}
            </div>
          )}
        />
        <Button type='submit'>
          <span>{t('Kirish')}</span>
          {isLoading && <ImSpinner9 className='h-4 w-4 animate-spin' />}
        </Button>
      </form>
    </div>
  )
}

export default LoginPage
