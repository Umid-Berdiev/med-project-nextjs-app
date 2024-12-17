import type { AxiosInstance } from 'axios'
import axios from 'axios'
import toast from 'react-hot-toast'

import { cleareStorage } from './storage'
import type { Locale } from './i18n'
import { getTokenCSR } from './auth'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const isCSR = typeof window !== 'undefined'

// @ts-ignore
function createAxios(locale: string = 'uz') {
  const token = isCSR ? getTokenCSR() : undefined

  const $request = axios.create({
    baseURL: API_URL,
    headers: {
      'Accept-Language': locale,
      ...(token && { Authorization: `Bearer ${token}` })
    }
  })

  $request.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  $request.interceptors.response.use(
    response => {
      return response
    },
    error => {
      let message

      switch (error.response?.status) {
        case 500:
          message = 'Внутренняя ошибка сервера!'
          console.log('error', 'Внутренняя ошибка сервера!')

          break
        case 401:
          message = error.response?.data?.message

          if (typeof window !== 'undefined') {
            cleareStorage()
            window.location.href = `/`
          }

          break
        case 400:
          message = error.response?.data?.message
          break
        default:
          message = error.response?.data?.message
      }

      if (isCSR) {
        toast.error(message as string)
      }

      throw error
    }
  )

  return $request
}

function withAxios(locale: Locale = 'uz'): AxiosInstance {
  return createAxios(locale)
}

export { withAxios }
