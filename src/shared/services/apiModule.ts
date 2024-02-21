import { FieldValues } from 'react-hook-form'
import { apiUsingNow } from '../../shared'

const create = async (data: FieldValues) => {
  await apiUsingNow.post('modules', data)
}

const list = async () => {
  await apiUsingNow.get('modules')
}

const retrieve = async (id: string) => {
  await apiUsingNow.get('modules/' + id)
}

const update = async (id: string) => {
  await apiUsingNow.patch('modules/' + id)
}

const destroy = async (id: string) => {
  await apiUsingNow.delete('modules/' + id)
}

export const apiModule = {
  create,
  list,
  retrieve,
  update,
  destroy,
}
