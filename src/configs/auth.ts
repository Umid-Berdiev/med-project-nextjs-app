import Cookies from 'js-cookie'

export function getTokenCSR(): string | undefined {
  return Cookies.get('_med_control_token')
    ? JSON.parse(Cookies.get('_med_control_token') as string)?.token
    : undefined
}
