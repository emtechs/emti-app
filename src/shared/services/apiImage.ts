import { FieldValues } from 'react-hook-form'
import { apiUsingNow } from '../../shared'

const create = async (data: FieldValues) => {
  await apiUsingNow.post('images', data)
}

export const apiImage = {
  create,
}
