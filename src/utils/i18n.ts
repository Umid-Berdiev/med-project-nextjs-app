import { i18n } from '../configs/i18n'
import { ensurePrefix } from './string'

export const isUrlMissingLocale = (url: string) => {
  return i18n.locales.every(
    locale => !(url.startsWith(`/${locale}/`) || url === `/${locale}`)
  )
}

export const getLocalizedUrl = (url: string, languageCode: string): string => {
  if (!url || !languageCode)
    throw new Error("URL or Language Code can't be empty")

  return isUrlMissingLocale(url)
    ? `/${languageCode}${ensurePrefix(url, '/')}`
    : url
}
