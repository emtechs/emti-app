import { FieldValues } from 'react-hook-form'
import { apiUsingNow, iUser } from '../../shared'

const profile = async (): Promise<iUser> => {
  const { data: response } = await apiUsingNow.get<iUser>('users/profile')
  return response
}

const update = async (id: string, data: FieldValues): Promise<iUser> => {
  const { data: response } = await apiUsingNow.patch<iUser>(`users/${id}`, data)
  return response
}

export const apiUser = {
  profile,
  update,
}
