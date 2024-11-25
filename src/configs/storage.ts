import Cookies from 'js-cookie'
export const cleareStorage = () => {
  Cookies.remove('_med_control_token')
}
