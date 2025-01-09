import { withAxios } from './api'
import endpoints from './endpoints'
type Props = {
  parent?: number
  expand?: string
}
export const getServicesQuery = async (params: Props) => {
  const { data: response } = await withAxios()(endpoints.services, {
    params
  })
  return response
}
