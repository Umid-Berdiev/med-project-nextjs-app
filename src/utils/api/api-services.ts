import { withAxios } from './api'
import endpoints from './endpoints'
type Props = {
  parent?: number
  expand?: string
  parent_id?: number
}
export const getServicesQuery = async (params: Props) => {
  const { data: response } = await withAxios()(endpoints.services, {
    params
  })
  return response
}
export const deleteServicesQuery = async (id: number) => {
  const { data: response } = await withAxios().post(
    `${endpoints.deleteService}?id=${id}`
  )
  return response
}
