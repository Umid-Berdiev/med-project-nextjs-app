import Cookies from 'js-cookie'

export function getTokenCSR(): string | undefined {
  return Cookies.get('_med_control_token')
}
