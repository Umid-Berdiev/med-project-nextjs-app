import type { Locale } from './i18n'

interface TranslationDictionary {
  [key: string]: string
}

import en from '@/locales/en.json'
import uz from '@/locales/uz.json'
import ru from '@/locales/ru.json'

export const getTranslation = (dictionary: TranslationDictionary | {}) => {
  const t = (key: string) => {
    return (dictionary as TranslationDictionary)[key] ?? key
  }

  return { t }
}

export const useTranslations = (lang: Locale) => {
  const dictionary = (): TranslationDictionary | {} => {
    switch (lang) {
      case 'en':
        return en
      case 'uz':
        return uz

      case 'ru':
        return ru

      default:
        return uz
    }
  }

  const t = (key: string) => {
    return (dictionary() as TranslationDictionary)[key] ?? key
  }

  return { t }
}
